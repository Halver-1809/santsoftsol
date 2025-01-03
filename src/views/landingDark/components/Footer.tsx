import { Link } from "react-router-dom";
import LogoComponent from "../assets/logo";

import SocialFacebook from "../assets/social-instagram";
import SocialLinkedIn from "../assets/social-youtube";

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

          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/share/18XEryd2Lb/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition h-6 w-6"
            >
              <SocialFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/sant-soft-b0b66a339/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition h-6 w-6"
            >
              <SocialLinkedIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
