import { ebti, ebti_24 } from '@/configs/ebti';
import { EBTI, answerValueProps } from '@/types';

const returnAnswerValue = (item: EBTI) => {
  const answerValue = {
    'H-01': item['H-01'],
    'H-02': item['H-02'],
    'H-03': item['H-03'],
    'H-04': item['H-04'],
    'D-01': item['D-01'],
    'D-02': item['D-02'],
    'D-03': item['D-03'],
    'D-04': item['D-04'],
    'I-01': item['I-01'],
    'I-02': item['I-02'],
    'I-03': item['I-03'],
    'I-04': item['I-04'],
    'C-01': item['C-01'],
    'C-02': item['C-02'],
    'C-03': item['C-03'],
    'C-04': item['C-04'],
    'E-01': item['E-01'],
    'E-02': item['E-02'],
    'E-03': item['E-03'],
    'E-04': item['E-04'],
  };
  return answerValue;
};

export const typeOfEntrepreneur = (item: EBTI) => {
  const answerValue: answerValueProps = returnAnswerValue(item);
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
  const categoryScores = {
    발견: answerValue['H-01'] + answerValue['H-02'],
    인식: answerValue['H-03'] + answerValue['H-04'],
    탐색: answerValue['D-01'] + answerValue['D-02'],
    검색: answerValue['D-03'] + answerValue['D-04'],
    연결: answerValue['I-01'] + answerValue['I-02'],
    결합: answerValue['I-03'] + answerValue['I-04'],
    열정: answerValue['C-01'] + answerValue['C-02'],
    용기: answerValue['C-03'] + answerValue['C-04'],
    평가: answerValue['E-01'] + answerValue['E-02'],
    판단: answerValue['E-03'] + answerValue['E-04'],
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

  const mainAbility = Object.entries(categoryScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((entry) => entry[0])
    .join(', ');
  const weakAbility = Object.entries(categoryScores)
    .sort((a, b) => b[1] - a[1])
    .slice(7, 9)
    .map((entry) => entry[0])
    .join(', ');
  const D = categoryScores.탐색 + categoryScores.평가;
  const d = categoryScores.검색 + categoryScores.판단;
  const Dd = D + d;
  const I = categoryScores.탐색 + categoryScores.연결;
  const i = categoryScores.검색 + categoryScores.결합;
  const Ii = I + i;
  const C = categoryScores.연결 + categoryScores.열정;
  const c = categoryScores.결합 + categoryScores.용기;
  const Cc = C + c;
  const E = categoryScores.열정 + categoryScores.평가;
  const e = categoryScores.용기 + categoryScores.판단;
  const Ee = E + e;
  // return 값들
  const type = sortedScores.map((score) => score[0]).join('');
  const descOfType = ebti
    .filter((item) => item.type === type[0])
    .map((item) => item.desc);
  const desc = ebti_24
    .filter((item) => item.type === type)
    .map((item) => item.desc);
  return { type, desc, descOfType, Dd, Ii, Cc, Ee, mainAbility, weakAbility };
};

export const totalHappiness = (answerValue: answerValueProps) => {
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

export const comparisonOfHappiness = (answerValue: answerValueProps) => {
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

export const totalAgility = (answerValue: answerValueProps) => {
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
