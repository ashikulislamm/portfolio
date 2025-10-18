import { FaGithub, FaLinkedin, FaBehance, FaFacebook } from "react-icons/fa6";
import logo from "@/app/favicon.ico";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ashikulislam.me/",
      icon: <FaFacebook />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ashikulislammm/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      href: "https://github.com/ashikulislamm",
      icon: <FaGithub />,
    },
    {
      name: "Behance",
      href: "https://www.behance.net/ashikulislam5",
      icon: <FaBehance />,
    },
  ];

  return (
    <footer className="relative">
      {/* Footer Section */}
      <div className="border-t border-surface">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                  className="text-background font-bold text-lg w-10 h-10"
                  alt="Logo"
                  src={logo.src}
                />
              </div>
              <div className="text-text-secondary text-sm">
                <div>
                  &copy; {currentYear} Ashikul Islam. All rights reserved.
                </div>
              </div>
            </div>

            {/* Social Links */}
            <nav className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary hover:text-accent transition-colors duration-200 text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
