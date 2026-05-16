"use client";
import { SiLeetcode } from 'react-icons/si'
import { MapPin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300/10 dark:bg-blue-700/10 rounded-full blur-3xl animate-float-slower pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full animate-shimmer" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 animate-on-scroll fade-left delay-100 mt-2 lg:mt-6">
            <div className="relative group [perspective:1000px]">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 opacity-50 blur-xl group-hover:opacity-80 transition-opacity duration-700 animate-gradient-sweep" />
              <div className="relative aspect-square rounded-2xl bg-gradient-to-tr from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 flex items-center justify-center shadow-inner overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]]">
                <img
                  src={personalInfo.portfolioImage || "/placeholder.svg"}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-xl animate-float-y" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 animate-on-scroll fade-right delay-200 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Passionate Developer &amp; Tech Enthusiast
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-pretty">
              Hi, I'm Aman, a B.Tech (CSE) student at GGSIPU with a curious mind
              and a builder's mindset. I enjoy creating things that matter,
              taking on challenges, and constantly pushing myself to grow.
              <br />
              <br />
              Beyond tech, I have a strong inclination towards creative writing,
              where I explore ideas and express perspectives in unique ways. I'm
              also an avid gamer, which fuels my problem-solving skills,
              strategic thinking, and curiosity to understand how things work
              beneath the surface.
              <br />
              <br />I value creativity, consistency, and good teamwork. I like
              leading when needed, learning wherever possible, and making the
              most out of every opportunity that comes my way.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: personalInfo.location,
                  href: null,
                },
                {
                  icon: <i className="fa-brands fa-github text-lg" />,
                  label: personalInfo.github,
                  href: personalInfo.githuburl,
                  external: true,
                },
                {
                  icon: <i className="fa-brands fa-linkedin text-lg" />,
                  label: personalInfo.linkedinLabel,
                  href: personalInfo.linkedinUrl,
                  external: true,
                },
                {
                  icon: <SiLeetcode className="text-lg" />,
                  label: "LeetCode",
                  href: personalInfo.leetcodeUrl,
                  external: true,
                },
              ].map((item, i) => {
                const Wrapper = item.href ? "a" : "div";
                const props = item.href
                  ? {
                    href: item.href,
                    ...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {}),
                  }
                  : {};
                return (
                  <Wrapper
                    key={i}
                    {...props}
                    style={{ transitionDelay: `${300 + i * 80}ms` }}
                    className={`group flex items-center space-x-3 text-gray-600 dark:text-gray-300 px-4 py-3 rounded-xl border border-gray-200/70 dark:border-gray-700/70 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 animate-on-scroll fade-up`}
                  >
                    <span className="text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {item.icon}
                    </span>
                    <span className="truncate hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {item.label}
                    </span>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
