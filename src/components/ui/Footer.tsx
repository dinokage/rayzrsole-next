import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "@remixicon/react"
import Link from "next/link"
const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => {
  const sections = {
    projects: {
      title: "Projects",
      items: [
        { label: "Fazri Analyser", href: "/projects/fazri-analyzer" },
        { label: "P&iD Automation", href: "#projects" },
        { label: "Zync HRMS", href: "#projects" },
        { label: "NRGTech Landing", href: "#projects" },
      ],
    },
    services: {
      title: "Services",
      items: [
        { label: "Workflow Automation", href: "#services" },
        { label: "Cloud Infrastructure", href: "#services" },
        { label: "App Development", href: "#services" },
        { label: "Server Maintenance", href: "#services" },
      ],
    },
    company: {
      title: "Company",
      items: [
        { label: "About Us", href: "#team" },
        { label: "Leadership", href: "#team" },
        { label: "Careers", href: "mailto:contact@rayzrsole.com" },
        { label: "Contact", href: "mailto:contact@rayzrsole.com" },
      ],
    },
    legal: {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  }

  return (
    <div className="px-4 xl:px-0">
      <footer
        id="footer"
        className="relative mx-auto flex max-w-6xl flex-wrap pt-4"
      >
        {/* Vertical Lines */}
        <div className="pointer-events-none inset-0">
          <div
            className="absolute inset-y-0 -my-20 w-px"
            style={{
              maskImage: "linear-gradient(transparent, white 5rem)",
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
              maskImage: "linear-gradient(transparent, white 5rem)",
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

        <svg className="mb-10 h-20 w-full border-y border-dashed border-gray-800 stroke-gray-800">
          <defs>
            <pattern
              id="diagonal-footer-pattern"
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
                    stroke=""
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
          <rect
            stroke="none"
            width="100%"
            height="100%"
            fill="url(#diagonal-footer-pattern)"
          />
        </svg>

        <div className="mr-auto flex w-full justify-between lg:w-fit lg:flex-col">
          <Link
            href="/"
            className="flex items-center font-bold tracking-tight text-white select-none"
          >
            <span className="text-lg">
              Rayzr<span className="text-orange-400">Sole</span>
            </span>
          </Link>

          <div>
            <div className="mt-4 flex items-center">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-800 hover:text-gray-100"
              >
                <RiTwitterXFill className="size-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-800 hover:text-gray-100"
              >
                <RiLinkedinFill className="size-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-800 hover:text-gray-100"
              >
                <RiGithubFill className="size-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-800 hover:text-gray-100"
              >
                <RiInstagramFill className="size-5" />
              </Link>
            </div>
            <div className="ml-2 mt-2 hidden text-sm text-gray-600 lg:inline">
              &copy; {CURRENT_YEAR} RayzrSole. All rights reserved.
            </div>
          </div>
        </div>

        {/* Footer Sections */}
        {Object.entries(sections).map(([key, section]) => (
          <div key={key} className="mt-10 min-w-44 pl-2 lg:mt-0 lg:pl-0">
            <h3 className="mb-4 font-medium text-gray-200 sm:text-sm">
              {section.title}
            </h3>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item.label} className="text-sm">
                  <Link
                    href={item.href}
                    className="text-gray-500 transition-colors duration-200 hover:text-gray-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-10 w-full border-t border-gray-800 pb-8 pt-6 text-center text-sm text-gray-600 lg:hidden">
          &copy; {CURRENT_YEAR} RayzrSole. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
