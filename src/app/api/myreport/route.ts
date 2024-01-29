import EBTI from '@/libs/models/ebti.model';
import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { userId } = body;
    console.log('userId : ', userId)
    const resultData = await EBTI.find({ userId }).sort({ createdAt: -1 });
    return NextResponse.json(resultData);
  } catch (error: any) {
    return NextResponse.error();
  }
}
