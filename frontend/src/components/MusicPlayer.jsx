'use client'

import { useEffect, useRef, useState } from 'react'
import { tracks } from '../data/portfolioData'

const fmt = (s) => {
  if (!isFinite(s) || s < 0) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.6)
  const [progress, setProgress] = useState(0) // 0-1
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)
  const [error, setError] = useState(false)
  const [nudge, setNudge] = useState(false)

  const track = tracks[index] || null
  const hasTracks = tracks.length > 0

  // Show the "Want to hear some music?" nudge once per session,
  // a few seconds after the page loads — auto-hides after a while.
  useEffect(() => {
    if (!hasTracks) return
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('mp-nudge-seen') === '1') return

    const showT = setTimeout(() => setNudge(true), 3500)
    const hideT = setTimeout(() => {
      setNudge(false)
      sessionStorage.setItem('mp-nudge-seen', '1')
    }, 14000)

    return () => {
      clearTimeout(showT)
      clearTimeout(hideT)
    }
  }, [hasTracks])

  // Dismiss nudge as soon as the panel is opened
  useEffect(() => {
    if (open && nudge) {
      setNudge(false)
      try {
        sessionStorage.setItem('mp-nudge-seen', '1')
      } catch {}
    }
  }, [open, nudge])

  const dismissNudge = () => {
    setNudge(false)
    try {
      sessionStorage.setItem('mp-nudge-seen', '1')
    } catch {}
  }

  // Sync volume
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  // Load new src on track change
  useEffect(() => {
    setError(false)
    setProgress(0)
    setCurrent(0)
    if (!audioRef.current || !track) return
    audioRef.current.load()
    if (playing) {
      audioRef.current.play().catch(() => setPlaying(false))
    }
  }, [index]) // eslint-disable-line react-hooks/exhaustive-deps

  const togglePlay = async () => {
    if (!audioRef.current || !track) return
    try {
      if (playing) {
        audioRef.current.pause()
        setPlaying(false)
      } else {
        await audioRef.current.play()
        setPlaying(true)
      }
    } catch {
      setPlaying(false)
      setError(true)
    }
  }

  const next = () => setIndex((i) => (i + 1) % tracks.length)
  const prev = () => setIndex((i) => (i - 1 + tracks.length) % tracks.length)

  const onTime = () => {
    const a = audioRef.current
    if (!a || !a.duration) return
    setCurrent(a.currentTime)
    setDuration(a.duration)
    setProgress(a.currentTime / a.duration)
  }

  const onSeek = (e) => {
    const a = audioRef.current
    if (!a || !a.duration) return
    const v = Number(e.target.value)
    a.currentTime = (v / 100) * a.duration
  }

  return (
    <>
      {/* Hidden audio element */}
      {track && (
        <audio
          ref={audioRef}
          src={track.src}
          preload="metadata"
          onTimeUpdate={onTime}
          onLoadedMetadata={onTime}
          onEnded={next}
          onError={() => {
            setError(true)
            setPlaying(false)
          }}
        />
      )}

      {/* Expanded panel — fixed, sits above the toggle button */}
      <div
        className={`fixed left-5 sm:left-8 bottom-24 z-50 origin-bottom-left transition-all duration-300 ease-out ${
          open
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        }`}
      >
        <div className="w-72 sm:w-80 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-2xl shadow-blue-500/10 p-4">
            <div className="flex items-center gap-3">
              <div
                className={`relative w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md ${
                  playing ? 'animate-glow-pulse' : ''
                }`}
                aria-hidden="true"
              >
                <i className={`fa-solid fa-music text-base ${playing ? 'animate-bounce-y-soft' : ''}`} />
                {playing && (
                  <span className="absolute inset-0 rounded-xl ring-2 ring-blue-400/60 animate-ring-ripple" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold truncate text-gray-900 dark:text-gray-100">
                  {hasTracks ? track.title : 'No tracks yet'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {hasTracks ? track.artist : 'Add files to /public/music/'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1.5 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Close music player"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div className="mt-4">
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress * 100}
                onChange={onSeek}
                disabled={!hasTracks}
                aria-label="Track progress"
                className="w-full accent-blue-600 cursor-pointer disabled:opacity-50"
              />
              <div className="flex items-center justify-between text-[11px] tabular-nums text-gray-500 dark:text-gray-400 mt-1">
                <span>{fmt(current)}</span>
                <span>{fmt(duration)}</span>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={prev}
                disabled={!hasTracks}
                aria-label="Previous track"
                className="w-10 h-10 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center disabled:opacity-40"
              >
                <i className="fa-solid fa-backward-step" />
              </button>
              <button
                type="button"
                onClick={togglePlay}
                disabled={!hasTracks}
                aria-label={playing ? 'Pause' : 'Play'}
                className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/40 transition-all flex items-center justify-center active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <i className={`fa-solid ${playing ? 'fa-pause' : 'fa-play'} ${playing ? '' : 'translate-x-[1px]'}`} />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={!hasTracks}
                aria-label="Next track"
                className="w-10 h-10 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center disabled:opacity-40"
              >
                <i className="fa-solid fa-forward-step" />
              </button>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <i className="fa-solid fa-volume-low text-gray-400 text-xs" aria-hidden="true" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                aria-label="Volume"
                className="flex-1 accent-blue-600 cursor-pointer"
              />
              <span className="text-[11px] text-gray-500 dark:text-gray-400 tabular-nums">
                {hasTracks ? `${index + 1}/${tracks.length}` : '0/0'}
              </span>
            </div>

          {error && (
            <p className="mt-3 text-[11px] text-red-500 dark:text-red-400 leading-snug">
              Couldn&apos;t load this track. Make sure the file exists at{' '}
              <code className="font-mono">{track?.src}</code>.
            </p>
          )}
        </div>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`fixed left-[4.75rem] sm:left-[5.5rem] bottom-5 sm:bottom-8 z-50 transition-all duration-500 ease-out ${
          nudge && !open
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 -translate-x-2 pointer-events-none'
        }`}
      >
        <div className="relative flex items-center gap-2 pl-3 pr-2 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl shadow-blue-500/10 animate-bounce-x">
          <span
            className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-white/95 dark:bg-gray-900/95 border-l border-b border-gray-200 dark:border-gray-800"
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={() => {
              dismissNudge()
              setOpen(true)
            }}
            className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap pr-1"
          >
            Want to hear some music?
          </button>
          <button
            type="button"
            onClick={dismissNudge}
            aria-label="Dismiss"
            className="w-6 h-6 rounded-full text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center shrink-0"
          >
            <i className="fa-solid fa-xmark text-[11px]" />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close music player' : 'Open music player'}
        aria-expanded={open}
        className="group fixed left-5 sm:left-8 bottom-5 sm:bottom-8 z-50 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 active:scale-95 flex items-center justify-center"
      >
        {playing && (
          <span className="absolute inset-0 rounded-full ring-2 ring-blue-400/60 animate-ring-ripple" aria-hidden="true" />
        )}
        {nudge && !open && !playing && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 ring-2 ring-white dark:ring-gray-900" />
          </span>
        )}
        <i
          className={`fa-solid ${open ? 'fa-xmark' : 'fa-music'} transition-transform duration-300 ${
            open ? 'rotate-90' : 'group-hover:scale-110'
          } ${playing && !open ? 'animate-bounce-y-soft' : ''}`}
        />
      </button>
    </>
  )
}
