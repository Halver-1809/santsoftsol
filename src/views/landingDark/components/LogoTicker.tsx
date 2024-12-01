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
    <section className="py-20 md:py-24">
      <div className="container px-4 sm:px-8 md:px-16 lg:px-40"> {/* Aseguramos un padding responsivo */}
        <div className="flex items-center gap-5 justify-between md:justify-end"> {/* Cambiado justify-between para mejorar el espaciado en pantallas pequeñas */}
          <div className="flex-1 md:flex-none text-center md:text-right"> {/* Alinea el texto a la derecha en pantallas grandes */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Trusted by top innovative teams</h2> {/* Escalabilidad en el tamaño del texto */}
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-10 sm:gap-12 md:gap-14 -translate-x-1/2"
            >
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={`Logo ${index}`}
                  className="h-6 sm:h-8 md:h-10 w-auto"  // Escalado de tamaño de logo según el dispositivo
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
