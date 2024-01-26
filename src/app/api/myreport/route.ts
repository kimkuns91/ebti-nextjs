import EBTI from '@/libs/models/ebti.model';
import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { email } = body;

    const resultData = await EBTI.find({ email }).sort({ createdAt: -1 });
    console.log(resultData);
    return NextResponse.json(resultData);
  } catch (error: any) {
    return NextResponse.error();
  }
}
