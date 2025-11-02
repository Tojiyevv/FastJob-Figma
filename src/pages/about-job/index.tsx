import { Header } from "@/components/header";
import { AboutJobHero } from "./components/about-job-hero";
import { AboutJobSolution } from "./components/solution";
import { Footer } from "@/components/footer";

export const AboutJobIndex = () => {
  return (
    <>
      <div>
        <div className="bg-black">
          <Header />
          <div></div>
          <AboutJobHero />
        </div>
        <AboutJobSolution />
        <div></div>
        <Footer />
      </div>
    </>
  );
};
