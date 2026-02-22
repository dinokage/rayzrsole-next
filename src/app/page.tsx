import { ComingSoonPage } from "@/components/coming-soon/ComingSoonPage";

export default function Home() {
  return (
    <ComingSoonPage
      launchDate={new Date("2026-06-15T11:00:00+05:30")}
      title="RayzrSole: The Future of AI & ML is Coming Soon!"
      subtitle="We're transforming industries with cutting-edge artificial intelligence and machine learning solutions. Get ready for something extraordinary - join us as we unveil the future of AI-powered innovation!"
    />
  );
}
