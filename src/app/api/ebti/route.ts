import Coupon from '@/libs/models/coupon.model';
import EBTI from '@/libs/models/ebti.model';
import Userinfo from '@/libs/models/userinfo.model';
import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { coupon, id, userInfoValue, userJobValue, answerValue } = body;

    const verifyCoupon = await Coupon.findOne({ coupon }).sort({
      createdAt: -1,
    });

    if (verifyCoupon.type !== 'infinite') {
      await Coupon.findOneAndUpdate(
        { coupon },
        { $inc: { count: -1 } },
        {
          new: true,
          sort: { createdAt: -1 },
        }
      );
    }

    const newEBTI = new EBTI({
      userId: id,
      name: userInfoValue.name,
      birth: userInfoValue.birth,
      email: userInfoValue.email,
      sns: userInfoValue.sns,
      education: userInfoValue.education,
      major: userInfoValue.major,
      job: userJobValue.job,
      jobSatisfaction: userJobValue.jobSatisfaction,
      task: userJobValue.task,
      career: userJobValue.career,
      answerValue: JSON.parse(answerValue),
    });
    await newEBTI.save();

    const newUserinfo = new Userinfo({
      userId: id,
      name: userInfoValue.name,
      birth: userInfoValue.birth,
      email: userInfoValue.email,
      sns: userInfoValue.sns,
      education: userInfoValue.education,
      major: userInfoValue.major,
      job: userJobValue.job,
      jobSatisfaction: userJobValue.jobSatisfaction,
      task: userJobValue.task,
      career: userJobValue.career,
    });
    await newUserinfo.save();

    return NextResponse.json(
      {
        message: '모든 테스트가 성공적으로 완료되었습니다.',
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.error();
  }
}
