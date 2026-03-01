"use client"

import { XCircle } from "lucide-react"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

const problems = [
  {
    title: "You can't see the full picture",
    description: "Security cameras only show one angle. Card swipes tell you someone entered, but not where they went. WiFi logs show devices, but not people. Each system works alone.",
  },
  {
    title: "Incidents catch you off guard",
    description: "By the time you notice something wrong, it's too late. You're reacting instead of preventing. There's no way to spot patterns before they become problems.",
  },
  {
    title: "Finding information takes forever",
    description: "Someone reports an incident from yesterday. Now you're checking five different systems, correlating timestamps, and piecing together what happened. Hours wasted on basic questions.",
  },
]

export function FazriProblem() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative mx-auto max-w-6xl">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 ring-1 ring-red-500/20 mb-6">
          <XCircle className="size-4 text-red-400" />
          <span className="text-sm font-medium text-red-400">The Problem</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white max-w-3xl mx-auto">
          Campus security shouldn&apos;t feel like detective work
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Your campus has dozens of security systems. But they don&apos;t talk to each other.
        </p>
      </div>

      {/* Problem cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-xl bg-gray-900/50 ring-1 ring-gray-800 hover:ring-red-500/20 group/problem overflow-hidden ${prefersReducedMotion ? '' : 'transition-all duration-500'}`}
            style={prefersReducedMotion ? { opacity: 1 } : {
              animation: `fade-slide-in 0.6s ease-out ${index * 0.15}s forwards`,
              opacity: 0
            }}
          >
            {/* Animated background glitch effect */}
            {!prefersReducedMotion && (
              <div className="absolute inset-0 opacity-0 group-hover/problem:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-red-500/5" />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent"
                  style={{
                    animation: 'problem-scan 3s ease-in-out infinite'
                  }}
                />
              </div>
            )}

            {/* Decorative element with pulse */}
            <div className="absolute top-0 left-0 w-1 h-16 bg-red-500/50 rounded-r group-hover/problem:h-24 group-hover/problem:bg-red-500/70 transition-all duration-500" />

            {/* Warning indicator */}
            <div className="absolute top-4 right-4 size-2 rounded-full bg-red-500/60 group-hover/problem:animate-ping" />
            <div className="absolute top-4 right-4 size-2 rounded-full bg-red-500" />

            <h3 className="relative text-xl font-semibold text-white mb-3 pr-8 group-hover/problem:text-red-50 transition-colors">
              {problem.title}
            </h3>
            <p className="relative text-gray-400 leading-relaxed group-hover/problem:text-gray-300 transition-colors">
              {problem.description}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes problem-scan {
          0%, 100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
        }
      `}</style>

      {/* Bottom emphasis */}
      <div className="mt-12 text-center">
        <p className="text-lg text-orange-400 font-medium">
          Fazri Analyzer brings everything together in one place
        </p>
      </div>
    </section>
  )
}
