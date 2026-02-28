import {
  RiCheckLine,
  RiCircleLine,
  RiCloudFill,
  RiCodepenLine,
  RiContrast2Line,
  RiCpuFill,
  RiFullscreenFill,
  RiLoaderFill,
  RiNotification2Line,
  RiServerFill,
} from "@remixicon/react"
import { Icons } from "../Icons"
import { Orbit } from "../Orbit"
import ChipViz from "./ChipViz"

export default function Features() {
  return (
    <section
      aria-label="RayzrSole Projects"
      id="projects"
      className="relative mx-auto max-w-6xl scroll-my-24"
    >
      {/* Vertical Lines */}
      <div className="pointer-events-none inset-0 select-none">
        <div
          className="absolute inset-y-0 -my-20 w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-800"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        <div
          className="absolute inset-y-0 right-0 -my-20 w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-800"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        <div
          className="absolute inset-y-0 left-1/2 -z-10 -my-20 w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-800"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        <div
          className="absolute inset-y-0 left-1/4 -z-10 -my-20 hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-800"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        <div
          className="absolute inset-y-0 left-3/4 -z-10 -my-20 hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-800"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
        {/* Block 1 - AI & ML Products */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
            AI &amp; ML Products
            <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-white md:text-4xl">
            Intelligent systems that solve real-world challenges
          </p>
          <p className="mt-4 text-balance text-gray-400">
            From real-time campus security monitoring with predictive insights
            to AI-powered HR management with machine learning decision engines -
            our products deliver measurable impact at scale.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-orange-500" />
              Fazri Analyser - Campus security &amp; entity prediction
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-orange-500" />
              Zync - AI-powered HRMS with workforce analytics
            </li>
          </ul>
        </div>

        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg className="absolute size-full mask-[linear-gradient(transparent,white_10rem)]">
            <defs>
              <pattern
                id="diagonal-feature-pattern-1"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-gray-800/60"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern-1)"
            />
          </svg>
          <div className="pointer-events-none h-104 p-10 select-none">
            <div className="relative flex flex-col items-center justify-center">
              <Orbit
                durationSeconds={40}
                radiusPx={140}
                keepUpright
                orbitingObjects={[
                  <div
                    key="obj1"
                    className="relative flex items-center justify-center"
                  >
                    <RiServerFill className="z-10 size-5 text-orange-400" />
                    <div className="absolute size-10 rounded-full bg-gray-900/80 ring-1 shadow-lg ring-white/10"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-red-500/80 p-1 text-xs ring-1 ring-white/10">
                          <RiCircleLine className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-gray-900/80 py-0.5 pr-1.5 pl-1 text-xs whitespace-nowrap ring-1 ring-white/10 text-gray-300">
                          Alert
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ animationDelay: "1s" }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                    ></div>
                  </div>,

                  <div
                    key="obj2"
                    className="relative flex items-center justify-center"
                  >
                    <RiCloudFill className="z-10 size-5 text-orange-400" />
                    <div className="absolute size-10 rounded-full bg-gray-900/80 ring-1 shadow-lg ring-white/10"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-gray-600/80 p-1 text-xs ring-1 ring-white/10">
                          <RiLoaderFill className="size-3 shrink-0 animate-spin text-white" />
                        </div>
                        <div className="rounded-r-full bg-gray-900/80 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-white/10 text-gray-300">
                          Syncing
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ animationDelay: "4s" }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                    ></div>
                  </div>,

                  <div
                    key="obj3"
                    className="relative flex items-center justify-center"
                  >
                    <RiCpuFill className="z-10 size-5 text-orange-400" />
                    <div className="absolute size-10 rounded-full bg-gray-900/80 ring-1 shadow-lg ring-white/10"></div>
                    <div
                      style={{ animationDelay: "2s" }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                    ></div>
                  </div>,

                  <div
                    key="obj4"
                    className="relative flex items-center justify-center"
                  >
                    <Icons.QuadCopter className="z-10 size-5 text-orange-400" />
                    <div className="absolute size-10 rounded-full bg-gray-900/80 ring-1 shadow-lg ring-white/10"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-emerald-500/80 p-1 text-xs ring-1 ring-white/10">
                          <RiCheckLine className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-gray-900/80 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-white/10 text-gray-300">
                          Online
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ animationDelay: "6s" }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                    ></div>
                  </div>,

                  <div
                    key="obj5"
                    className="relative flex items-center justify-center"
                  >
                    <RiCodepenLine className="z-10 size-5 text-orange-400" />
                    <div className="absolute size-10 rounded-full bg-gray-900/80 ring-1 shadow-lg ring-white/10"></div>
                    <div
                      style={{ animationDelay: "3s" }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
                    ></div>
                  </div>,
                ]}
              >
                <div className="relative flex h-48 w-48 items-center justify-center">
                  <div className="rounded-full p-1 ring-1 ring-white/10">
                    <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-gray-900 ring-1 shadow-[inset_0px_-15px_20px_rgba(249,115,22,0.15),0_7px_10px_0_rgba(0,0,0,0.5)] ring-white/10">
                      <span className="text-lg font-bold text-orange-400">
                        RS
                      </span>
                    </div>
                    <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-linear-to-t from-transparent via-orange-500 to-transparent blur-lg" />
                  </div>
                </div>
              </Orbit>
            </div>
          </div>
        </div>

        {/* Block 2 - Industrial Automation */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
            Industrial Automation
            <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-white md:text-4xl">
            Digitizing complex engineering workflows with precision
          </p>
          <p className="mt-4 text-balance text-gray-400">
            Computer vision (YOLOv8) and OCR technology transforms P&amp;ID
            diagrams and industrial documents into actionable digital data for
            Oil &amp; Gas clients - eliminating manual counting and reducing
            errors.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-orange-500" />
              P&amp;iD Parts Count Automation - YOLOv8 valve detection
            </li>
          </ul>
        </div>

        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg className="absolute size-full">
            <defs>
              <pattern
                id="diagonal-feature-pattern-2"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-gray-800/60"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern-2)"
            />
          </svg>
          <div className="relative h-[432px] w-[432px]">
            <svg
              id="grid"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="mask absolute size-[432px]"
            >
              <path
                className="stroke-gray-800"
                d="M48 0v432M96 0v432M144 0v432M192 0v432M240 0v432M288 0v432M336 0v432M384 0v432M0 48h432M0 96h432M0 144h432M0 192h432M0 240h432M0 288h432M0 336h432M0 384h432"
              />
            </svg>
            <div className="pointer-events-none relative h-full select-none">
              {/* Center RS logo */}
              <div className="absolute top-[192px] left-[191.8px]">
                <div className="flex h-12 w-12 items-center justify-center bg-gray-900 ring-1 shadow-sm ring-white/10">
                  <span className="text-xs font-bold text-orange-400">RS</span>
                </div>
              </div>
              {[
                { top: "top-[144px]", left: "left-[48px]", label: "99.9%" },
                { top: "top-[48px]", left: "left-[144px]", label: "API ↑" },
                { top: "top-[96px]", left: "left-[240px]", label: "< 4ms" },
                { top: "top-[240px]", left: "left-[385px]", label: "Active" },
                { top: "top-[337px]", left: "left-[336px]", label: "CI/CD" },
                { top: "top-[288px]", left: "left-[144px]", label: "Secure" },
              ].map(({ top, left, label }) => (
                <div key={label} className={`absolute ${top} ${left}`}>
                  <div className="relative">
                    <div className="absolute inset-0 size-12 animate-pulse bg-orange-500/10 blur-[3px]"></div>
                    <div className="relative flex h-12 w-12 items-center justify-center bg-gray-900 ring-1 shadow-sm ring-white/10">
                      <span className="text-xs font-medium text-orange-400">
                        {label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Block 3 - Web & Digital */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
            Web &amp; Digital
            <div className="absolute top-1 -left-[7px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-white md:text-4xl">
            Modern digital platforms for industry leaders
          </p>
          <p className="mt-4 text-balance text-gray-400">
            Engineering safety consultancies, enterprise HR systems, and
            corporate platforms - built with performance and scale in mind,
            deployed to audiences across 20+ countries.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-orange-500" />
              NRGTech - engineering safety consultancy landing page
            </li>
          </ul>
        </div>

        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg className="absolute size-full mask-[linear-gradient(white_10rem,transparent)]">
            <defs>
              <pattern
                id="diagonal-feature-pattern-3"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-gray-800/60"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern-3)"
            />
          </svg>
          <div className="pointer-events-none relative flex size-full h-104 items-center justify-center p-10 select-none">
            <div className="relative">
              {[
                { pos: "absolute top-24 left-24 z-20", Icon: RiNotification2Line },
                { pos: "absolute top-24 right-24 z-20", Icon: RiContrast2Line },
                { pos: "absolute right-24 bottom-24 z-20", Icon: RiCodepenLine },
                { pos: "absolute bottom-24 left-24 z-20", Icon: RiFullscreenFill },
              ].map(({ pos, Icon }, i) => (
                <div key={i} className={pos}>
                  <div className="relative mx-auto w-fit rounded-full bg-gray-900 p-1 ring-1 shadow-md shadow-black/30 ring-white/10">
                    <div className="w-fit rounded-full bg-linear-to-b from-gray-800 to-gray-900 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.3),0_3px_5px_0_rgba(0,0,0,0.4)] ring-white/10 ring-inset">
                      <Icon className="size-5 text-orange-400" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              {[0, 45, 135, 180, 225, 315, 360].map((rotation, index) => (
                <div
                  key={rotation}
                  className="absolute origin-left overflow-hidden"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="relative">
                    <div className="h-0.5 w-60 bg-linear-to-r from-gray-700 to-transparent" />
                    <div
                      className="absolute top-0 left-0 h-0.5 w-28 bg-linear-to-r from-transparent via-orange-500 to-transparent"
                      style={{
                        animation: `gridMovingLine 5s linear infinite ${index * 1.2}s`,
                        animationFillMode: "backwards",
                      }}
                    />
                  </div>
                </div>
              ))}
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <ChipViz />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
