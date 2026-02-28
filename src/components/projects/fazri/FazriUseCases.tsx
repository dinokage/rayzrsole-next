"use client"

import {
  UserCheck,
  Clock,
  MapPin,
  Bell,
  Search,
  TrendingUp,
} from "lucide-react"
import { useState } from "react"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

export function FazriUseCases() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const useCases = [
    {
      icon: UserCheck,
      title: "Find anyone, instantly",
      description: "Where is Sarah right now? What building? Which floor? Get answers in seconds, not hours.",
      example: "A parent calls asking about their student. Instead of calling around, you know exactly where they last checked in and when.",
    },
    {
      icon: Clock,
      title: "Track unusual activity",
      description: "Someone accessing the lab at 3 AM? A guest wandering restricted areas? Get notified immediately.",
      example: "The system alerts you when a visitor badge is used to access multiple secure areas in quick succession.",
    },
    {
      icon: MapPin,
      title: "See movement patterns",
      description: "Understand how people move through your campus. Identify bottlenecks, optimize security coverage.",
      example: "Notice that most incidents happen in poorly-lit parking areas between 6-8 PM. Adjust patrols accordingly.",
    },
    {
      icon: Search,
      title: "Investigate faster",
      description: "Pull up someone's complete campus activity history. Where they've been, when, and with whom.",
      example: "Equipment went missing from a lab Thursday evening. See everyone who entered that room in the past week.",
    },
    {
      icon: Bell,
      title: "Get ahead of problems",
      description: "The system learns what normal looks like. When something deviates, you know before it escalates.",
      example: "A student who never misses class suddenly stops showing up anywhere on campus. Early intervention can save lives.",
    },
    {
      icon: TrendingUp,
      title: "Prove your security works",
      description: "Show administrators concrete data. Response times, incident prevention rates, coverage statistics.",
      example: "Board meeting asks about security ROI. Show them how response times improved 60% since deployment.",
    },
  ]

  return (
    <section className="relative mx-auto max-w-6xl">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 ring-1 ring-orange-500/20 mb-6">
          <TrendingUp className="size-4 text-orange-400" />
          <span className="text-sm font-medium text-orange-400">Use Cases</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white max-w-3xl mx-auto">
          What you can actually <span className="text-orange-400">do</span> with Fazri
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Real scenarios security teams face every day
        </p>
      </div>

      {/* Use case grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon
          const isHovered = hoveredIndex === index
          return (
            <div
              key={index}
              className={`relative p-8 rounded-xl bg-gray-900/30 ring-1 ring-gray-800/50 hover:bg-gray-900/50 hover:ring-orange-500/30 group overflow-hidden ${prefersReducedMotion ? '' : 'transition-all duration-500'}`}
              onMouseEnter={() => !prefersReducedMotion && setHoveredIndex(index)}
              onMouseLeave={() => !prefersReducedMotion && setHoveredIndex(null)}
              style={prefersReducedMotion ? { opacity: 1 } : {
                animation: `rise-in 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              {/* Hover sweep effect */}
              {!prefersReducedMotion && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent"
                    style={{
                      transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
                      transition: 'transform 0.7s ease-out'
                    }}
                  />
                </div>
              )}

              {/* Icon */}
              <div className="relative flex items-center gap-4 mb-4">
                <div className={`flex items-center justify-center size-12 rounded-lg bg-orange-500/10 ring-1 ring-orange-500/20 group-hover:bg-orange-500/15 ${prefersReducedMotion ? '' : 'group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500'}`}>
                  <Icon className="size-6 text-orange-400" />
                </div>
                <h3 className={`text-xl font-semibold text-white group-hover:text-orange-50 ${prefersReducedMotion ? '' : 'transition-colors'}`}>
                  {useCase.title}
                </h3>
              </div>

              {/* Description */}
              <p className={`relative text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 ${prefersReducedMotion ? '' : 'transition-colors'}`}>
                {useCase.description}
              </p>

              {/* Example with animated border */}
              <div
                className={`relative pl-4 border-l-2 border-orange-500/30 group-hover:border-orange-500/50 ${prefersReducedMotion ? '' : 'transition-all duration-500'}`}
                style={prefersReducedMotion ? {} : {
                  borderLeftWidth: isHovered ? '3px' : '2px'
                }}
              >
                <p className={`text-sm text-gray-500 italic group-hover:text-gray-400 ${prefersReducedMotion ? '' : 'transition-colors'}`}>
                  {useCase.example}
                </p>
                {/* Animated dot on border */}
                {!prefersReducedMotion && (
                  <div
                    className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      animation: isHovered ? 'slide-down 2s ease-in-out infinite' : 'none'
                    }}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes rise-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slide-down {
          0%, 100% {
            top: 0%;
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
