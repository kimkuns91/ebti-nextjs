import Coupon from '@/libs/models/coupon.model';
import { connectDB } from '@/libs/mongodb';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  await connectDB();
  try {
    const body = await request.json();
    let { coupon, count, activated } = body;

    if (!coupon) {
      coupon = uuidv4();
    }

    const existCoupon = await Coupon.findOne({ coupon });
    if (existCoupon) {
      return NextResponse.json(
        {
          message: '이미 존재하는 쿠폰 명입니다.',
        },
        {
          status: 409,
        }
      );
    }
    
    const newCoupon = new Coupon({
      coupon,
      count,
      activated,
    });

    await newCoupon.save();

    return NextResponse.json(
      {
        message: '쿠폰 발행이 완료되었습니다.',
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.error();
  }
}
