import {
  RiCloudFill,
  RiCodeSSlashFill,
  RiFlashlightFill,
  RiServerFill,
} from "@remixicon/react"
import { Divider } from "../Divider"
import AnalyticsIllustration from "./AnalyticsIllustration"
import { StickerCard } from "./StickerCard"

export function SolarAnalytics() {
  return (
    <section
      aria-labelledby="services-heading"
      id="services"
      className="relative mx-auto w-full max-w-6xl overflow-hidden scroll-my-24"
    >
      <div>
        <h2
          id="services-heading"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-orange-500"
        >
          Our Services
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-white md:text-4xl">
          Everything you need to ship and scale
        </p>
        <p className="mt-3 max-w-xl text-gray-400">
          We handle the infrastructure so your team can focus on what matters -
          building great products.
        </p>
      </div>
      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>
      <Divider className="mt-0"></Divider>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiFlashlightFill}
          title="Workflow Automation"
          description="End-to-end automation using RPA, API integrations, and custom scripting to eliminate repetitive manual tasks."
        />
        <StickerCard
          Icon={RiCloudFill}
          title="Cloud Infrastructure"
          description="Scalable AWS, Azure, and GCP deployments with automated scaling, CI/CD, and high-availability configurations."
        />
        <StickerCard
          Icon={RiCodeSSlashFill}
          title="Application Development"
          description="Full-stack web and mobile applications built for performance, security, and long-term maintainability."
        />
        <StickerCard
          Icon={RiServerFill}
          title="Server Maintenance"
          description="24/7 server monitoring, patch management, backup automation, and incident response for your production systems."
        />
      </div>
    </section>
  )
}
