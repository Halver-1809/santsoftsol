import React, { useState } from "react";
import Button from "../components2/Button";
import LogoComponent from "../assets/logo";
import MenuIcon from "../assets/icon-menu";
import { IoMdSunny } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// Array de elementos de navegación
const navItems = [
  { href: "#Hero", title: "Hero" },
  { href: "#LogoTicker", title: "Logo Ticker" },
  { href: "#Testimonials", title: "Testimonials" },
  { href: "#pricing", title: "Pricing" },
  { href: "#ContactMe", title: "Contact Me" },
];

export const HeaderTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home/hometwoo/");
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full py-4 border-b border-white/15 md:border-none z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container mx-auto flex justify-center px-4">
        <div className="relative flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl w-full">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="inline-flex items-center justify-center size-10 border border-white/15 rounded-lg">
              <LogoComponent className="size-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {navItems.map((link, index) => (
                <button
                  key={index}
                  className="text-white/70 hover:text-white transition"
                  onClick={() => handleScrollToSection(link.href.slice(1))}
                >
                  {link.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Contenedor que rodea el botón del sol y el menú hamburguesa en dispositivos móviles */}
          <div className="flex-1 flex justify-center items-center gap-4 md:hidden">
            <Button onClick={goToHome}>
              <IoMdSunny color="white" size={24} />
            </Button>
          </div>

          {/* Menú hamburguesa */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </div>
        </div>
      </div>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((link, index) => (
              <button
                key={index}
                className="text-white/70 hover:text-white transition"
                onClick={() => {
                  handleScrollToSection(link.href.slice(1));
                  setMenuOpen(false); // Cierra el menú al hacer clic
                }}
              >
                {link.title}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
