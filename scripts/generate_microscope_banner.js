const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const W = 1200;
const H = 675;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f8fafc" />
    </linearGradient>

    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>

    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)" />

  <!-- Subtle grid pattern overlay -->
  <g opacity="0.05" stroke="#ffffff" stroke-width="1">
    ${Array.from({ length: 24 }).map((_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="${H}" />`).join('')}
    ${Array.from({ length: 14 }).map((_, i) => `<line x1="0" y1="${i * 50}" x2="${W}" y2="${i * 50}" />`).join('')}
  </g>

  <!-- Top Header Bar -->
  <rect x="0" y="0" width="${W}" height="92" fill="#090d16" />
  <rect x="0" y="89" width="${W}" height="3" fill="url(#headerGrad)" />

  <!-- Brand / Title -->
  <g transform="translate(40, 24)">
    <rect x="0" y="0" width="160" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1" />
    <text x="80" y="16" fill="#38bdf8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">KENYA OPTICS GUIDE</text>
    
    <text x="175" y="18" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800" letter-spacing="-0.5">
      LABORATORY MICROSCOPES: STARTER VS. OLYMPUS
    </text>
    <text x="0" y="52" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500">
      Technical Buyer's Framework for Clinics, Dispensaries, Schools &amp; Diagnostic Hospitals in Kenya
    </text>
  </g>

  <g transform="translate(1020, 32)">
    <text x="140" y="16" fill="#38bdf8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" text-anchor="end">MEDWISE</text>
    <text x="140" y="34" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="600" text-anchor="end">TECHNICAL CONSULTING</text>
  </g>

  <!-- Left Card: Starter & Budget Tier -->
  <g transform="translate(40, 115)" filter="url(#cardShadow)">
    <rect width="545" height="475" rx="18" fill="url(#cardGrad)" stroke="#cbd5e1" stroke-width="1" />
    <rect width="545" height="8" rx="4" fill="#0284c7" />

    <!-- Card Header -->
    <rect x="24" y="24" width="36" height="36" rx="10" fill="#e0f2fe" />
    <text x="42" y="48" fill="#0369a1" font-family="sans-serif" font-size="18" font-weight="800" text-anchor="middle">1</text>

    <text x="72" y="40" fill="#0f172a" font-family="sans-serif" font-size="19" font-weight="800">The Starter &amp; Budget Tier</text>
    <text x="72" y="58" fill="#64748b" font-family="sans-serif" font-size="12" font-weight="600">X107 Series • Omega 7 • Basic TE Models</text>

    <!-- Price Pill -->
    <rect x="360" y="24" width="160" height="28" rx="14" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1" />
    <text x="440" y="43" fill="#0369a1" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle">KES 22,000 – 30,000</text>

    <!-- Divider -->
    <line x1="24" y1="78" x2="520" y2="78" stroke="#e2e8f0" stroke-width="1" />

    <!-- Technical Specs -->
    <g transform="translate(24, 98)" font-family="sans-serif" font-size="13" fill="#334155">
      <text y="15"><tspan font-weight="700" fill="#0f172a">Target Facility:</tspan> Zahanati, Dispensaries, Small Labs, Schools</text>
      <text y="42"><tspan font-weight="700" fill="#0f172a">Optical Objectives:</tspan> Standard Achromatic (4x, 10x, 40x, 100x Oil)</text>
      <text y="69"><tspan font-weight="700" fill="#0f172a">Illumination:</tspan> Basic Halogen (6V 20W) or Entry-Level LED</text>
      <text y="96"><tspan font-weight="700" fill="#0f172a">Primary Use Cases:</tspan> Stool/Urine O&amp;P, Simple Smears, Teaching</text>
      <text y="123"><tspan font-weight="700" fill="#0f172a">Key Benefit:</tspan> Highly affordable, low repair costs, simple operation</text>
      <text y="150"><tspan font-weight="700" fill="#0f172a">Limitation:</tspan> Field edge distortion, basic color correction, manual wear</text>
    </g>

    <!-- Key Feature Box -->
    <rect x="24" y="280" width="497" height="110" rx="12" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1" />
    <text x="40" y="305" fill="#0369a1" font-family="sans-serif" font-size="12" font-weight="700">✓ BEST FOR STARTUPS &amp; TRAINING</text>
    <text x="40" y="328" fill="#334155" font-family="sans-serif" font-size="12">
      • Cost-effective entry for primary healthcare centers
    </text>
    <text x="40" y="350" fill="#334155" font-family="sans-serif" font-size="12">
      • Readily available replacement bulbs, mirrors &amp; stage clips
    </text>
    <text x="40" y="372" fill="#334155" font-family="sans-serif" font-size="12">
      • Handles routine outpatient parasitology and urinalysis
    </text>

    <!-- Bottom Badge -->
    <rect x="24" y="410" width="180" height="26" rx="8" fill="#e0f2fe" />
    <text x="114" y="427" fill="#0369a1" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">Entry-Level Workhorse</text>
  </g>

  <!-- Right Card: Premium Diagnostic Tier -->
  <g transform="translate(615, 115)" filter="url(#cardShadow)">
    <rect width="545" height="475" rx="18" fill="url(#cardGrad)" stroke="#cbd5e1" stroke-width="1" />
    <rect width="545" height="8" rx="4" fill="#059669" />

    <!-- Card Header -->
    <rect x="24" y="24" width="36" height="36" rx="10" fill="#d1fae5" />
    <text x="42" y="48" fill="#047857" font-family="sans-serif" font-size="18" font-weight="800" text-anchor="middle">2</text>

    <text x="72" y="40" fill="#0f172a" font-family="sans-serif" font-size="19" font-weight="800">The Premium Diagnostic Tier</text>
    <text x="72" y="58" fill="#64748b" font-family="sans-serif" font-size="12" font-weight="600">Olympus CX21 • Olympus CX23 System</text>

    <!-- Price Pill -->
    <rect x="345" y="24" width="175" height="28" rx="14" fill="#d1fae5" stroke="#6ee7b7" stroke-width="1" />
    <text x="432" y="43" fill="#047857" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle">KES 120,000 – 170,000</text>

    <!-- Divider -->
    <line x1="24" y1="78" x2="520" y2="78" stroke="#e2e8f0" stroke-width="1" />

    <!-- Technical Specs -->
    <g transform="translate(24, 98)" font-family="sans-serif" font-size="13" fill="#334155">
      <text y="15"><tspan font-weight="700" fill="#0f172a">Target Facility:</tspan> Level 4/5 Hospitals, Diagnostic Centers, Research</text>
      <text y="42"><tspan font-weight="700" fill="#0f172a">Optical System:</tspan> Plan Achromatic Anti-Fungus Infinity Optics</text>
      <text y="69"><tspan font-weight="700" fill="#0f172a">Illumination:</tspan> Ultra-Bright 0.5W LED (20,000+ Hr Lifetime) / Halogen</text>
      <text y="96"><tspan font-weight="700" fill="#0f172a">Primary Use Cases:</tspan> Malaria Smears, Microbiology, Histology, Hematology</text>
      <text y="123"><tspan font-weight="700" fill="#0f172a">Key Benefit:</tspan> Flat edge-to-edge clarity, ergonomic stage, zero eye fatigue</text>
      <text y="150"><tspan font-weight="700" fill="#0f172a">Durability:</tspan> Heavy cast aluminum frame, rackless stage, brass gears</text>
    </g>

    <!-- Key Feature Box -->
    <rect x="24" y="280" width="497" height="110" rx="12" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
    <text x="40" y="305" fill="#047857" font-family="sans-serif" font-size="12" font-weight="700">✓ THE CLINICAL GOLD STANDARD IN KENYA</text>
    <text x="40" y="328" fill="#334155" font-family="sans-serif" font-size="12">
      • World-renowned Olympus optical precision &amp; fungus-proof treatment
    </text>
    <text x="40" y="350" fill="#334155" font-family="sans-serif" font-size="12">
      • Ultra-crisp resolution for high-stakes parasite &amp; bacterial identification
    </text>
    <text x="40" y="372" fill="#334155" font-family="sans-serif" font-size="12">
      • Precision coaxial coarse &amp; fine focus with torque tension control
    </text>

    <!-- Bottom Badge -->
    <rect x="24" y="410" width="210" height="26" rx="8" fill="#d1fae5" />
    <text x="129" y="427" fill="#047857" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">Gold-Standard Diagnostic Unit</text>
  </g>

  <!-- Bottom Footer Accent Bar -->
  <rect x="0" y="${H - 50}" width="${W}" height="50" fill="#090d16" />
  <text x="40" y="${H - 20}" fill="#94a3b8" font-family="sans-serif" font-size="12" font-weight="600">
    Source: Medwise Technical Consulting • Biomedical Engineering &amp; Sourcing Kenya
  </text>
  <text x="${W - 40}" y="${H - 20}" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="700" text-anchor="end">
    WhatsApp: +254 117 233 522  •  medwisetechnicalconsulting.co.ke
  </text>
</svg>
`;

async function generateImage() {
  const outPath = path.join(__dirname, '..', 'public', 'images', 'blog', 'laboratory-microscope-kenya-guide.png');
  const buffer = Buffer.from(svg);
  await sharp(buffer)
    .png({ quality: 95 })
    .toFile(outPath);
  console.log('Saved microscope banner to:', outPath);
}

generateImage().catch(console.error);
