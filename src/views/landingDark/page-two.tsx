import { HeaderTwo } from "../landingDark/components/Header";
import { Heros } from "../landingDark/components/Hero";
import { LogoTicker } from "../landingDark/components/LogoTicker";
import { TestimonialsD } from "../landingDark/components/Testimonials";
import { CallToAction } from "../landingDark/components/CallToAction";
import { ContactMe } from "../landingDark/components/contactForm";
import { Footer } from "../landingDark/components/Footer";
import { Box } from "@chakra-ui/react";
import { twMerge } from "tailwind-merge";


export default function HomeTwo() {
    return (
        <>
            <Box className={twMerge("bg-black text-white antialiased")} style={{ fontFamily: 'Inter, sans-serif' }}>
                <HeaderTwo  />
                <Heros />
                <LogoTicker />
                <TestimonialsD />
                <CallToAction />
                <ContactMe />
                <Footer />
            </Box>
        </>
    );
}
