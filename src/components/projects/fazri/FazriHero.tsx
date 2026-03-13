"use client"

import { ArrowRight, Shield, Eye, AlertTriangle } from "lucide-react"
import { Button } from "@/components/Button"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

export function FazriHero() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center -mt-20 pt-20 pb-safe overflow-hidden">
      {/* Background with layered effects */}
      <div className="absolute inset-0 bg-gray-950">
        {/* Animated scan lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(249,115,22,0.4)_2px,rgba(249,115,22,0.4)_4px)]"
            style={{
              animation: prefersReducedMotion ? 'none' : 'scan 8s linear infinite',
            }}
          />
        </div>

        {/* Grid pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]">
          <defs>
            <pattern
              id="hero-grid"
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
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-transparent to-gray-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 md:w-[600px] md:h-[600px] bg-orange-500/5 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full" />

        {/* Radial pulse effect */}
        {!prefersReducedMotion && (
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-none">
            <div
              className="absolute inset-0 rounded-full border border-orange-500/10"
              style={{
                animation: 'radar-pulse 4s ease-out infinite',
              }}
            />
            <div
              className="absolute inset-0 rounded-full border border-orange-500/10"
              style={{
                animation: 'radar-pulse 4s ease-out infinite 1s',
              }}
            />
            <div
              className="absolute inset-0 rounded-full border border-orange-500/10"
              style={{
                animation: 'radar-pulse 4s ease-out infinite 2s',
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-24">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 ring-1 ring-orange-500/20">
            <Shield className="size-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-400">Campus Security & Monitoring</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] tracking-[-0.02em] max-w-5xl mx-auto px-2">
          <span className="inline-block" style={prefersReducedMotion ? { opacity: 1 } : { animation: 'fade-in-up 0.6s ease-out forwards', opacity: 0 }}>
            Stop security incidents{" "}
          </span>
          <span className="inline-block text-orange-400 relative" style={prefersReducedMotion ? { opacity: 1 } : { animation: 'fade-in-up 0.6s ease-out 0.2s forwards', opacity: 0 }}>
            before they happen
            {!prefersReducedMotion && (
              <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-30" style={{ animation: 'draw-underline 1s ease-out 1s forwards' }}>
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="3" strokeDasharray="1000" strokeDashoffset="1000" />
              </svg>
            )}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-center text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light" style={prefersReducedMotion ? { opacity: 1 } : { animation: 'fade-in-up 0.6s ease-out 0.4s forwards', opacity: 0 }}>
          See everything happening on your campus in real-time. Get alerts when something looks unusual.
          Keep students, staff, and visitors safe without compromising privacy.
        </p>

        {/* Key benefits */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300" style={prefersReducedMotion ? { opacity: 1 } : { animation: 'fade-in-up 0.6s ease-out 0.6s forwards', opacity: 0 }}>
          {[
            { icon: Eye, label: 'Real-time visibility' },
            { icon: AlertTriangle, label: 'Predictive alerts' },
            { icon: Shield, label: 'Privacy-first design' }
          ].map(({ icon: Icon, label }, index) => (
            <div
              key={label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 ring-1 ring-gray-800 hover:ring-orange-500/30 hover:bg-gray-900/70 group ${prefersReducedMotion ? '' : 'transition-all duration-300'}`}
              style={prefersReducedMotion ? { opacity: 1 } : {
                animation: `fade-in-up 0.4s ease-out ${0.8 + index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <Icon className={`size-4 text-orange-400 ${prefersReducedMotion ? '' : 'group-hover:scale-110 transition-transform duration-300'}`} />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            variant="primary"
            className="h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold touch-manipulation"
          >
            <a href="#demo" className="inline-flex items-center gap-2">
              <span className="whitespace-nowrap">Schedule a Demo</span>
              <ArrowRight className="size-4 sm:size-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold touch-manipulation"
          >
            <a href="#how-it-works"><span className="whitespace-nowrap">See How It Works</span></a>
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by security teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8 text-gray-600 px-4">
            <span className="text-base sm:text-lg font-semibold whitespace-nowrap">Universities</span>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <span className="text-base sm:text-lg font-semibold whitespace-nowrap">Corporate Campuses</span>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <span className="text-base sm:text-lg font-semibold whitespace-nowrap">Research Facilities</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes radar-pulse {
          0% {
            transform: scale(0.3);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes draw-underline {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  )
}
