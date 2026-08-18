import { NextResponse } from 'next/server';

const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || 'medwise2026';

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();

    if (passcode === ADMIN_PASSCODE) {
      return NextResponse.json({
        success: true,
        token: 'medwise_admin_authenticated_session_token_2026',
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid admin passcode' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
