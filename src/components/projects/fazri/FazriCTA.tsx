"use client"

import { ArrowRight, Calendar, MessageSquare, FileText } from "lucide-react"
import { Button } from "@/components/Button"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

export function FazriCTA() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section id="demo" className="relative mx-auto max-w-6xl scroll-mt-24 group/cta">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950" />

        {/* Animated Grid pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03] transition-opacity duration-700 group-hover/cta:opacity-[0.05]">
          <defs>
            <pattern
              id="cta-grid-pattern"
              patternUnits="userSpaceOnUse"
              width="48"
              height="48"
            >
              <path
                d="M48 0v48M0 48h48"
                className="stroke-orange-500"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid-pattern)" />
        </svg>

        {/* Animated scan lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(249,115,22,0.6)_2px,rgba(249,115,22,0.6)_4px)]"
            style={{
              animation: prefersReducedMotion ? 'none' : 'cta-scan 12s linear infinite'
            }}
          />
        </div>

        {/* Enhanced glow effects with animation */}
        <div
          className="absolute -top-24 -right-24 size-96 rounded-full bg-orange-500/10 blur-3xl transition-all duration-1000 group-hover/cta:bg-orange-500/15"
          style={{
            animation: prefersReducedMotion ? 'none' : 'glow-pulse 4s ease-in-out infinite'
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 size-96 rounded-full bg-orange-500/5 blur-3xl transition-all duration-1000 group-hover/cta:bg-orange-500/10"
          style={{
            animation: prefersReducedMotion ? 'none' : 'glow-pulse 4s ease-in-out infinite 2s'
          }}
        />

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover/cta:ring-orange-500/20 transition-all duration-500" />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-orange-500/50 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-orange-500/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-orange-500/50 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-orange-500/50 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes cta-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes glow-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>

      {/* Content */}
      <div className="relative px-8 py-16 sm:px-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main CTA */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4">
              Ready to see Fazri in action?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Schedule a personalized demo for your campus. We&apos;ll show you how Fazri works with your existing systems
              and answer any questions you have.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                variant="primary"
                className="h-12 px-8 text-base font-semibold relative overflow-hidden group/btn"
              >
                <a href="mailto:contact@rayzrsole.com?subject=Fazri Analyzer Demo Request" className="inline-flex items-center gap-2">
                  <span className="relative z-10">Schedule Demo</span>
                  <Calendar className={`size-5 relative z-10 ${prefersReducedMotion ? '' : 'transition-transform duration-300 group-hover/btn:rotate-12'}`} />
                  {!prefersReducedMotion && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  )}
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-12 px-8 text-base font-semibold group/btn2"
              >
                <a href="mailto:contact@rayzrsole.com?subject=Fazri Analyzer Inquiry" className="inline-flex items-center gap-2">
                  Ask Questions
                  <MessageSquare className={`size-5 ${prefersReducedMotion ? '' : 'transition-transform duration-300 group-hover/btn2:scale-110'}`} />
                </a>
              </Button>
            </div>

            {/* Trust indicator */}
            <p className="text-sm text-gray-500">
              <span className="text-orange-400 font-semibold">No commitment required.</span>
              {" "}See if Fazri is right for your campus before making any decisions.
            </p>
          </div>

          {/* Right side - What to expect */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">
              What happens next:
            </h3>

            {[
              {
                step: "1",
                title: "We listen",
                description: "Tell us about your campus, current systems, and security challenges.",
              },
              {
                step: "2",
                title: "We show you",
                description: "Live demo tailored to your specific use cases and requirements.",
              },
              {
                step: "3",
                title: "We plan together",
                description: "Discuss integration timeline, pricing, and deployment strategy.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-orange-500/10 ring-1 ring-orange-500/20">
                    <span className="text-lg font-bold text-orange-400">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gray-400 text-sm">
                Questions? Email us at{" "}
                <a href="mailto:contact@rayzrsole.com" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
                  contact@rayzrsole.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@rayzrsole.com?subject=Fazri Case Study Request"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <FileText className="size-4" />
                Request case studies
              </a>
              <ArrowRight className="size-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
