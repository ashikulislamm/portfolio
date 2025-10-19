"use client";

import { useState, useEffect } from "react";
import { X, Menu, User } from "lucide-react";
import logo from "@/app/favicon.ico";
import Logo from "@/assets/images/Logo.gif"
import { LoadingLink } from "@/components/LoadingLink";
import { useLoading } from "@/contexts/LoadingContext";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const { startLoading } = useLoading();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMenuAnimating(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsMenuAnimating(false);
      }, 300);
    } else {
      setIsMobileMenuOpen(true);
      setIsMenuAnimating(true);
      setTimeout(() => setIsMenuAnimating(false), 50);
    }
  };

  const closeMobileMenu = () => {
    setIsMenuAnimating(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMenuAnimating(false);
    }, 300);
  };

  const handleNavClick = (href: string) => {
    closeMobileMenu();

    if (href.includes("#")) {
      // Handle section scrolling
      const [path, hash] = href.split("#");

      if (path === "/" || path === "") {
        // We're navigating to home page sections
        if (window.location.pathname !== "/") {
          // Not on home page, navigate to home first then scroll
          // Let LoadingLink handle the loading state
          window.location.href = href;
        } else {
          // On home page, just scroll
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
    // For regular page navigation, let LoadingLink handle it
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-md border-b border-surface"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <LoadingLink
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                  className="text-background font-bold text-lg w-10 h-10"
                  alt="Logo"
                  src={Logo.src}
                />
              </div>
              <span className="ml-3 text-text-primary font-semibold text-lg">
                Ashikul Islam
              </span>
            </LoadingLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                // Handle section scrolling vs page navigation
                if (item.href.includes("#")) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </button>
                  );
                } else {
                  return (
                    <LoadingLink
                      key={item.name}
                      href={item.href}
                      className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </LoadingLink>
                  );
                }
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <LoadingLink
                href="/contact"
                className="bg-accent hover:bg-accent-hover text-background px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Let's Connect
              </LoadingLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-text-primary z-60 relative hover:scale-110 transition-transform duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-90 opacity-0"
                      : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-0 opacity-100"
                      : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
            isMenuAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className={`fixed inset-0 bg-background/95 backdrop-blur-md transition-all duration-300 ${
              isMenuAnimating
                ? "bg-background/0 backdrop-blur-none"
                : "bg-background/95 backdrop-blur-md"
            }`}
          >
            <div
              className={`flex flex-col h-full pt-20 px-4 transition-transform duration-300 ease-out ${
                isMenuAnimating
                  ? "transform -translate-y-4"
                  : "transform translate-y-0"
              }`}
            >
              {/* Navigation */}
              <nav className="flex-1 space-y-1">
                {navItems.map((item, index) => {
                  // Handle section scrolling vs page navigation
                  if (item.href.includes("#")) {
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={`block w-full text-left text-text-secondary hover:text-accent transition-all duration-200 font-medium py-4 px-4 rounded-lg hover:bg-surface/30 hover:scale-105 ${
                          isMenuAnimating
                            ? "opacity-0 transform translate-x-4"
                            : "opacity-100 transform translate-x-0"
                        }`}
                        style={{
                          transitionDelay: isMenuAnimating
                            ? "0ms"
                            : `${index * 50}ms`,
                        }}
                      >
                        {item.name}
                      </button>
                    );
                  } else {
                    return (
                      <LoadingLink
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`block w-full text-left text-text-secondary hover:text-accent transition-all duration-200 font-medium py-4 px-4 rounded-lg hover:bg-surface/30 hover:scale-105 ${
                          isMenuAnimating
                            ? "opacity-0 transform translate-x-4"
                            : "opacity-100 transform translate-x-0"
                        }`}
                        style={{
                          transitionDelay: isMenuAnimating
                            ? "0ms"
                            : `${index * 50}ms`,
                        }}
                      >
                        {item.name}
                      </LoadingLink>
                    );
                  }
                })}
              </nav>

              {/* CTA Button */}
              <div
                className={`pb-8 transition-all duration-300 ${
                  isMenuAnimating
                    ? "opacity-0 transform translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
                style={{
                  transitionDelay: isMenuAnimating
                    ? "0ms"
                    : `${navItems.length * 50}ms`,
                }}
              >
                <LoadingLink
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full bg-accent hover:bg-accent-hover text-background px-6 py-4 rounded-lg font-medium transition-all duration-200 text-center hover:scale-105"
                >
                  Let's Connect
                </LoadingLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
