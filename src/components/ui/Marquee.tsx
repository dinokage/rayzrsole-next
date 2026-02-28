import { cx } from "@/lib/utils"
import React from "react"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
  [key: string]: unknown
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const safeRepeat = Math.max(0, Math.floor(Number.isFinite(repeat) ? repeat : 0))

  return (
    <div
      {...props}
      className={cx(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        !vertical ? "flex-row" : "flex-col",
        className,
      )}
    >
      {Array(safeRepeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cx(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              !vertical
                ? "animate-marquee flex-row"
                : "animate-marquee-vertical flex-col",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              reverse && "[animation-direction:reverse]",
            )}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
