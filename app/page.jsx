import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import RatesAndInsurance from "@/components/RatesandInsurance";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Faq />
      <RatesAndInsurance />
      <Footer />
    </>
  );
}
