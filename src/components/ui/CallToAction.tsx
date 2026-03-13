import { RiArrowRightLine, RiMailLine, RiPhoneLine } from "@remixicon/react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gray-900 px-8 py-16 ring-1 ring-white/10 sm:px-14 sm:py-20"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 -right-20 size-80 rounded-full bg-orange-500/5 blur-3xl" />

      {/* Grid pattern */}
      <svg className="pointer-events-none absolute inset-0 size-full opacity-10">
        <defs>
          <pattern
            id="cta-grid"
            patternUnits="userSpaceOnUse"
            width="48"
            height="48"
          >
            <path
              d="M48 0v48M0 48h48"
              className="stroke-gray-700"
              strokeWidth="0.5"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>

      <div className="relative z-10 grid items-center gap-10 sm:grid-cols-2">
        <div>
          <h2
            id="cta-title"
            className="text-3xl font-semibold tracking-tighter text-white md:text-4xl"
          >
            Ready to work with us?
          </h2>
          <p className="mt-3 text-lg text-gray-400">
            Whether you need to automate workflows, move to the cloud, or build
            something new - we&apos;re ready to make it happen.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:contact@rayzrsole.com"
              className="inline-flex cursor-pointer items-center gap-2 rounded-md border-b-[1.5px] border-orange-700 bg-linear-to-b from-orange-400 to-orange-500 px-5 py-3 text-sm font-medium tracking-wide text-white shadow-[0_0_14px_0_rgba(249,115,22,0.4)] transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-orange-500/30 min-h-[44px] touch-manipulation"
            >
              <span className="whitespace-nowrap">Get in touch</span>
              <RiArrowRightLine className="size-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-gray-700 bg-gray-800/50 px-5 py-3 text-sm font-medium text-gray-200 transition-all duration-200 hover:border-gray-600 hover:bg-gray-800 min-h-[44px] touch-manipulation"
            >
              <span className="whitespace-nowrap">View our work</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl bg-gray-950/60 p-5 ring-1 ring-white/8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-500/15">
                <RiMailLine className="size-5 text-orange-400" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Email us
                </p>
                <Link
                  href="mailto:contact@rayzrsole.com"
                  className="mt-0.5 font-medium text-gray-200 transition-colors hover:text-orange-400"
                >
                  contact@rayzrsole.com
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gray-950/60 p-5 ring-1 ring-white/8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-500/15">
                <RiPhoneLine className="size-5 text-orange-400" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Call us
                </p>
                <Link
                  href="tel:+918274828890"
                  className="mt-0.5 font-medium text-gray-200 transition-colors hover:text-orange-400"
                >
                  +91 82748 28890
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gray-950/60 p-5 ring-1 ring-white/8">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Location
            </p>
            <p className="mt-0.5 font-medium text-gray-200">
              Kolkata, West Bengal, India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
