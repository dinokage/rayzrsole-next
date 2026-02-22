import { ComingSoonPage } from "@/components/coming-soon/ComingSoonPage";

export default function Home() {
  return (
    <ComingSoonPage
      launchDate={new Date("2026-04-07T11:00:00+05:30")}
      title="RayzrSole: The Future of Automation is Coming Soon!"
      subtitle="We're transforming industries with cutting-edge automation solutions. Get ready for something extraordinary - join us as we unveil the future of intelligent automation!"
    />
  );
}
