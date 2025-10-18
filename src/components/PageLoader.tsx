'use client';

import { useEffect, useState } from 'react';

export const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-20 h-20 bg-green-500/10 rounded-full blur-lg animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/6 right-1/4 w-28 h-28 bg-pink-500/10 rounded-full blur-xl animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Animated Logo/Icon */}
        <div className="mb-8">
          <div className="relative w-20 h-20 mx-auto">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-4 border-accent/20 rounded-full animate-spin"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
            
            {/* Inner pulsing circle */}
            <div className="absolute inset-3 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-accent rounded-full flex items-center justify-center">
              <span className="text-background font-bold text-xl">A</span>
            </div>
            
            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s', animationDelay: '1s' }}>
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 translate-y-1"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s', animationDelay: '2s' }}>
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-400 rounded-full transform translate-x-1 -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            Loading Experience{dots}
          </h2>
          <p className="text-text-secondary">
            Preparing something amazing for you
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto">
          <div className="relative h-2 bg-surface/30 rounded-full overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
            
            {/* Progress fill */}
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent via-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
          
          {/* Progress percentage */}
          <div className="flex justify-between items-center mt-3">
            <span className="text-text-secondary text-sm">Loading...</span>
            <span className="text-accent font-medium text-sm">
              {Math.round(Math.min(progress, 100))}%
            </span>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-8 flex justify-center gap-8 text-text-muted">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span>Modern Design</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span>Fast Performance</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span>Great Experience</span>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};