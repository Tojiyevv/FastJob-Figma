import { Header } from "@/components/header";
import { AboutHero } from "./components/about-hero";
import { WebWork } from "./components/WebWork";
import { AboutQuastions } from "./components/quastions";
import { AboutNews } from "./components/news";
import { Footer } from "@/components/footer";

export const AboutIndex = () => {
  return (
    <>
      <div>
        <div className="bg-black">
          <Header />
          <div></div>
          <AboutHero />
        </div>
        <div></div>
        <WebWork />
        <div></div>
        <AboutQuastions />
        <div></div>
        <AboutNews />
        <div></div>
        <Footer />
      </div>
    </>
  );
};
