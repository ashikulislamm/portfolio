"use client";

import { useMemo, useEffect, useState } from "react";
import { ArrowUpRight, User, ChevronDown } from "lucide-react";
import Avatar from "@/assets/images/memoji-computer.png";
import { LoadingLink } from "@/components/LoadingLink";

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100; // milliseconds per character
  const deletingSpeed = 50; // slower deletion for smooth character-by-character effect
  const pauseTime = 2000; // pause between words

  useEffect(() => {
    setMounted(true);

    // Start typing animation after component mounts
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, 1000);

    return () => clearTimeout(startTyping);
  }, []);

  const texts = useMemo(
    () => [
      "User Experiences",
      "User Interfaces",
      "Backend Endpoints",
      "Web Applications",
    ],
    []
  );
  useEffect(() => {
    if (!isTyping) return;

    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing phase
          if (typedText.length < currentText.length) {
            setTypedText(currentText.slice(0, typedText.length + 1));
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting phase - character by character from the end
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1));
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex, isTyping, isDeleting, texts]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-8"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Stars */}
        <div className="star top-20 left-10 animate-float"></div>
        <div
          className="star top-32 right-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="star bottom-40 left-1/4 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="star top-1/2 right-10 animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="star top-16 right-1/3 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="star bottom-20 right-1/4 animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="star top-1/3 left-1/2 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="star bottom-1/5 left-16 animate-float"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="star top-2/3 right-1/2 animate-float"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="star bottom-16 left-1/2 animate-float"
          style={{ animationDelay: "3.5s" }}
        ></div>
        <div
          className="star top-24 left-2/3 animate-float"
          style={{ animationDelay: "2.8s" }}
        ></div>
        <div
          className="star bottom-1/2 right-16 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-surface rounded-full flex items-center justify-center border border-accent/20">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <img
                  src={Avatar.src}
                  alt="Profile Picture"
                  className="w-16 h-16 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-accent/20 mb-8">
            <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></div>
            <span className="text-text-secondary text-sm font-medium">
              Available for new projects
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-text-primary mb-2">
              Building Exceptional
            </span>
            <span className="block gradient-text min-h-[1.2em]">
              {typedText}
              <span
                className={`inline-block w-1 h-[0.8em] bg-accent ml-1 ${
                  isTyping ? "animate-pulse" : "opacity-0"
                }`}
              ></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I am a fullstack developer based in Bangladesh, dedicated to
            crafting user-centric digital experiences that not only look great
            but also deliver exceptional functionality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleNavClick("#projects")}
              className="bg-accent hover:bg-accent-hover text-background px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Explore My Work
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <LoadingLink
              href="/contact"
              className="border border-accent text-accent hover:bg-accent hover:text-background px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 w-full sm:w-auto inline-flex items-center justify-center"
            >
              Let's Connect
            </LoadingLink>
          </div>
        </div>
      </div>
    </section>
  );
};
