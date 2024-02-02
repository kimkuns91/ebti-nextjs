import Coupon from '@/libs/models/coupon.model';
import { connectDB } from '@/libs/mongodb';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  await connectDB();
  try {
    const body = await request.json();
    const { coupon, count, limited, activated, expired, expiredAt } = body;

    const existCouponName = await Coupon.findOne({ coupon });

    // 이미 쿠폰명이 있을 때
    if (existCouponName) {
      return NextResponse.json(
        {
          message: '동일한 쿠폰 명이 존재합니다.',
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
    })

    // 수량 제한 쿠폰 일때
    if(limited){
      const couponCode = uuidv4();
      const newCoupon = new Coupon({
        coupon,
        count,
        activated,
      })
    }
    // 쿠폰 만료일 설정
    // 쿠폰 활성화 여부
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
