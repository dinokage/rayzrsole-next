"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Link from "next/link"
import React from "react"
import { Button } from "../Button"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(15)

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-gray-800/60 bg-gray-950/85 shadow-2xl shadow-black/30 backdrop-blur-md"
          : "bg-gray-950/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="text-lg font-bold tracking-tight text-white">
              Rayzr<span className="text-orange-400">Sole</span>
            </span>
          </Link>
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link
                className="px-2 py-1 text-gray-300 transition-colors hover:text-white"
                href="#projects"
              >
                Projects
              </Link>
              <Link
                className="px-2 py-1 text-gray-300 transition-colors hover:text-white"
                href="#services"
              >
                Services
              </Link>
              <Link
                className="px-2 py-1 text-gray-300 transition-colors hover:text-white"
                href="#team"
              >
                Team
              </Link>
            </div>
          </nav>
          <Button
            asChild
            variant="secondary"
            className="hidden h-10 font-semibold sm:block"
          >
            <a href="mailto:contact@rayzrsole.com">Get in touch</a>
          </Button>
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="p-1.5 sm:hidden"
            aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <RiMenuFill
                className="size-6 shrink-0 text-gray-100"
                aria-hidden
              />
            ) : (
              <RiCloseFill
                className="size-6 shrink-0 text-gray-100"
                aria-hidden
              />
            )}
          </Button>
        </div>
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium text-gray-200">
            <li onClick={() => setOpen(false)}>
              <Link href="#projects">Projects</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#services">Services</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#team">Team</Link>
            </li>
          </ul>
          <Button asChild variant="secondary" className="text-lg">
            <a href="mailto:contact@rayzrsole.com">Get in touch</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
