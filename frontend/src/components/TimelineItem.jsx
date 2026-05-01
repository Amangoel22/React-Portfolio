export default function TimelineItem({
  period,
  title,
  subtitle,
  description,
  bullets,
  grade,
  delay = '',
}) {
  return (
    <div className={`relative pl-8 md:pl-10 animate-on-scroll fade-left ${delay}`}>
      {/* Dot with ripple */}
      <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-blue-600 border-4 border-gray-50 dark:border-gray-900 animate-ring-ripple" />

      <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-700">
        <span className="relative inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-3 overflow-hidden">
          <span className="relative z-10">{period}</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-blue-200/60 dark:via-blue-400/20 to-transparent" />
        </span>

        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        <h5 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
          {subtitle}
        </h5>

        {grade && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{grade}</p>
        )}

        {bullets && bullets.length > 0 ? (
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 leading-relaxed space-y-1">
            {bullets.map((b, i) => (
              <li
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className="transition-transform duration-300 hover:translate-x-1"
              >
                {b}
              </li>
            ))}
          </ul>
        ) : description ? (
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        ) : null}
      </div>
    </div>
  )
}
