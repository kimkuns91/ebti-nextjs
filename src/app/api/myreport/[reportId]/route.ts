import EBTI from '@/libs/models/ebti.model';
import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { reportId: string } }
) {
  await connectDB();
  try {
    const { reportId } = params;
    console.log('reportId : ', reportId)
    const report = await EBTI.findOne({ _id : reportId})
    return NextResponse.json(report);
  } catch (error: any) {
    return NextResponse.error();
  }
}
