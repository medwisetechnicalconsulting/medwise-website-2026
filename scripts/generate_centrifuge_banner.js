const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const W = 1200;
const H = 675;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090f1f" />
      <stop offset="50%" stop-color="#14213d" />
      <stop offset="100%" stop-color="#0b132b" />
    </linearGradient>
    
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f8fafc" />
    </linearGradient>

    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="50%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>

    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.38"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)" />

  <!-- Subtle grid pattern overlay -->
  <g opacity="0.06" stroke="#ffffff" stroke-width="1">
    ${Array.from({ length: 24 }).map((_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="${H}" />`).join('')}
    ${Array.from({ length: 14 }).map((_, i) => `<line x1="0" y1="${i * 50}" x2="${W}" y2="${i * 50}" />`).join('')}
  </g>

  <!-- Top Header Bar -->
  <rect x="0" y="0" width="${W}" height="94" fill="#070c18" />
  <rect x="0" y="91" width="${W}" height="3" fill="url(#headerGrad)" />

  <!-- Brand / Title -->
  <g transform="translate(40, 24)">
    <rect x="0" y="0" width="165" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1" />
    <text x="82" y="16" fill="#38bdf8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">KENYA LAB EQUIPMENT GUIDE</text>
    
    <text x="180" y="18" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800" letter-spacing="-0.5">
      CLINICAL CENTRIFUGES: TRADITIONAL VS. BRUSHLESS
    </text>
    <text x="0" y="52" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500">
      Technical Selection Framework for Medical Clinics, Diagnostic Labs &amp; Hospitals in Kenya
    </text>
  </g>

  <g transform="translate(1020, 32)">
    <text x="140" y="16" fill="#38bdf8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" text-anchor="end">MEDWISE</text>
    <text x="140" y="34" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="600" text-anchor="end">TECHNICAL CONSULTING</text>
  </g>

  <!-- Left Card: Traditional Entry-Level Tier -->
  <g transform="translate(40, 115)" filter="url(#cardShadow)">
    <rect width="545" height="475" rx="18" fill="url(#cardGrad)" stroke="#cbd5e1" stroke-width="1" />
    <rect width="545" height="8" rx="4" fill="#0284c7" />

    <!-- Card Header -->
    <rect x="24" y="24" width="36" height="36" rx="10" fill="#e0f2fe" />
    <text x="42" y="48" fill="#0369a1" font-family="sans-serif" font-size="18" font-weight="800" text-anchor="middle">1</text>

    <text x="72" y="40" fill="#0f172a" font-family="sans-serif" font-size="19" font-weight="800">Traditional Entry-Level Tier</text>
    <text x="72" y="58" fill="#64748b" font-family="sans-serif" font-size="12" font-weight="600">Round 6-Tube Rubber Lid • Compact Glass-Top (6 &amp; 12)</text>

    <!-- Price Pill -->
    <rect x="360" y="24" width="160" height="28" rx="14" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1" />
    <text x="440" y="43" fill="#0369a1" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle">KES 15,000 – 35,000</text>

    <!-- Divider -->
    <line x1="24" y1="78" x2="520" y2="78" stroke="#e2e8f0" stroke-width="1" />

    <!-- Technical Specs -->
    <g transform="translate(24, 98)" font-family="sans-serif" font-size="13" fill="#334155">
      <text y="15"><tspan font-weight="700" fill="#0f172a">Target Facility:</tspan> Zahanati, Starter Clinics, Outpatient Centers</text>
      <text y="42"><tspan font-weight="700" fill="#0f172a">Motor Technology:</tspan> Traditional Carbon Brush Motor</text>
      <text y="69"><tspan font-weight="700" fill="#0f172a">Capacity Options:</tspan> 6-Tube or 12-Tube Fixed Angle Rotor</text>
      <text y="96"><tspan font-weight="700" fill="#0f172a">Primary Use Cases:</tspan> Routine Urine &amp; Basic Blood Chemistry Separation</text>
      <text y="123"><tspan font-weight="700" fill="#0f172a">Control Interface:</tspan> Analog Rotary Dial (Timer &amp; Speed)</text>
      <text y="150"><tspan font-weight="700" fill="#0f172a">Considerations:</tspan> Carbon brush wear, motor heat, manual lid safety</text>
    </g>

    <!-- Key Feature Box -->
    <rect x="24" y="280" width="497" height="110" rx="12" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1" />
    <text x="40" y="305" fill="#0369a1" font-family="sans-serif" font-size="12" font-weight="700">✓ BEST FOR LOW-VOLUME CLINICS ON A BUDGET</text>
    <text x="40" y="328" fill="#334155" font-family="sans-serif" font-size="12">
      • Ultra-accessible capital cost for newly opened healthcare facilities
    </text>
    <text x="40" y="350" fill="#334155" font-family="sans-serif" font-size="12">
      • Transparent glass-top models allow visual monitoring of spin cycles
    </text>
    <text x="40" y="372" fill="#334155" font-family="sans-serif" font-size="12">
      • Straightforward mechanical design with ubiquitous replacement parts
    </text>

    <!-- Bottom Highlights -->
    <g transform="translate(24, 412)" font-family="sans-serif" font-size="11" fill="#64748b">
      <rect x="0" y="0" width="150" height="24" rx="6" fill="#f1f5f9" />
      <text x="75" y="16" fill="#475569" font-weight="600" text-anchor="middle">Up to 4,000 RPM</text>

      <rect x="160" y="0" width="165" height="24" rx="6" fill="#f1f5f9" />
      <text x="242" y="16" fill="#475569" font-weight="600" text-anchor="middle">6 x 15ml / 12 x 15ml</text>

      <rect x="335" y="0" width="162" height="24" rx="6" fill="#f1f5f9" />
      <text x="416" y="16" fill="#475569" font-weight="600" text-anchor="middle">Mechanical Timer</text>
    </g>
  </g>

  <!-- Right Card: Modern Brushless Tier -->
  <g transform="translate(615, 115)" filter="url(#cardShadow)">
    <rect width="545" height="475" rx="18" fill="url(#cardGrad)" stroke="#cbd5e1" stroke-width="1" />
    <rect width="545" height="8" rx="4" fill="#059669" />

    <!-- Card Header -->
    <rect x="24" y="24" width="36" height="36" rx="10" fill="#d1fae5" />
    <text x="42" y="48" fill="#047857" font-family="sans-serif" font-size="18" font-weight="800" text-anchor="middle">2</text>

    <text x="72" y="40" fill="#0f172a" font-family="sans-serif" font-size="19" font-weight="800">Modern Brushless Tier</text>
    <text x="72" y="58" fill="#64748b" font-family="sans-serif" font-size="12" font-weight="600">Digital Microprocessor • Brushless DC Motor (6, 8, 12, 24)</text>

    <!-- Price Pill -->
    <rect x="360" y="24" width="160" height="28" rx="14" fill="#d1fae5" stroke="#6ee7b7" stroke-width="1" />
    <text x="440" y="43" fill="#047857" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle">KES 45,000 – 120,000+</text>

    <!-- Divider -->
    <line x1="24" y1="78" x2="520" y2="78" stroke="#e2e8f0" stroke-width="1" />

    <!-- Technical Specs -->
    <g transform="translate(24, 98)" font-family="sans-serif" font-size="13" fill="#334155">
      <text y="15"><tspan font-weight="700" fill="#0f172a">Target Facility:</tspan> Level 4/5 Hospitals, Diagnostic Centers, Busy Labs</text>
      <text y="42"><tspan font-weight="700" fill="#0f172a">Motor Technology:</tspan> Maintenance-Free Brushless DC (BLDC) Motor</text>
      <text y="69"><tspan font-weight="700" fill="#0f172a">Safety Protection:</tspan> Electronic Lid Safety Lock &amp; Auto-Brake Sensor</text>
      <text y="96"><tspan font-weight="700" fill="#0f172a">Acoustic &amp; Thermal:</tspan> Whisper Quiet (&lt;55 dB) + Low Chamber Heat</text>
      <text y="123"><tspan font-weight="700" fill="#0f172a">Control Interface:</tspan> Digital LCD/LED (Precise RPM &amp; RCF g-force)</text>
      <text y="150"><tspan font-weight="700" fill="#0f172a">Key Benefit:</tspan> Zero carbon dust, protects sample integrity, zero downtime</text>
    </g>

    <!-- Key Feature Box -->
    <rect x="24" y="280" width="497" height="110" rx="12" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
    <text x="40" y="305" fill="#047857" font-family="sans-serif" font-size="12" font-weight="700">✓ CLINICAL GOLD STANDARD FOR HEAVY WORKLOADS</text>
    <text x="40" y="328" fill="#334155" font-family="sans-serif" font-size="12">
      • Electronic lid lock refuses to spin if open; halts instantly if forced
    </text>
    <text x="40" y="350" fill="#334155" font-family="sans-serif" font-size="12">
      • Brushless motor lasts 5x longer with no carbon dust contamination
    </text>
    <text x="40" y="372" fill="#334155" font-family="sans-serif" font-size="12">
      • Digital RCF/RPM controls prevent sample hemolysis and tube breakage
    </text>

    <!-- Bottom Highlights -->
    <g transform="translate(24, 412)" font-family="sans-serif" font-size="11" fill="#64748b">
      <rect x="0" y="0" width="150" height="24" rx="6" fill="#f1f5f9" />
      <text x="75" y="16" fill="#047857" font-weight="700" text-anchor="middle">5,000+ RPM / RCF</text>

      <rect x="160" y="0" width="165" height="24" rx="6" fill="#f1f5f9" />
      <text x="242" y="16" fill="#047857" font-weight="700" text-anchor="middle">Lid Sensor Safety Lock</text>

      <rect x="335" y="0" width="162" height="24" rx="6" fill="#f1f5f9" />
      <text x="416" y="16" fill="#047857" font-weight="700" text-anchor="middle">Brushless BLDC Motor</text>
    </g>
  </g>

  <!-- Bottom Footer Accent Bar -->
  <rect x="0" y="${H - 50}" width="${W}" height="50" fill="#070c18" />
  <text x="40" y="${H - 20}" fill="#94a3b8" font-family="sans-serif" font-size="12" font-weight="600">
    Source: Medwise Technical Consulting • Biomedical Advisory &amp; Laboratory Supply Kenya
  </text>
  <text x="${W - 40}" y="${H - 20}" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="700" text-anchor="end">
    WhatsApp: +254 117 233 522  •  medwisetechnicalconsulting.co.ke
  </text>
</svg>
`;

async function generateImage() {
  const outDir = path.join(__dirname, '..', 'public', 'images', 'blog');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outPath = path.join(outDir, 'clinical-laboratory-centrifuge-kenya-guide.png');
  const buffer = Buffer.from(svg);
  await sharp(buffer)
    .png({ quality: 95 })
    .toFile(outPath);
  console.log('Successfully generated centrifuge banner at:', outPath);
}

generateImage().catch(console.error);
