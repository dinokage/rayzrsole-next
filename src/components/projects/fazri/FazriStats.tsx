"use client"

import { TrendingUp, Clock, Target, DollarSign } from "lucide-react"
import NumberFlow from "@number-flow/react"
import { useEffect, useState, useRef } from "react"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

const stats = [
  {
    icon: Clock,
    value: 75,
    suffix: "%",
    label: "Faster Incident Response",
    description: "Security teams resolve issues in minutes instead of hours",
  },
  {
    icon: Target,
    value: 90,
    suffix: "%",
    label: "Fewer False Alarms",
    description: "Context-aware alerts mean less noise, more signal",
  },
  {
    icon: TrendingUp,
    value: 2.8,
    prefix: "$",
    suffix: "B",
    label: "Market Opportunity",
    description: "Campus security systems market growing rapidly",
  },
  {
    icon: DollarSign,
    value: 60,
    suffix: "%",
    label: "Lower Staffing Costs",
    description: "Same security coverage with fewer personnel",
  },
]

export function FazriStats() {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (statsRef.current) observer.observe(statsRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={statsRef} className="relative mx-auto max-w-6xl">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 ring-1 ring-orange-500/20 mb-6">
          <TrendingUp className="size-4 text-orange-400" />
          <span className="text-sm font-medium text-orange-400">By The Numbers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white max-w-3xl mx-auto">
          Results that <span className="text-orange-400">matter</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Real improvements security teams see after deploying Fazri
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className={`relative p-6 rounded-xl bg-gray-900/50 ring-1 ring-gray-800 hover:ring-orange-500/30 group overflow-hidden ${prefersReducedMotion ? '' : 'transition-all duration-500'}`}
              style={prefersReducedMotion ? { opacity: 1 } : {
                animation: isVisible ? `slide-in-up 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {/* Animated background shimmer */}
              {!prefersReducedMotion && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent"
                  />
                </div>
              )}

              {/* Scan line effect */}
              {!prefersReducedMotion && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line" />
              )}

              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center size-12 rounded-lg bg-orange-500/10 ring-1 ring-orange-500/20 mb-4 group-hover:bg-orange-500/15 ${prefersReducedMotion ? '' : 'transition-all duration-300 group-hover:scale-110 group-hover:rotate-3'}`}>
                <Icon className="size-6 text-orange-400" />
              </div>

              {/* Value */}
              <div className="relative flex items-baseline gap-1 mb-2">
                {stat.prefix && (
                  <span className="text-2xl font-bold text-orange-400 font-mono">
                    {stat.prefix}
                  </span>
                )}
                <NumberFlow
                  value={isVisible ? stat.value : 0}
                  className="text-4xl font-bold text-white font-mono tabular-nums"
                  trend={1}
                  animated
                />
                {stat.suffix && (
                  <span className="text-2xl font-bold text-orange-400 font-mono">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <h3 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {stat.description}
              </p>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scan-line {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan-line {
          animation: scan-line 2s ease-in-out infinite;
        }
      `}</style>

      {/* Bottom CTA hint */}
      <div className="mt-16 text-center">
        <p className="text-gray-500">
          Want to see these results at your campus?{" "}
          <a href="#demo" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
            Schedule a demo
          </a>
        </p>
      </div>
    </section>
  )
}
