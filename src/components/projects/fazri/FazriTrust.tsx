"use client"

import { Shield, Lock, FileCheck, Users } from "lucide-react"
import { useState } from "react"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

export function FazriTrust() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const trustFactors = [
    {
      icon: Shield,
      title: "FERPA Compliant",
      description: "Built for educational institutions from day one. We understand student privacy isn't optional.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Data stays on your servers. Role-based access controls. Audit logs for everything. Your security team decides who sees what.",
    },
    {
      icon: FileCheck,
      title: "Easy Compliance Reports",
      description: "Board asking questions? Generate compliance reports in minutes. Show exactly how you're protecting student and staff data.",
    },
    {
      icon: Users,
      title: "Built by Security Professionals",
      description: "Our team has worked with campus security teams at universities. We know what you need because we've been in your shoes.",
    },
  ]

  return (
    <section className="relative mx-auto max-w-6xl">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 ring-1 ring-green-500/20 mb-6">
          <Shield className="size-4 text-green-400" />
          <span className="text-sm font-medium text-green-400">Security & Compliance</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white max-w-3xl mx-auto">
          Security monitoring that respects <span className="text-orange-400">privacy</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          You need to keep people safe. But you also need to protect their privacy. We get it.
        </p>
      </div>

      {/* Trust factors grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {trustFactors.map((factor, index) => {
          const Icon = factor.icon
          const isActive = activeCard === index
          return (
            <div
              key={index}
              className={`relative p-8 rounded-xl bg-gray-900/40 ring-1 ring-gray-800/60 hover:ring-green-500/30 group/trust overflow-hidden ${prefersReducedMotion ? '' : 'transition-all duration-500'}`}
              onMouseEnter={() => !prefersReducedMotion && setActiveCard(index)}
              onMouseLeave={() => !prefersReducedMotion && setActiveCard(null)}
              style={prefersReducedMotion ? { opacity: 1 } : {
                animation: `float-in 0.7s ease-out ${index * 0.15}s forwards`,
                opacity: 0
              }}
            >
              {/* Secure shimmer effect */}
              {!prefersReducedMotion && (
                <div className="absolute inset-0 opacity-0 group-hover/trust:opacity-100 transition-opacity duration-700">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent -translate-x-full"
                    style={{
                      transform: isActive ? 'translateX(100%)' : 'translateX(-100%)',
                      transition: 'transform 1s ease-out'
                    }}
                  />
                </div>
              )}

              {/* Shield grid pattern overlay */}
              {!prefersReducedMotion && (
                <svg className="absolute inset-0 h-full w-full opacity-0 group-hover/trust:opacity-[0.02] transition-opacity duration-500">
                  <defs>
                    <pattern
                      id={`trust-pattern-${index}`}
                      patternUnits="userSpaceOnUse"
                      width="20"
                      height="20"
                    >
                      <circle cx="10" cy="10" r="1" className="fill-green-500" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#trust-pattern-${index})`} />
                </svg>
              )}

              {/* Icon with protective glow */}
              <div
                className={`relative inline-flex items-center justify-center size-14 rounded-xl bg-orange-500/10 ring-1 ring-orange-500/20 mb-5 group-hover/trust:bg-green-500/10 group-hover/trust:ring-green-500/30 ${prefersReducedMotion ? '' : 'group-hover/trust:scale-110 transition-all duration-500'}`}
                style={prefersReducedMotion ? {} : {
                  boxShadow: isActive ? '0 0 30px rgba(34, 197, 94, 0.2)' : 'none'
                }}
              >
                <Icon className={`size-7 text-orange-400 group-hover/trust:text-green-400 ${prefersReducedMotion ? '' : 'transition-colors duration-500'}`} />

                {/* Rotating shield effect */}
                {isActive && !prefersReducedMotion && (
                  <div className="absolute inset-0 rounded-xl border border-green-500/30" style={{ animation: 'rotate-shield 3s linear infinite' }} />
                )}
              </div>

              <h3 className={`relative text-xl font-semibold text-white mb-3 group-hover/trust:text-green-50 ${prefersReducedMotion ? '' : 'transition-colors'}`}>
                {factor.title}
              </h3>
              <p className={`relative text-gray-400 leading-relaxed group-hover/trust:text-gray-300 ${prefersReducedMotion ? '' : 'transition-colors'}`}>
                {factor.description}
              </p>

              {/* Security checkmark indicator */}
              {!prefersReducedMotion && (
                <div className="absolute top-4 right-4 opacity-0 group-hover/trust:opacity-100 transition-opacity duration-500">
                  <div className="size-6 rounded-full bg-green-500/20 ring-1 ring-green-500/30 flex items-center justify-center">
                    <svg className="size-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes rotate-shield {
          from {
            transform: rotate(0deg) scale(1.2);
            opacity: 0.5;
          }
          to {
            transform: rotate(360deg) scale(1.2);
            opacity: 0.5;
          }
        }
      `}</style>

      {/* Bottom emphasis */}
      <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-orange-500/5 to-transparent ring-1 ring-orange-500/10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="size-16 rounded-full bg-orange-500/10 ring-1 ring-orange-500/20 flex items-center justify-center">
              <FileCheck className="size-8 text-orange-400" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Sleep better knowing you&apos;re compliant
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We handle the technical complexity of privacy compliance so you can focus on keeping your campus safe.
              Regular updates ensure you stay compliant as regulations evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
