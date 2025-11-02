import { Header } from "@/components/header";
import { ContactHero } from "./components/contact-hero";
import { ContactKafolat } from "./components/kafolat";
import { ContactMap } from "./components/contact-map";
import { Footer } from "@/components/footer";

export const ContactIndex = () => {
  return (
    <section>
      <div>
        <div className="bg-black">
          <Header />
          <div></div>
          <ContactHero />
        </div>
        <div></div>
        <ContactKafolat />
        <div></div>
        <ContactMap />
        <div></div>
        <Footer />
      </div>
    </section>
  );
};
