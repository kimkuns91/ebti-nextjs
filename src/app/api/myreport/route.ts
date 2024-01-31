import EBTI from '@/libs/models/ebti.model';
import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  await connectDB();
  try {
    const resultData = await EBTI.find()
      .sort({ createdAt: -1 })
      .select('-password -profileImg');

    return NextResponse.json(resultData);
  } catch (error: any) {
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  await connectDB();
  try {
    const body = await request.json();

    const { userId } = body;

    const resultData = await EBTI.find({ userId }).sort({ createdAt: -1 });

    return NextResponse.json(resultData);
  } catch (error: any) {
    return NextResponse.error();
  }
}
