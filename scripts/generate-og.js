const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0e" />
      <stop offset="50%" stop-color="#070709" />
      <stop offset="100%" stop-color="#050507" />
    </linearGradient>

    <!-- Top Right Luxury Glow -->
    <radialGradient id="glow" cx="85%" cy="20%" r="55%">
      <stop offset="0%" stop-color="#F7F2EB" stop-opacity="0.10" />
      <stop offset="50%" stop-color="#F7F2EB" stop-opacity="0.02" />
      <stop offset="100%" stop-color="#070709" stop-opacity="0" />
    </radialGradient>

    <!-- Subtle Grid Pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.025)" stroke-width="1" />
    </pattern>
  </defs>

  <!-- Background Layer -->
  <rect width="1200" height="630" fill="url(#bg-grad)" />
  <rect width="1200" height="630" fill="url(#grid)" />
  <rect width="1200" height="630" fill="url(#glow)" />

  <!-- Inner Architectural Card Border -->
  <rect x="40" y="40" width="1120" height="550" rx="24" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5" />

  <!-- Top Status Badge -->
  <rect x="80" y="80" width="370" height="36" rx="18" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
  <circle cx="102" cy="98" r="4.5" fill="#F7F2EB" />
  <text x="118" y="103" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#F7F2EB" text-transform="uppercase">
    ASHIKUL ISLAM // SYSTEM ARCHITECT
  </text>

  <!-- Main Title -->
  <text x="80" y="240" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="82" font-weight="900" letter-spacing="-2" fill="#FFFFFF">
    ASHIKUL ISLAM
  </text>

  <!-- Subtitle Tagline -->
  <text x="82" y="300" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="30" font-weight="700" letter-spacing="0" fill="#F7F2EB">
    System Architect &amp; Software Engineer
  </text>

  <!-- Summary Description -->
  <text x="82" y="365" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400" fill="#9CA3AF">
    Architecting resilient distributed systems, scalable web applications,
  </text>
  <text x="82" y="398" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400" fill="#9CA3AF">
    and high-performance cloud infrastructure.
  </text>

  <!-- Divider Line -->
  <line x1="80" y1="465" x2="1120" y2="465" stroke="rgba(255, 255, 255, 0.10)" stroke-width="1" />

  <!-- Bottom Tech Pills -->
  <!-- Pill 1: Next.js 16 -->
  <rect x="80" y="495" width="105" height="34" rx="8" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
  <text x="132" y="517" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#E5E7EB" text-anchor="middle">Next.js 16</text>

  <!-- Pill 2: React 19 -->
  <rect x="197" y="495" width="95" height="34" rx="8" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
  <text x="244" y="517" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#E5E7EB" text-anchor="middle">React 19</text>

  <!-- Pill 3: TypeScript -->
  <rect x="304" y="495" width="110" height="34" rx="8" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
  <text x="359" y="517" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#E5E7EB" text-anchor="middle">TypeScript</text>

  <!-- Pill 4: PostgreSQL -->
  <rect x="426" y="495" width="110" height="34" rx="8" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
  <text x="481" y="517" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#E5E7EB" text-anchor="middle">PostgreSQL</text>

  <!-- Pill 5: Docker -->
  <rect x="548" y="495" width="85" height="34" rx="8" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
  <text x="590" y="517" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#E5E7EB" text-anchor="middle">Docker</text>

  <!-- Pill 6: Hyperledger Besu -->
  <rect x="645" y="495" width="155" height="34" rx="8" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
  <text x="722" y="517" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#E5E7EB" text-anchor="middle">Hyperledger Besu</text>

  <!-- Bottom Right Coordinates -->
  <text x="1115" y="517" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" letter-spacing="1.5" fill="#6B7280" text-anchor="end">
    DHAKA, BD · UTC+06:00
  </text>
</svg>
`;

const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log('Successfully generated 1200x630 OG image at:', outputPath);
  })
  .catch((err) => {
    console.error('Error generating OG image:', err);
    process.exit(1);
  });
