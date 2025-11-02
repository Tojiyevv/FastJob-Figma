import { Header } from "@/components/header";
import { HomeHero } from "@/pages/home/components/homehero";
import { Ishlar } from "./components/ishlar";
import { Hoyot } from "./components/hoyot";
import { Footer } from "@/components/footer";

export const HomeIndex = () => {
  return (
    <>
      <div>
        <div className="hero-section h-[700px]">
          <div className="bg-black/50">
            <Header />
          </div>
          <div></div>
          <div className="bg-black/50">
            <HomeHero />
          </div>
        </div>
        <div></div>
        <Ishlar />
        <div></div>
        <Hoyot />
        <div></div>
        <Footer />
      </div>
    </>
  );
};
