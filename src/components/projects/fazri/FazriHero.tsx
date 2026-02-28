"use client"

import { ArrowRight, Shield, Eye, AlertTriangle } from "lucide-react"
import { Button } from "@/components/Button"

export function FazriHero() {
  return (
    <section className="relative flex min-h-[100vh] w-full flex-col items-center justify-center -mt-20 pt-20 overflow-hidden">
      {/* Background with layered effects */}
      <div className="absolute inset-0 bg-gray-950">
        {/* Animated scan lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(249,115,22,0.4)_2px,rgba(249,115,22,0.4)_4px)]"
            style={{
              animation: 'scan 8s linear infinite',
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full" />

        {/* Radial pulse effect */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
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
        <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-[-0.02em] max-w-5xl mx-auto">
          <span className="inline-block" style={{ animation: 'fade-in-up 0.6s ease-out forwards', opacity: 0 }}>
            Stop security incidents{" "}
          </span>
          <span className="inline-block text-orange-400 relative" style={{ animation: 'fade-in-up 0.6s ease-out 0.2s forwards', opacity: 0 }}>
            before they happen
            <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-30" style={{ animation: 'draw-underline 1s ease-out 1s forwards' }}>
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="3" strokeDasharray="1000" strokeDashoffset="1000" />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-center text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light" style={{ animation: 'fade-in-up 0.6s ease-out 0.4s forwards', opacity: 0 }}>
          See everything happening on your campus in real-time. Get alerts when something looks unusual.
          Keep students, staff, and visitors safe without compromising privacy.
        </p>

        {/* Key benefits */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300" style={{ animation: 'fade-in-up 0.6s ease-out 0.6s forwards', opacity: 0 }}>
          {[
            { icon: Eye, label: 'Real-time visibility' },
            { icon: AlertTriangle, label: 'Predictive alerts' },
            { icon: Shield, label: 'Privacy-first design' }
          ].map(({ icon: Icon, label }, index) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 ring-1 ring-gray-800 hover:ring-orange-500/30 transition-all duration-300 hover:bg-gray-900/70 group"
              style={{
                animation: `fade-in-up 0.4s ease-out ${0.8 + index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <Icon className="size-4 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            variant="primary"
            className="h-12 px-8 text-base font-semibold"
          >
            <a href="#demo" className="inline-flex items-center gap-2">
              Schedule a Demo
              <ArrowRight className="size-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="h-12 px-8 text-base font-semibold"
          >
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by security teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600">
            <span className="text-lg font-semibold">Universities</span>
            <span className="text-gray-700">•</span>
            <span className="text-lg font-semibold">Corporate Campuses</span>
            <span className="text-gray-700">•</span>
            <span className="text-lg font-semibold">Research Facilities</span>
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
