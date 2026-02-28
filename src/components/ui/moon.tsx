"use client";

import { motion, useAnimation } from "motion/react";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils2";

interface MoonIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

const MoonIcon = forwardRef<MoonIconHandle, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => ({
      startAnimation: () => {
        isControlledRef.current = true;
        controls.start({
          rotate: [0, -10, 10, -5, 5, 0],
          transition: { duration: 1.2, ease: "easeInOut" },
        });
      },
      stopAnimation: () => {
        isControlledRef.current = false;
        controls.stop();
      },
    }));

    return (
      <div
        className={cn(
          "cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200",
          className
        )}
        onMouseEnter={() => {
          if (!isControlledRef.current) {
            controls.start({
              rotate: [0, -10, 10, -5, 5, 0],
              transition: { duration: 1.2, ease: "easeInOut" },
            });
          }
        }}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={controls}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </motion.svg>
      </div>
    );
  }
);

MoonIcon.displayName = "MoonIcon";

export { MoonIcon };
