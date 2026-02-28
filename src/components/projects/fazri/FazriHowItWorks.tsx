"use client"

import { Database, Cpu, Eye, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function FazriHowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])
  const steps = [
    {
      icon: Database,
      title: "Connect your systems",
      description: "We plug into what you already have. Security cameras, access cards, WiFi, visitor logs. No need to replace anything.",
      details: [
        "Works with existing infrastructure",
        "Setup in days, not months",
        "No hardware changes needed",
      ],
    },
    {
      icon: Cpu,
      title: "We connect the dots",
      description: "Our system matches camera footage with card swipes, WiFi connections with library checkouts. It builds a complete picture of what's happening.",
      details: [
        "Automatic correlation across all systems",
        "Privacy-preserving entity matching",
        "Real-time data processing",
      ],
    },
    {
      icon: Eye,
      title: "You get clarity",
      description: "One dashboard shows you everything. Search for anyone, set up alerts, spot patterns. Your entire campus security operation in one place.",
      details: [
        "Intuitive interface for security teams",
        "Custom alerts for your policies",
        "Historical search and reporting",
      ],
    },
  ]

  return (
    <section id="how-it-works" className="relative mx-auto max-w-6xl scroll-mt-24">
      {/* Vertical line through steps */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-px -translate-x-1/2 hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            maskImage:
              "linear-gradient(transparent, white 10%, white 90%, transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-800"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>
        </div>
      </div>

      {/* Section header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 ring-1 ring-orange-500/20 mb-6">
          <Cpu className="size-4 text-orange-400" />
          <span className="text-sm font-medium text-orange-400">How It Works</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white max-w-3xl mx-auto">
          Simple setup. <span className="text-orange-400">Powerful results.</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Three steps to complete campus visibility
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-16">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isEven = index % 2 === 0

          return (
            <div
              key={index}
              className={`relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content side */}
              <div className={`${isEven ? "lg:text-right lg:pr-16" : "lg:pl-16 lg:col-start-2"}`}>
                {/* Step number */}
                <div className={`inline-flex items-center gap-3 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  <span className="text-6xl font-bold text-gray-800">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center justify-center size-14 rounded-xl bg-orange-500/10 ring-1 ring-orange-500/20">
                    <Icon className="size-7 text-orange-400" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Details list */}
                <ul className={`space-y-3 ${isEven ? "lg:items-end lg:flex lg:flex-col" : ""}`}>
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className={`flex items-center gap-2 text-gray-500 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                      <ArrowRight className="size-4 text-orange-400 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual side */}
              <div className={`${isEven ? "lg:pl-16" : "lg:pr-16 lg:col-start-1 lg:row-start-1"}`}>
                <div
                  className="relative aspect-square rounded-xl bg-gray-900/50 ring-1 ring-gray-800 p-8 flex items-center justify-center overflow-hidden transition-all duration-700 cursor-pointer group/visual"
                  onMouseEnter={() => setActiveStep(index)}
                  style={{
                    boxShadow: activeStep === index
                      ? '0 0 40px rgba(249, 115, 22, 0.2), inset 0 0 40px rgba(249, 115, 22, 0.05)'
                      : 'none'
                  }}
                >
                  {/* Animated background pattern */}
                  <svg className="absolute inset-0 h-full w-full opacity-[0.03] transition-opacity duration-700 group-hover/visual:opacity-[0.06]">
                    <defs>
                      <pattern
                        id={`step-pattern-${index}`}
                        patternUnits="userSpaceOnUse"
                        width="32"
                        height="32"
                      >
                        <path
                          d="M32 0v32M0 32h32"
                          className="stroke-orange-500"
                          strokeWidth="0.5"
                          fill="none"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#step-pattern-${index})`} />
                  </svg>

                  {/* Orbiting particles */}
                  {activeStep === index && (
                    <div className="absolute inset-0">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          style={{
                            animation: `orbit ${3 + i}s linear infinite`,
                            animationDelay: `${i * 0.5}s`
                          }}
                        >
                          <div
                            className="w-2 h-2 rounded-full bg-orange-500/60 blur-sm"
                            style={{
                              transform: `translateX(${60 + i * 20}px)`
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Center icon with pulse */}
                  <div
                    className="relative z-10 flex items-center justify-center size-32 rounded-full bg-gray-900 ring-1 ring-white/10 shadow-[inset_0px_-15px_20px_rgba(249,115,22,0.15)] transition-all duration-700 group-hover/visual:scale-110"
                    style={{
                      transform: activeStep === index ? 'scale(1.1)' : 'scale(1)',
                      boxShadow: activeStep === index
                        ? 'inset 0px -15px 30px rgba(249,115,22,0.3), 0 0 30px rgba(249,115,22,0.2)'
                        : 'inset 0px -15px 20px rgba(249,115,22,0.15)'
                    }}
                  >
                    <Icon
                      className="text-orange-400 transition-all duration-700"
                      style={{
                        width: activeStep === index ? '4.5rem' : '4rem',
                        height: activeStep === index ? '4.5rem' : '4rem'
                      }}
                    />
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="rounded-full bg-orange-500/10 blur-3xl transition-all duration-700"
                      style={{
                        width: activeStep === index ? '14rem' : '10rem',
                        height: activeStep === index ? '14rem' : '10rem',
                        opacity: activeStep === index ? 1 : 0.5
                      }}
                    />
                  </div>

                  {/* Scanning line */}
                  {activeStep === index && (
                    <div
                      className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
                      style={{
                        animation: 'scan-vertical 2s ease-in-out infinite'
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes scan-vertical {
          0%, 100% {
            top: 0%;
            opacity: 0;
          }
          50% {
            opacity: 1;
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
