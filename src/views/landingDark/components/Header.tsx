import Button from "../components2/Button";
import { Link } from "@chakra-ui/react";
import LogoComponent from "../assets/logo";
import MenuIcon from "../assets/icon-menu";
import { IoMdSunny } from "react-icons/io";  // Import the sun icon
import { useNavigate } from "react-router-dom";

const navItems = [
  { href: "#", title: "Features" },
  { href: "#", title: "Developers" },
  { href: "#", title: "Pricing" },
  { href: "#", title: "Changelog" },
];

export const HeaderTwo = () => {

  const navigate = useNavigate(); 
  
  const goToHome = () => {
    navigate('/home/hometwoo/'); 
  };

  return (
    <header className="sticky top-0 py-4 border-b border-white/15 md:border-none z-10">
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
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-white transition"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={goToHome}>
              <IoMdSunny color="white" size={24} /> {/* White sun icon */}
            </Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
