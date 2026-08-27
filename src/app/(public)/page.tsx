import { Hero } from "@/components/home/Hero";
import { ChairmanMessage } from "@/components/home/ChairmanMessage";
import { AboutUsPreview } from "@/components/home/AboutUsPreview";
import { WhatWeDoPreview } from "@/components/home/WhatWeDoPreview";
import { Stats } from "@/components/home/Stats";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { MediaNews } from "@/components/home/MediaNews";
import { Newsletter } from "@/components/home/Newsletter";
import { DonationSection } from "@/components/home/DonationSection";
import { InvestorsMarquee } from "@/components/home/InvestorsMarquee";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      {/* <ChairmanMessage /> */}
      <AboutUsPreview />
      <WhatWeDoPreview />
      <Stats />
      <ProgramsPreview />
      <MediaNews />
      <DonationSection />
      <Newsletter />
      <InvestorsMarquee />
    </div>
  );
}
