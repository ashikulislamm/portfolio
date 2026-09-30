"use client";

import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { SystemsMatrix } from "@/components/capabilities/SystemsMatrix";
import { ChronologyFlow } from "@/components/chronology/ChronologyFlow";
import { FeaturedSystems } from "@/components/projects/FeaturedSystems";
import { BlueprintContact } from "@/components/contact/BlueprintContact";

export const HomePage: React.FC = () => {
  return (
    <div className="relative w-full bg-[#070709] text-white">
      {/* 01: Hero Section with ReactBits-Ready Canvas Slot */}
      <HeroSection />

      {/* 02: Capabilities Matrix with Kinetic Text Roll & Curved Tech Ribbon */}
      <SystemsMatrix />

      {/* 03: Editorial Chronology Flow with Color Transitions (Chologhuri -> IEEE Paper -> AUST) */}
      <ChronologyFlow />

      {/* 04: Featured Systems (Case Studies & Production Architectures) */}
      <FeaturedSystems />

      {/* 05: Blueprint Transmission Terminal with Corner Crosshairs */}
      <BlueprintContact />
    </div>
  );
};
