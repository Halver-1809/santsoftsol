import { Link } from "react-router-dom";
import LogoComponent from "../assets/logo";

import SocialYoutube from "../assets/social-youtube";
import SocialFacebook from "../assets/social-instagram";

const navItems = [
  { href: "#", title: "Features" },
  { href: "#", title: "Developers" },
  { href: "#", title: "Company" },
  { href: "#", title: "Blog" },
  { href: "#", title: "Changelog" },
];

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15 bg-black">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* Logo and Brand Name */}
          <div className="flex gap-2 items-center flex-shrink-0">
            <LogoComponent className="h-10 w-auto" />
            <span className="font-medium text-white">SantSoft</span>
          </div>
          
          {/* Navigation links */}
          <nav className="flex gap-5 lg:gap-7">
            {navItems.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-white/70 hover:text-white text-xs sm:text-sm transition"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          
          {/* Social Icons */}
          <div className="flex gap-5">
            <SocialFacebook className="text-white/40 hover:text-white transition h-6 w-6" />
            <SocialYoutube className="text-white/40 hover:text-white transition h-6 w-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};
