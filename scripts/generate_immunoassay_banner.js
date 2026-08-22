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
    
    <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f8fafc" />
    </linearGradient>

    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1e3a8a" />
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
    <rect x="0" y="0" width="130" height="24" rx="12" fill="#2563eb" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1" />
    <text x="65" y="16" fill="#60a5fa" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">KENYA IVD GUIDE</text>
    
    <text x="145" y="18" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800" letter-spacing="-0.5">
      IMMUNOASSAY ANALYZERS: FIA vs. ELISA vs. CLIA
    </text>
    <text x="0" y="52" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500">
      Technical Selection Framework for Medical Laboratories, Clinics &amp; Hospitals in Kenya
    </text>
  </g>

  <g transform="translate(1020, 32)">
    <text x="140" y="16" fill="#38bdf8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" text-anchor="end">MEDWISE</text>
    <text x="140" y="34" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="600" text-anchor="end">TECHNICAL CONSULTING</text>
  </g>

  <!-- Quadrant 1: FIA POCT (Top Left) -->
  <g transform="translate(40, 110)" filter="url(#cardShadow)">
    <rect width="545" height="235" rx="16" fill="url(#cardGrad1)" stroke="#cbd5e1" stroke-width="1" />
    <rect width="545" height="6" rx="3" fill="#0284c7" />
    
    <!-- Quadrant Header -->
    <rect x="20" y="18" width="30" height="30" rx="8" fill="#e0f2fe" />
    <text x="35" y="38" fill="#0369a1" font-family="sans-serif" font-size="16" font-weight="800" text-anchor="middle">1</text>
    
    <text x="60" y="32" fill="#0f172a" font-family="sans-serif" font-size="16" font-weight="800">FIA (Fluorescence Immunoassay)</text>
    <text x="60" y="47" fill="#64748b" font-family="sans-serif" font-size="11" font-weight="600">Rapid POCT Screening / Portable Desk Analyzer</text>

    <rect x="390" y="18" width="135" height="24" rx="12" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1" />
    <text x="457" y="34" fill="#0369a1" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">KES 50K – 200K</text>

    <!-- Specs List -->
    <g transform="translate(20, 68)" font-family="sans-serif" font-size="12" fill="#334155">
      <text y="15"><tspan font-weight="700" fill="#0f172a">Best For:</tspan> Startups, small clinics, dispensaries, emergency triage</text>
      <text y="38"><tspan font-weight="700" fill="#0f172a">Turnaround Time:</tspan> 8 – 15 minutes per test strip</text>
      <text y="61"><tspan font-weight="700" fill="#0f172a">Key Benefit:</tspan> Low capital investment, compact, zero fluidic maintenance</text>
      <text y="84"><tspan font-weight="700" fill="#0f172a">Limitation:</tspan> Moderate sensitivity (requires confirmatory testing if suspicious)</text>
      <text y="107"><tspan font-weight="700" fill="#0284c7">Leading Brands in Kenya:</tspan> Wondfo Finecare, Boditech i-Chroma</text>
    </g>

    <!-- Badge -->
    <rect x="20" y="196" width="165" height="22" rx="6" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1"/>
    <text x="102" y="211" fill="#0284c7" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle">✓ Rapid POCT Screening</text>
  </g>

  <!-- Quadrant 2: ELISA Setup (Top Right) -->
  <g transform="translate(615, 110)" filter="url(#cardShadow)">
    <rect width="545" height="235" rx="16" fill="url(#cardGrad1)" stroke="#cbd5e1" stroke-width="1" />
    <rect width="545" height="6" rx="3" fill="#d97706" />

    <!-- Quadrant Header -->
    <rect x="20" y="18" width="30" height="30" rx="8" fill="#fef3c7" />
    <text x="35" y="38" fill="#b45309" font-family="sans-serif" font-size="16" font-weight="800" text-anchor="middle">2</text>
    
    <text x="60" y="32" fill="#0f172a" font-family="sans-serif" font-size="16" font-weight="800">ELISA (Microplate 96-Well System)</text>
    <text x="60" y="47" fill="#64748b" font-family="sans-serif" font-size="11" font-weight="600">Microplate Reader &amp; Automated Washer Workflow</text>

    <rect x="390" y="18" width="135" height="24" rx="12" fill="#fef3c7" stroke="#fcd34d" stroke-width="1" />
    <text x="457" y="34" fill="#b45309" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">KES 300K – 700K</text>

    <!-- Specs List -->
    <g transform="translate(20, 68)" font-family="sans-serif" font-size="12" fill="#334155">
      <text y="15"><tspan font-weight="700" fill="#0f172a">Best For:</tspan> Medical research centers, blood banks, batch reference labs</text>
      <text y="38"><tspan font-weight="700" fill="#0f172a">Turnaround Time:</tspan> 2 – 4 hours (96-well microplate batch processing)</text>
      <text y="61"><tspan font-weight="700" fill="#0f172a">Key Benefit:</tspan> Highly reliable, lowest cost per well in large batches</text>
      <text y="84"><tspan font-weight="700" fill="#0f172a">Limitation:</tspan> Labor-intensive pipetting/washing, no isolated emergency tests</text>
      <text y="107"><tspan font-weight="700" fill="#d97706">Leading Brands in Kenya:</tspan> EMP (Empsun) Reader, Biobase Washer</text>
    </g>

    <!-- Badge -->
    <rect x="20" y="196" width="175" height="22" rx="6" fill="#fffbeb" stroke="#fde68a" stroke-width="1"/>
    <text x="107" y="211" fill="#b45309" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle">✓ 96-Well Batch Economics</text>
  </g>

  <!-- Quadrant 3: POCT CLIA Cartridge (Bottom Left) -->
  <g transform="translate(40, 365)" filter="url(#cardShadow)">
    <rect width="545" height="235" rx="16" fill="url(#cardGrad1)" stroke="#cbd5e1" stroke-width="1" />
    <rect width="545" height="6" rx="3" fill="#059669" />

    <!-- Quadrant Header -->
    <rect x="20" y="18" width="30" height="30" rx="8" fill="#d1fae5" />
    <text x="35" y="38" fill="#047857" font-family="sans-serif" font-size="16" font-weight="800" text-anchor="middle">3A</text>
    
    <text x="60" y="32" fill="#0f172a" font-family="sans-serif" font-size="16" font-weight="800">POCT CLIA (Single-Use Cartridge)</text>
    <text x="60" y="47" fill="#64748b" font-family="sans-serif" font-size="11" font-weight="600">Chemiluminescence Point-of-Care / Zero Reagent Waste</text>

    <rect x="375" y="18" width="150" height="24" rx="12" fill="#d1fae5" stroke="#6ee7b7" stroke-width="1" />
    <text x="450" y="34" fill="#047857" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">KES 800K – 3.0M</text>

    <!-- Specs List -->
    <g transform="translate(20, 68)" font-family="sans-serif" font-size="12" fill="#334155">
      <text y="15"><tspan font-weight="700" fill="#0f172a">Best For:</tspan> Medium labs, cardiology &amp; endocrine units, urgent care</text>
      <text y="38"><tspan font-weight="700" fill="#0f172a">Turnaround Time:</tspan> 12 – 20 minutes (individual cartridge test)</text>
      <text y="61"><tspan font-weight="700" fill="#0f172a">Key Benefit:</tspan> Zero reagent waste (1 patient = 1 sealed cartridge), gold standard</text>
      <text y="84"><tspan font-weight="700" fill="#0f172a">Sensitivity:</tspan> Picogram-level (10⁻¹² g) ultra-high precision detection</text>
      <text y="107"><tspan font-weight="700" fill="#059669">Leading Brands in Kenya:</tspan> Hotgen CLIA, Draway iStar, mini VIDAS</text>
    </g>

    <!-- Badge -->
    <rect x="20" y="196" width="185" height="22" rx="6" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
    <text x="112" y="211" fill="#047857" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle">✓ Zero Waste Single-Use CLIA</text>
  </g>

  <!-- Quadrant 4: Wet CLIA Automated Platform (Bottom Right) -->
  <g transform="translate(615, 365)" filter="url(#cardShadow)">
    <rect width="545" height="235" rx="16" fill="url(#cardGrad1)" stroke="#cbd5e1" stroke-width="1" />
    <rect width="545" height="6" rx="3" fill="#7c3aed" />

    <!-- Quadrant Header -->
    <rect x="20" y="18" width="30" height="30" rx="8" fill="#ede9fe" />
    <text x="35" y="38" fill="#6d28d9" font-family="sans-serif" font-size="16" font-weight="800" text-anchor="middle">3B</text>
    
    <text x="60" y="32" fill="#0f172a" font-family="sans-serif" font-size="16" font-weight="800">Wet CLIA (Bulk Liquid Automation)</text>
    <text x="60" y="47" fill="#64748b" font-family="sans-serif" font-size="11" font-weight="600">High-Throughput Floor &amp; Benchtop Chemiluminescence</text>

    <rect x="375" y="18" width="150" height="24" rx="12" fill="#ede9fe" stroke="#c4b5fd" stroke-width="1" />
    <text x="450" y="34" fill="#6d28d9" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">KES 2.5M – 7.0M</text>

    <!-- Specs List -->
    <g transform="translate(20, 68)" font-family="sans-serif" font-size="12" fill="#334155">
      <text y="15"><tspan font-weight="700" fill="#0f172a">Best For:</tspan> Level 4/5 hospitals, high-volume commercial diagnostic hubs</text>
      <text y="38"><tspan font-weight="700" fill="#0f172a">Throughput Velocity:</tspan> 120 – 300+ tests/hour walk-away capacity</text>
      <text y="61"><tspan font-weight="700" fill="#0f172a">Reagent Stability:</tspan> 28 – 42 days refrigerated onboard open stability</text>
      <text y="84"><tspan font-weight="700" fill="#0f172a">Economics:</tspan> Lowest Cost Per Test (CPT) &amp; maximum lab profitability</text>
      <text y="107"><tspan font-weight="700" fill="#7c3aed">Leading Brands in Kenya:</tspan> Mindray, YHLO (iFlash), Autobio, Zybio</text>
    </g>

    <!-- Badge -->
    <rect x="20" y="196" width="200" height="22" rx="6" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="120" y="211" fill="#6d28d9" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle">✓ Lowest Cost Per Test (CPT)</text>
  </g>

  <!-- Bottom Footer Accent Bar -->
  <rect x="0" y="${H - 50}" width="${W}" height="50" fill="#090d16" />
  <text x="40" y="${H - 20}" fill="#94a3b8" font-family="sans-serif" font-size="12" font-weight="600">
    Source: Medwise Technical Consulting • Biomedical Advisory &amp; Equipment Supply Kenya
  </text>
  <text x="${W - 40}" y="${H - 20}" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="700" text-anchor="end">
    WhatsApp: +254 117 233 522  •  medwisetechnicalconsulting.co.ke
  </text>
</svg>
`;

async function generateImage() {
  const outPath = path.join(__dirname, '..', 'public', 'images', 'blog', 'immunoassay-analyzer-kenya-guide.png');
  const buffer = Buffer.from(svg);
  await sharp(buffer)
    .png({ quality: 95 })
    .toFile(outPath);
  console.log('Saved immunoassay banner to:', outPath);
}

generateImage().catch(console.error);
