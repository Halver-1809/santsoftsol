import React from "react";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";

import LogoK2 from "../assets/LogoK2.png";
import LogoSonos from "../assets/LogoSonos.png";

const logos = [
  { src: LogoK2 },
  { src: LogoSonos },
];

export const LogoTicker = () => {
  return (
    <section id="LogoTicker"className="py-16 md:py-20"> {/* Ajuste de padding */}
      <div className="container px-4 sm:px-8 md:px-16 lg:px-40"> {/* Padding responsivo */}
        <div className="flex items-center gap-5 justify-between md:justify-end"> {/* Mantén un diseño limpio */}
          <div className="flex-1 md:flex-none text-center md:text-right">
            <h2 className="text-sm sm:text-base md:text-lg font-medium">
              Trusted by top innovative teams
            </h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                duration:10, // Velocidad ajustada (más rápida)
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 sm:gap-8 md:gap-10 -translate-x-1/2"
            >
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={`Logo ${index}`}
                  className="h-4 sm:h-5 md:h-6 w-auto" // Tamaños más pequeños para las imágenes
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
