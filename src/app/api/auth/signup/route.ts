import User from '@/libs/models/user.model';
import { connectDB } from '@/libs/mongodb';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  await connectDB();
  try {
    const body = await request.json();
    const { email, name, password } = body;

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          message: '이미 가입된 이메일입니다.',
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: 'user',
      provider: 'credentials',
    });

    console.log(newUser)
    await newUser.save();

    return NextResponse.json(
      {
        message: '회원가입이 완료되었습니다.',
      },
      { status: 201 }
    );
  } catch (error) {
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
