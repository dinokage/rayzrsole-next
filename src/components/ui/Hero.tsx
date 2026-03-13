"use client"

import { ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"
import { Marquee } from "./Marquee"

const teamAvatars = [
  { initials: "SA", name: "Sakib Alam", src: "https://res.cloudinary.com/ddvheihbd/image/upload/v1772279986/sakib.png" },
  { initials: "SR", name: "Shreyartha Roy", src: "https://res.cloudinary.com/ddvheihbd/image/upload/v1772279987/shreyartha.png" },
  { initials: "SP", name: "Subhadeep Pramanik", src: "https://res.cloudinary.com/ddvheihbd/image/upload/f_auto,q_auto/v1/team/phpxcoder" },
  { initials: "DY", name: "Dinesh Yerra", src: "https://res.cloudinary.com/ddvheihbd/image/upload/t_dino_1_1/team/dinokage" },
  { initials: "SS", name: "Sreyas Saravindu", src: "https://res.cloudinary.com/ddvheihbd/image/upload/v1772279986/sreyas.jpg" },
]

const stats = [
  { emoji: "🚀", label: "PROJECTS DELIVERED", value: "4+" },
  { emoji: "🌍", label: "COUNTRIES WITH CLIENTS", value: "20+" },
  { emoji: "⚡", label: "UPTIME GUARANTEED", value: "99.9%" },
  { emoji: "🤖", label: "AI SOLUTIONS SHIPPED", value: "3+" },
]

function AvatarStack() {
  return (
    <div className="flex -space-x-3">
      {teamAvatars.map((member, i) => (
        <Avatar
          className="size-12 border-2 border-orange-400 bg-gray-800"
          key={member.initials}
          style={{ zIndex: teamAvatars.length - i }}
        >
          <AvatarImage alt={member.name} src={member.src} />
          <AvatarFallback className="bg-gray-700 text-white text-xs font-semibold">
            {member.initials}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}

function StatsMarquee() {
  return (
    <Marquee
      className="border-white/10 border-y bg-black/30 py-2 sm:py-2.5 backdrop-blur-sm [--duration:20s] sm:[--duration:30s] [--gap:0.75rem] sm:[--gap:1.5rem]"
      pauseOnHover
      reverse
      repeat={3}
    >
      {stats.map((stat) => (
        <div
          className="flex items-center gap-1.5 sm:gap-3 whitespace-nowrap"
          key={stat.label}
        >
          <span className="font-bold font-mono text-orange-400 text-[10px] sm:text-sm tracking-wide">
            {stat.value}
          </span>
          <span className="font-medium font-mono text-[10px] sm:text-sm text-white/70 uppercase tracking-tight sm:tracking-[0.15em]">
            {stat.label}
          </span>
          <span className="text-xs sm:text-base">{stat.emoji}</span>
        </div>
      ))}
    </Marquee>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100vh] sm:min-h-[115vh] w-full flex-col items-start justify-end -mt-20 pb-safe">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/ddvheihbd/image/upload/v1772270088/office.jpg)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Bottom gradient to blend into page */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-linear-to-t from-gray-950 to-transparent" />
      </div>

      {/* Stats marquee strip */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-8 lg:px-16">
        <div className="space-y-4">
          <AvatarStack />
        </div>
      </div>
      <div className="relative z-10 w-full overflow-hidden">
        <StatsMarquee />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full px-4 pb-16 sm:px-8 sm:pb-24 lg:px-16 lg:pb-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
          <div className="w-full space-y-5 sm:w-1/2">
            <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] tracking-tight">
              Infrastructure{" "}
              <span className="text-orange-400">that works</span>
              <br />
              <span className="text-white">while you sleep.</span>
            </h1>
            <p className="text-sm font-semibold tracking-widest text-orange-400/80 uppercase">
              No DevOps team required.
            </p>
            <a
              href="mailto:contact@rayzrsole.com"
              className="inline-flex items-center gap-0 rounded-none bg-orange-400 py-3 pl-4 sm:pl-5 pr-1 font-normal text-base sm:text-lg transition-all hover:bg-orange-300 min-h-[44px] touch-manipulation"
            >
              <span className="whitespace-nowrap">Get in touch</span>
              <span className="border-black/20 border-l p-2.5 sm:p-3 ml-1.5 sm:ml-2">
                <ArrowRight className="size-4 sm:size-5" />
              </span>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-base text-orange-300/80 italic sm:text-right md:text-xl leading-relaxed">
              Automate operations, deploy faster, and host confidently. We build
              applications, handle servers, pipelines, and maintenance so your
              team can focus on building and shipping.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
