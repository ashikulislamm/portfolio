'use client';

export const TapeSection = () => {
  const words = [
    "ACCESSIBLE",
    "SECURE", 
    "INTERACTIVE",
    "SCALABLE",
    "USER FRIENDLY",
    "RESPONSIVE",
    "MAINTAINABLE",
    "SEARCH OPTIMIZED",
    "USABLE",
    "RELIABLE"
  ];

  return (
    <div className="py-16 overflow-hidden bg-accent relative">
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-hover to-accent"></div>
      
      {/* Moving tape */}
      <div className="flex whitespace-nowrap relative">
        <div className="flex animate-marquee items-center">
          {[...words, ...words].map((word, index) => (
            <div key={index} className="flex items-center">
              <span className="text-background text-xl md:text-2xl font-bold mx-8">
                {word}
              </span>
              <div className="w-4 h-4 bg-background/20 rounded-full mx-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
