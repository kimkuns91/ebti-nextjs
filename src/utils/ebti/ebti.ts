import { ebti, ebti_24 } from '@/configs/ebti';
import { answerValueProps } from '@/types';

export const typeOfEntrepreneur = (answerValue: answerValueProps) => {
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
  return {
    type,
    desc,
    descOfType,
    Dd,
    Ii,
    Cc,
    Ee,
    mainAbility,
    weakAbility,
  };
};

export const detailsOfEBTI = (answerValue: answerValueProps) => {
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

  const D = categoryScores.탐색 + categoryScores.평가;
  console.log(D);
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

  // 총계
  const totalScore = Object.values(categoryScores).reduce(
    (sum, value) => sum + value,
    0
  );
  // 자기 발견
  const selfDiscovery = categoryScores.발견 / 2;
  // 기업가 유형
  const priority = ['D', 'I', 'C', 'E'];
  const sortedScores = Object.entries(scores).sort((a, b) => {
    // 점수가 같다면 우선순위에 따라 정렬
    if (b[1] === a[1]) {
      return priority.indexOf(a[0]) - priority.indexOf(b[0]);
    }
    // 점수에 따라 정렬
    return b[1] - a[1];
  });
  const type = sortedScores.map((score) => score[0]).join('');

  const typeOfEntrepreneur = ebti
    .filter((item) => item.type === type[0])
    .map((item) => item.desc)[0];

  // 기업가 행동 유형

  const desc = ebti_24
    .filter((item) => item.type === type)
    .map((item) => item.desc);

  const typeOfEntrepreneurBehavior = JSON.stringify(
    `${typeOfEntrepreneur.slice(0, 3)} ${type} (${desc})`
  );
  // 외부 유형
  const externalTypeOfEntrepreneur = ebti
    .filter((item) => item.type === type[1])
    .map((item) => item.desc)[0]
    .slice(0, 3);
  // 핵심 역량
  const mainAbility = Object.entries(categoryScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((entry) => entry[0])
    .join(', ');
  // 역량 개발 방향
  const competencyDevelopmentDirection = `${type[0]} -> ${type[1]} -> ${type[2]} -> ${type[3]}`;
  // 기민성 단계
  const functionStageOfAgility = () => {
    if (totalScore >= 180) return '매우 높음';
    if (totalScore >= 160) return '높음';
    if (totalScore >= 140) return '보통';
    if (totalScore >= 120) return '낮음';
    return '매우 낮음';
  };
  const stageOfAgility = functionStageOfAgility();
  // 자기 인식
  const selfAwareness = categoryScores.인식 / 2;
  // 사고 유형
  const functionAccidentType = () => {
    if (Dd + Ii > Cc + Ee) return `좌뇌 (${Dd + Ii}, ${Cc + Ee})`;
    return `우뇌 (${Dd + Ii}, ${Cc + Ee})`;
  };
  const accidentType = functionAccidentType();
  // 협업 유형
  const contentOfEBTI = ebti_24.filter((item) => item.type === type)[0];
  const collaborationType = contentOfEBTI.collaborationType;
  // 내부 유형
  const internalTypeOfEntrepreneur = ebti
  .filter((item) => item.type === type[2])
  .map((item) => item.desc)[0]
  .slice(0, 3);
  // 강화 역량
  const weakAbility = Object.entries(categoryScores)
    .sort((a, b) => b[1] - a[1])
    .slice(7, 10)
    .map((entry) => entry[0])
    .join(', ');
  // 진단 결과
  const diagnosticResults = `${contentOfEBTI.feature}`
  // 종합 의견
  const generalOpinion = `현재 기민성 단계는 ${stageOfAgility}. 활력 에너지가 합니다. 주변 사람들과 긍정 에너지를 나누세요. 내부에 숨어 있는 발견자형 역량을 발현하고 혁신자형과의 협업을 통해 자신에게 부족한 역량에 대한 영감을 얻으세요. 혁신자형은 당신의 일을 더욱 활기차고 의미 있게 만드는 데 도움을 줄 것입니다.`
  return {
    totalScore,
    selfDiscovery,
    type,
    desc,
    typeOfEntrepreneur,
    typeOfEntrepreneurBehavior,
    stageOfAgility,
    selfAwareness,
    accidentType,
    externalTypeOfEntrepreneur,
    mainAbility,
    competencyDevelopmentDirection,
    collaborationType,
    weakAbility,
    internalTypeOfEntrepreneur,
    diagnosticResults,
    generalOpinion
  };
};
