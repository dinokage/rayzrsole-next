"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  duration: number;
}

function generateParticles(): Particle[] {
  return [...Array(20)].map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    targetX: Math.random() * window.innerWidth,
    targetY: Math.random() * window.innerHeight,
    duration: Math.random() * 40 + 30,
  }));
}

export function ComingSoonBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const initTimer = setTimeout(() => setParticles(generateParticles()), 0);

    const particleInterval = setInterval(() => {
      setParticles(generateParticles());
    }, 30000);

    return () => {
      clearTimeout(initTimer);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            animation: "grid-move 60s linear infinite",
          }}
        />
      </div>

      {/* Static Animated Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 70%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 70%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 70%)
          `,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{ x: p.x, y: p.y }}
            animate={{ x: p.targetX, y: p.targetY }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Pulsing Dots Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
            animation: "pulse-dots 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-linear-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 25, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 75,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: "60%", right: "10%" }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-linear-to-r from-green-500/15 to-blue-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 54,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: "40%", left: "50%" }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-8">
        <motion.div
          className="absolute w-32 h-32 border border-primary/30"
          style={{ top: "20%", right: "20%" }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-24 h-24 border border-secondary/30 rounded-full"
          style={{ bottom: "30%", left: "15%" }}
          animate={{
            rotate: [360, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 75,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-16 h-16 bg-linear-to-r from-purple-500/20 to-pink-500/20"
          style={{
            top: "70%",
            right: "40%",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
          animate={{
            rotate: [0, 180, 360],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <motion.div
          className="absolute h-px bg-linear-to-r from-transparent via-primary to-transparent"
          style={{ top: "25%", width: "100%" }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-px bg-linear-to-b from-transparent via-secondary to-transparent"
          style={{ left: "75%", height: "100%" }}
          animate={{
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes pulse-dots {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        @keyframes smoothPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </>
  );
}