import { BannerDown } from "./components/banner-down";
import ContactForm from "./components/contact-form";
import Features from "./components/features";
import FAQSection from "./components/frequent-questions";
import Hero from "./components/hero";
import Testimonials from "./components/testimonials";
import Zigzag from "./components/zigzag";
import Footer from "./ui/footer";
import Header from "./ui/header";


export default function Home() {
  return ( 
    <>
      <Header  /> 
      <Hero />
      <Features />
      <Zigzag />
      <FAQSection />
      <Testimonials />
      <BannerDown />
      <ContactForm />
      <Footer />
    </>
  );
}
