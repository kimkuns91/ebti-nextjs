import EBTI from '@/libs/models/ebti.model';
import { connectDB } from '@/libs/mongodb';
import { answerValueProps } from '@/types';
import { NextResponse } from 'next/server';

const EBTIResult = (answerValue: answerValueProps) => {
  const totalHappiness = () => {
    const totalScore =
      answerValue['H-01'] +
      answerValue['H-02'] +
      answerValue['H-03'] +
      answerValue['H-04'];
    if (totalScore >= 36) {
      return '매우 높음';
    }
    if (totalScore >= 32) {
      return '높음';
    }
    if (totalScore >= 28) {
      return '보통';
    }
    if (totalScore >= 24) {
      return '낮음';
    }
    return '매우 낮음';
  };
  console.log('행복감 총합계: ', totalHappiness());

  const comparisonOfHappiness = () => {
    if (
      answerValue['H-01'] + answerValue['H-02'] ===
      answerValue['H-03'] + answerValue['H-04']
    ) {
      return '자기 발견 = 자기 인식';
    }
    if (
      answerValue['H-01'] + answerValue['H-02'] >
      answerValue['H-03'] + answerValue['H-04']
    ) {
      return '자기 발견 > 자기 인식';
    }
    if (
      answerValue['H-01'] + answerValue['H-02'] <
      answerValue['H-03'] + answerValue['H-04']
    ) {
      return '자기 발견 < 자기 인식';
    }
  };

  console.log('행복감 비교: ', comparisonOfHappiness());

  const totalAgility = () => {
    const totalScore =
      answerValue['H-01'] +
      answerValue['H-02'] +
      answerValue['H-03'] +
      answerValue['H-04'] +
      answerValue['D-01'] +
      answerValue['D-02'] +
      answerValue['D-03'] +
      answerValue['D-04'] +
      answerValue['I-01'] +
      answerValue['I-02'] +
      answerValue['I-03'] +
      answerValue['I-04'] +
      answerValue['C-01'] +
      answerValue['C-02'] +
      answerValue['C-03'] +
      answerValue['C-04'] +
      answerValue['E-01'] +
      answerValue['E-02'] +
      answerValue['E-03'] +
      answerValue['E-04'];
    if (totalScore >= 180) {
      return '매우 높음';
    }
    if (totalScore >= 160) {
      return '높음';
    }
    if (totalScore >= 140) {
      return '보통';
    }
    if (totalScore >= 120) {
      return '낮음';
    }
    return '매우 낮음';
  };
  console.log('기민성 총계: ', totalAgility());

  const typeOfEntrepreneur = () => {
    const scores = {
      D:
        answerValue['D-01'] +
        answerValue['D-02'] +
        answerValue['D-03'] +
        answerValue['D-04'],
      I:
        answerValue['I-01'] +
        answerValue['I-02'] +
        answerValue['I-03'] +
        answerValue['I-04'],
      C:
        answerValue['C-01'] +
        answerValue['C-02'] +
        answerValue['C-03'] +
        answerValue['C-04'],
      E:
        answerValue['E-01'] +
        answerValue['E-02'] +
        answerValue['E-03'] +
        answerValue['E-04'],
    };
    // 우선순위를 정의하는 배열
    const priority = ['D', 'I', 'C', 'E'];
    const sortedScores = Object.entries(scores).sort((a, b) => {
      // 점수가 같다면 우선순위에 따라 정렬
      if (b[1] === a[1]) {
        return priority.indexOf(a[0]) - priority.indexOf(b[0]);
      }
      // 점수에 따라 정렬
      return b[1] - a[1];
    });
    return sortedScores.map((score) => score[0]).join(', ');
  };
  console.log('기업가 유형: ', typeOfEntrepreneur());

  console.log(
    'I 합계: ',
    answerValue['I-01'] +
      answerValue['I-02'] +
      answerValue['I-03'] +
      answerValue['I-04']
  );
  console.log(
    'C 합계: ',
    answerValue['C-01'] +
      answerValue['C-02'] +
      answerValue['C-03'] +
      answerValue['C-04']
  );
  console.log(
    'E 합계: ',
    answerValue['E-01'] +
      answerValue['E-02'] +
      answerValue['E-03'] +
      answerValue['E-04']
  );
  // makdPDF({ data: '안녕', imgs: null });
};

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { userInfoValue, userJobValue, answerValue } = body;
    console.log(userInfoValue, userJobValue, answerValue);
    const newEBTI = new EBTI({
      name: userInfoValue.name,
      birth: userInfoValue.birth,
      email: userInfoValue.email,
      sns: userInfoValue.sns,
      education: userInfoValue.education,
      job: userJobValue.job,
      jobSatisfaction: userJobValue.jobSatisfaction,
      task: userJobValue.task,
      career: userJobValue.career,
      'H-01': answerValue['H-01'],
      'H-02': answerValue['H-02'],
      'H-03': answerValue['H-03'],
      'H-04': answerValue['H-04'],
      'D-01': answerValue['D-01'],
      'D-02': answerValue['D-02'],
      'D-03': answerValue['D-03'],
      'D-04': answerValue['D-04'],
      'I-01': answerValue['I-01'],
      'I-02': answerValue['I-02'],
      'I-03': answerValue['I-03'],
      'I-04': answerValue['I-04'],
      'C-01': answerValue['C-01'],
      'C-02': answerValue['C-02'],
      'C-03': answerValue['C-03'],
      'C-04': answerValue['C-04'],
      'E-01': answerValue['E-01'],
      'E-02': answerValue['E-02'],
      'E-03': answerValue['E-03'],
      'E-04': answerValue['E-04'],
    });

    await newEBTI.save();

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
