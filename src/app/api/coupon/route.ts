import Coupon from '@/libs/models/coupon.model';
import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  await connectDB();
  try {
    const result = await Coupon.find().sort({ createdAt: -1 });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  await connectDB();
  try {
    const body = await request.json();
    const { coupon } = body;
    console.log('coupon : ', coupon);

    const result = await Coupon.findOne({ coupon }).sort({ createdAt: -1 });
    if (!result) {
      return NextResponse.json(
        {
          message: '존재하지 않는 쿠폰 번호입니다.',
        },
        {
          status: 409,
        }
      );
    }
    return NextResponse.json(
      {
        message: '쿠폰이 인증되었습니다.',
        coupon,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.error();
  }
}
