import { FazriHero } from "@/components/projects/fazri/FazriHero"
import { FazriProblem } from "@/components/projects/fazri/FazriProblem"
import { FazriUseCases } from "@/components/projects/fazri/FazriUseCases"
import { FazriHowItWorks } from "@/components/projects/fazri/FazriHowItWorks"
import { FazriTrust } from "@/components/projects/fazri/FazriTrust"
import { FazriStats } from "@/components/projects/fazri/FazriStats"
import { FazriCTA } from "@/components/projects/fazri/FazriCTA"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fazri Analyzer - Campus Security & Entity Resolution",
  description: "Stop security incidents before they happen. Fazri Analyzer helps universities and corporate campuses monitor, predict, and prevent security issues with real-time visibility across your entire campus.",
  openGraph: {
    title: "Fazri Analyzer - Campus Security That Actually Prevents Incidents",
    description: "Real-time campus monitoring and predictive security for universities and corporate campuses. FERPA-compliant, easy to deploy, trusted by institutions.",
  },
}

export default function FazriAnalyzerPage() {
  return (
    <main className="relative mx-auto flex flex-col">
      <FazriHero />
      <div className="mt-16 px-4 xl:px-0">
        <FazriProblem />
      </div>
      <div className="mt-24 px-4 xl:px-0">
        <FazriUseCases />
      </div>
      <div className="mt-24 px-4 xl:px-0">
        <FazriHowItWorks />
      </div>
      <div className="mt-24 px-4 xl:px-0">
        <FazriTrust />
      </div>
      <div className="mt-24 px-4 xl:px-0">
        <FazriStats />
      </div>
      <div className="my-32 px-4 xl:px-0">
        <FazriCTA />
      </div>
    </main>
  )
}
