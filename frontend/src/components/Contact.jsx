'use client'

import { useState } from 'react'
import { Mail, Send, Check } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

const handleSubmit = async (e) => {
  e.preventDefault()

  const { name, email, message } = form

  if (!name || !email || !message) {
    setError('Please fill all fields')
    setStatus(null)
    return
  }

  try {
    setError('')
    setStatus('sending')

    const res = await fetch('https://react-portfolio-backend-nge7.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (data.success) {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
      setError(data.message)
    }
  } catch (err) {
    console.error(err)
    setStatus('error')
    setError('Server error')
  }
}

  return (
    <section
      id="contact"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-blue-300/10 dark:bg-blue-700/10 rounded-full blur-3xl animate-float-slower pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full animate-shimmer" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className="animate-on-scroll fade-left delay-100">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I&apos;m currently looking for new opportunities and my inbox is always open.
              Whether you have a question or just want to say hi, I&apos;ll try my best to
              get back to you!
            </p>

            <div className="space-y-6">
              {[
                {
                  Icon: Mail,
                  label: 'Email',
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  Icon: null,
                  faIcon: 'fa-brands fa-linkedin',
                  label: 'LinkedIn',
                  value: personalInfo.linkedinLabel,
                  href: personalInfo.linkedinUrl,
                  external: true,
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                  className="group flex items-center space-x-4 transition-transform duration-300 hover:translate-x-1 animate-on-scroll fade-up"
                >
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                    {item.Icon ? (
                      <item.Icon className="w-5 h-5" />
                    ) : (
                      <i className={`${item.faIcon} text-lg`} />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    <span className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 animate-on-scroll fade-right delay-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
            <form className="space-y-6" id="contactForm" onSubmit={handleSubmit}>
              {[
                { id: 'name', label: 'Name', placeholder: 'Enter your full name…', type: 'text' },
                { id: 'email', label: 'Email', placeholder: 'example@gmail.com', type: 'email' },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    value={form[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="input-glow w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 outline-none"
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message here…"
                  className="input-glow w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group relative w-full inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-blue-500/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-sweep" />
                <span className="relative flex items-center">
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : status === 'success' ? (
                    <>
                      Sent
                      <Check className="ml-2 w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:animate-plane-fly" />
                    </>
                  )}
                </span>
              </button>
              {error && (
                <p className="text-center text-red-600 dark:text-red-400 text-sm font-medium">
                  {error}
                </p>
              )}


              {status === 'error' && (
                <p className="text-center text-red-600 dark:text-red-400 text-sm font-medium">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
