import { BigIdea } from "@/components/landing/big-idea";
import { Cameras } from "@/components/landing/cameras";
import { DemoCta } from "@/components/landing/demo-cta";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Industries } from "@/components/landing/industries";
import { Monitors } from "@/components/landing/monitors";
import { MotionProvider } from "@/components/landing/motion";
import { Nav } from "@/components/landing/nav";
import { Roles } from "@/components/landing/roles";
import { SearchSection } from "@/components/landing/search";
import { Story } from "@/components/landing/story";
import { UseCases } from "@/components/landing/use-cases";
import { Walkthrough } from "@/components/landing/walkthrough";
import { Why } from "@/components/landing/why";

export default function TorchlineLanding() {
  return (
    <MotionProvider>
      <Nav />
      <main>
        <Hero />
        <BigIdea />
        <Walkthrough />
        <Story />
        <Cameras />
        <Industries />
        <Monitors />
        <SearchSection />
        <Why />
        <UseCases />
        <Roles />
        <Faq />
        <DemoCta />
      </main>
      <Footer />
    </MotionProvider>
  );
}
