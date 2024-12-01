import { Link } from "react-router-dom";
import LogoComponent from "../assets/logo";
import SocialX from "../assets/social-x";
import SocialInstagram from "../assets/social-instagram";
import SocialYoutube from "../assets/social-youtube";

const navItems = [
  { href: "#", title: "Features" },
  { href: "#", title: "Developers" },
  { href: "#", title: "Company" },
  { href: "#", title: "Blog" },
  { href: "#", title: "Changelog" },
];

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <LogoComponent className="size-6" />
            <span className="font-medium">SantSoft </span>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            {navItems.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <SocialX className="text-white/40 hover:text-white transition" />
            <SocialInstagram className="text-white/40 hover:text-white transition" />
            <SocialYoutube className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
