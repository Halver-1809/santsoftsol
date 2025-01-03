import { StarsImage } from "../assets";
import { useRef, useEffect, useState } from "react";

export const Heros: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Hook de scroll para capturar el progreso del desplazamiento
  const handleScroll = () => {
    if (sectionRef.current) {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
    }
  };

  useEffect(() => {
    // Añadir el evento de scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Eliminar el evento de scroll al desmontar el componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Transformación del fondo en función del scroll
  const backgroundPositionY = (scrollY / 2) - 300;

  return (
    <section
      ref={sectionRef}
      id="Hero"
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${StarsImage.src})`,
        backgroundPositionY: `${backgroundPositionY}px`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"></div>
      
      {/* Start Planet */}
      <div className="absolute size-64 md:size-96 bg-purple-500 border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)] rounded-full"></div>
      {/* End Planet */}

      {/* Start Ring 1 */}
      <div
        className="absolute size-[344px] md:size-[580px] border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-rotate"
      >
        <div className="absolute size-2 bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-2 bg-white top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-5 border border-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2 rounded-full inline-flex justify-center items-center">
          <div className="size-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* End Ring 1 */}

      {/* Start Ring 2 */}
      <div
        className="absolute size-[444px] md:size-[780px] border border-dashed border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-rotate-reverse"
      ></div>
      {/* End Ring 2 */}

      {/* Start Ring 3 */}
      <div
        className="absolute size-[544px] md:size-[980px] border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-rotate"
      >
        <div className="absolute size-2 bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-2 bg-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </div>
      {/* End Ring 3 */}

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center h-full w-full text-center">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] text-transparent bg-clip-text">
          SantSoft
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 max-w-xl">
          At Santsoft, we are your strategic partner to maximize Salesforce and digitally transform your business.
        </p>
      </div>
    </section>
  );
};

