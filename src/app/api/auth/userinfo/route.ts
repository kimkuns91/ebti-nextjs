import Userinfo from '@/libs/models/userinfo.model';
import { connectDB } from '@/libs/mongodb';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  await connectDB();
  try {
    const body = await request.json();
    const { userId } = body;

    const existUserinfo = await Userinfo.findOne({ userId }).sort({
      createdAt: -1,
    });

    if (!existUserinfo) {
      return NextResponse.json(
        {
          message: 'User Info가 없음',
        }
      );
    }

    return NextResponse.json(
      {
        setUserInfoValue: {
          name: existUserinfo.name,
          birth: existUserinfo.birth,
          email: existUserinfo.email,
          sns: existUserinfo.sns,
          education: existUserinfo.education,
          major: existUserinfo.major,
        },
        setUserJobValue: {
          job: existUserinfo.job,
          jobSatisfaction: existUserinfo.jobSatisfaction,
          task: existUserinfo.task,
          career: existUserinfo.career,
        },
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
