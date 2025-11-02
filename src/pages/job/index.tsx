import { Header } from "@/components/header";
import { JobHero } from "./components/job-hero";
import { IshQidirish } from "./components/ish-qidirish";
import { Footer } from "@/components/footer";

export const JobIndex = () => {
  return (
    <div>
      <div className="bg-black">
        <Header />
        <div></div>
        <JobHero />
      </div>
      <IshQidirish />
      <div></div>
      <Footer />
    </div>
  );
};
