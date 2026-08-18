import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SETTINGS_FILE = path.join(process.cwd(), 'content', 'settings.json');

function readSettingsData() {
  if (!fs.existsSync(SETTINGS_FILE)) {
    return {
      siteTitle: 'Medwise Technical Consulting',
      siteDescription: 'Independent Biomedical Engineering Advisory & Equipment Calibration in Kenya.',
      contactEmail: 'info@medwise.co.ke',
      contactPhone: '+254 700 000 000',
      whatsappPhone: '+254 700 000 000',
      officeAddress: 'Nairobi, Kenya',
      emergencyHotline: '+254 711 000 000',
    };
  }
  const fileContents = fs.readFileSync(SETTINGS_FILE, 'utf8');
  return JSON.parse(fileContents);
}

function writeSettingsData(data: unknown) {
  const dir = path.dirname(SETTINGS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export async function GET() {
  try {
    const settings = readSettingsData();
    return NextResponse.json(settings);
  } catch (error) {
    console.error('API Settings GET Error:', error);
    return NextResponse.json({ error: 'Failed to fetch site settings' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedSettings = await request.json();
    writeSettingsData(updatedSettings);
    return NextResponse.json({ success: true, settings: updatedSettings });
  } catch (error) {
    console.error('API Settings PUT Error:', error);
    return NextResponse.json({ error: 'Failed to update site settings' }, { status: 500 });
  }
}
