import User from '@/libs/models/user.model';
import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    await connectDB();
    const allUsers = await User.find().sort({ createdAt: -1 });

    return NextResponse.json(allUsers);
  } catch (error: any) {
    return NextResponse.error();
  }
}
