import { EmailData, sendMail } from '@/lib/utils/mail';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = (await req.json()) as EmailData;
  try {
    const emailData = await sendMail('New Contact', data);
    return NextResponse.json(emailData);
  } catch (e) {
    return NextResponse.json({ e }, { status: 500 });
  }
}
