"use client";

import React, { useEffect, useRef } from "react";

interface HeroCanvasSlotProps {
  /**
   * If you choose a ReactBits background component (e.g. Hyperspeed, Particles,
   * GridDistortion, Aurora, Waves, etc.), pass it as children here.
   * If children is omitted, our built-in interactive cyber-mesh canvas will render.
   */
  children?: React.ReactNode;
  className?: string;
}

export const HeroCanvasSlot: React.FC<HeroCanvasSlotProps> = ({
  children,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // If user has provided a custom ReactBits component, skip the default canvas animation
    if (children) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;

    // Size the backing store to the canvas' rendered box (not the window) and the
    // device pixel ratio, so it stays crisp and undistorted at every viewport size.
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();

    // Particle settings for an ambient cyberpunk grid/particle field
    const particleCount = Math.min(Math.floor((width * height) / 14000), 90);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      phase: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.15,
        alpha: 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Pause the animation loop while the hero is scrolled out of view
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      const wasVisible = isVisible;
      isVisible = entry.isIntersecting;
      if (isVisible && !wasVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    });
    visibilityObserver.observe(canvas);

    // Read theme color from CSS variables dynamically
    const parseColorToRgb = (str: string): string => {
      const clean = str.trim();
      if (clean.startsWith("#")) {
        const hex = clean.length === 4
          ? `#${clean[1]}${clean[1]}${clean[2]}${clean[2]}${clean[3]}${clean[3]}`
          : clean;
        const num = parseInt(hex.slice(1), 16);
        if (!isNaN(num)) {
          return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
        }
      }
      return "247, 242, 235";
    };

    const computedAccent = getComputedStyle(document.documentElement).getPropertyValue("--color-accent") || "#F7F2EB";
    const accentRgb = parseColorToRgb(computedAccent);

    let time = 0;
    const render = () => {
      time += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Deep void background with subtle radial gradient centered around mouse
      const radialGrad = ctx.createRadialGradient(
        mouseX,
        mouseY,
        40,
        mouseX,
        mouseY,
        Math.max(width, height) * 0.75
      );
      radialGrad.addColorStop(0, `rgba(${accentRgb}, 0.05)`);
      radialGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.015)");
      radialGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw faint cybernetic grid dots in background
      const gridSpacing = 48;
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      const offsetX = (time * 6) % gridSpacing;
      const offsetY = (time * 6) % gridSpacing;

      for (let x = -gridSpacing + offsetX; x < width + gridSpacing; x += gridSpacing) {
        for (let y = -gridSpacing + offsetY; y < height + gridSpacing; y += gridSpacing) {
          const d = Math.hypot(x - mouseX, y - mouseY);
          if (d < 300) {
            ctx.fillStyle = `rgba(${accentRgb}, ${Math.max(0, (1 - d / 300) * 0.14)})`;
          } else {
            ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
          }
          ctx.fillRect(x, y, 1.2, 1.2);
        }
      }

      // Update and draw floating particles with soft connecting telemetry lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle alpha pulsation
        p.alpha = p.baseAlpha + Math.sin(time + p.phase) * 0.15;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentRgb}, ${Math.max(0.08, p.alpha)})`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${accentRgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [children]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {children ? (
        // Swappable custom ReactBits slot
        <div className="relative h-full w-full">{children}</div>
      ) : (
        // Built-in lightweight fallback canvas
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block h-full w-full bg-[#000000]"
        />
      )}

      {/* Top subtle vignette & bottom smooth fade into page content */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
    </div>
  );
};
