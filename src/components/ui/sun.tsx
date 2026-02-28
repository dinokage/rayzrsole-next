"use client";

import { motion, useAnimation } from "framer-motion";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils2";

interface SunIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

const SunIcon = forwardRef<SunIconHandle, React.HTMLAttributes<HTMLDivElement> & { size?: number }>(
  ({ className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => ({
      startAnimation: () => {
        isControlledRef.current = true;
        controls.start("animate");
      },
      stopAnimation: () => {
        isControlledRef.current = false;
        controls.start("initial");
      },
    }));

    const rayVariants = {
      initial: { opacity: 1 },
      animate: (i: number) => ({
        opacity: [1, 0.3, 1],
        transition: {
          duration: 0.3,
          delay: i * 0.1,
          repeat: Infinity,
          repeatType: "reverse" as const,
        },
      }),
    };

    return (
      <div
        className={cn(
          "hover:bg-accent transition-colors duration-200 cursor-pointer select-none p-2 rounded-md",
          className
        )}
        onMouseEnter={() => {
          if (!isControlledRef.current) controls.start("animate");
        }}
        onMouseLeave={() => {
          if (!isControlledRef.current) controls.start("initial");
        }}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = 12 + 6 * Math.cos(angle);
            const y1 = 12 + 6 * Math.sin(angle);
            const x2 = 12 + 9 * Math.cos(angle);
            const y2 = 12 + 9 * Math.sin(angle);
            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                variants={rayVariants}
                initial="initial"
                animate={controls}
                custom={i}
              />
            );
          })}
        </svg>
      </div>
    );
  }
);

SunIcon.displayName = "SunIcon";

export { SunIcon };
