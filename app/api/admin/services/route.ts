import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SERVICES_FILE = path.join(process.cwd(), 'content', 'services.json');

function readServicesData() {
  if (!fs.existsSync(SERVICES_FILE)) {
    return [];
  }
  const fileContents = fs.readFileSync(SERVICES_FILE, 'utf8');
  return JSON.parse(fileContents);
}

function writeServicesData(data: unknown) {
  const dir = path.dirname(SERVICES_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(SERVICES_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export async function GET() {
  try {
    const services = readServicesData();
    return NextResponse.json(services);
  } catch (error) {
    console.error('API Services GET Error:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newService = await request.json();
    const services = readServicesData();

    if (!newService.title || !newService.description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    const id = newService.id || newService.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    const serviceEntry = {
      ...newService,
      id,
      features: Array.isArray(newService.features) ? newService.features : [],
    };

    const existingIndex = services.findIndex((s: { id: string }) => s.id === id);
    if (existingIndex >= 0) {
      services[existingIndex] = serviceEntry;
    } else {
      services.push(serviceEntry);
    }

    writeServicesData(services);
    return NextResponse.json({ success: true, services });
  } catch (error) {
    console.error('API Services POST Error:', error);
    return NextResponse.json({ error: 'Failed to save service' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Service ID is required' }, { status: 400 });
    }

    let services = readServicesData();
    services = services.filter((s: { id: string }) => s.id !== id);

    writeServicesData(services);
    return NextResponse.json({ success: true, services });
  } catch (error) {
    console.error('API Services DELETE Error:', error);
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
