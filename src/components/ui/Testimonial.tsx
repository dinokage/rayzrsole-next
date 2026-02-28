"use client"

import Image from "next/image"

const team = [
  { name: "Sakib Alam", role: "CEO", initials: "SA", src: "https://res.cloudinary.com/ddvheihbd/image/upload/v1772279986/sakib.png" },
  { name: "Shreyartha Roy", role: "CFO", initials: "SR", src: "https://res.cloudinary.com/ddvheihbd/image/upload/v1772279987/shreyartha.png" },
  { name: "Subhadeep Pramanik", role: "CTO", initials: "SP", src: "https://res.cloudinary.com/ddvheihbd/image/upload/f_auto,q_auto/v1/team/phpxcoder" },
  { name: "Dinesh Yerra", role: "Solutions Architect", initials: "DY", src: "https://res.cloudinary.com/ddvheihbd/image/upload/t_dino_1_1/team/dinokage" },
  { name: "Sreyas Saravindu", role: "Freelance", initials: "SS", src: "https://res.cloudinary.com/ddvheihbd/image/upload/v1772279986/sreyas.jpg" },
]

export default function Testimonial() {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="relative mx-auto w-full max-w-6xl scroll-my-24 overflow-hidden rounded-2xl bg-gray-900 px-8 py-14 ring-1 ring-white/10 sm:px-14 sm:py-20"
    >
      {/* Background grid pattern */}
      <svg className="pointer-events-none absolute inset-0 size-full opacity-20">
        <defs>
          <pattern
            id="team-grid"
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
        <rect width="100%" height="100%" fill="url(#team-grid)" />
      </svg>

      {/* Glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 size-80 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-12 text-center">
          <h2
            id="team-title"
            className="text-base font-semibold tracking-tight text-orange-500"
          >
            Leadership
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-white md:text-4xl">
            The team behind RayzrSole
          </p>
          <p className="mt-3 text-gray-400">
            A multidisciplinary team combining AI expertise, financial acumen,
            and deep engineering experience.
          </p>
        </div>

        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {team.slice(0, 3).map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-xl bg-gray-950/60 p-6 ring-1 ring-white/8 transition-all duration-300 hover:ring-orange-500/30 hover:bg-gray-950/90"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex items-center gap-4">
                <Image
                  src={member.src}
                  alt={member.name}
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-full object-cover ring-2 ring-orange-500/40"
                />
                <div>
                  <div className="font-semibold text-white">{member.name}</div>
                  <div className="text-sm text-orange-400/80">{member.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 2 cards centered */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:mx-auto sm:max-w-xl">
          {team.slice(3).map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-xl bg-gray-950/60 p-6 ring-1 ring-white/8 transition-all duration-300 hover:ring-orange-500/30 hover:bg-gray-950/90"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex items-center gap-4">
                <Image
                  src={member.src}
                  alt={member.name}
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-full object-cover ring-2 ring-orange-500/40"
                />
                <div>
                  <div className="font-semibold text-white">{member.name}</div>
                  <div className="text-sm text-orange-400/80">{member.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
