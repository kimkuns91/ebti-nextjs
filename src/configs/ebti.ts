export const ebti = [
  {
    type: 'D',
    desc: '발견자(새로운 기회를 잘 발견한다)',
  },
  {
    type: 'I',
    desc: '혁신자(서로 다름을 잘 결합한다)',
  },
  {
    type: 'C',
    desc: '창조자(선도적으로 헌신한다)',
  },
  {
    type: 'E',
    desc: '균형자(좋음을 잘 선별한다)',
  },
];

export const ebti_12 = [
  {
    type: 'D',
    desc: '서로 다름을 융합하고 새로움을 잘 발견하는 DI 유형',
    group: ['DICE', 'DIEC'],
  },
  {
    type: 'D',
    desc: '선도적으로 헌신하고 새로움을 잘 발견하는 DC 유형',
    group: ['DCIE', 'DCEI'],
  },
  {
    type: 'D',
    desc: '좋음을 잘 선별하고 새로움을 잘 발견하는 DE 유형',
    group: ['DEIC', 'DECI'],
  },
  {
    type: 'I',
    desc: '새로움을 잘 발견하고 서로 다름을 융합하는 ID 유형',
    group: ['IDCE', 'IDEC'],
  },
  {
    type: 'I',
    desc: '선도적으로 헌신하고 서로 다름을 융합하는 IC 유형',
    group: ['ICDE', 'ICED'],
  },
  {
    type: 'I',
    desc: '좋음을 잘 선별하고 서로 다름을 융합하는 IE 유형',
    group: ['IEDC', 'IECD'],
  },
  {
    type: 'C',
    desc: '새로움을 잘 발견하고 선도적으로 헌신하는 CD 유형',
    group: ['CDIE', 'CDEI'],
  },
  {
    type: 'C',
    desc: '서로 다름을 융합하고 선도적으로 헌신하는 CI 유형',
    group: ['CIDE', 'CIED'],
  },
  {
    type: 'C',
    desc: '좋음을 선별하고 선도적으로 헌신하는 CE 유형',
    group: ['CEDI', 'CEID'],
  },
  {
    type: 'E',
    desc: '새로움을 잘 발견하고 좋음을 선별하는 ED 유형',
    group: ['EDIC', 'EDCI'],
  },
  {
    type: 'E',
    desc: '선도적으로 헌신하고 좋음을 선별하는 EC 유형',
    group: ['ECDI', 'ECID'],
  },
  {
    type: 'E',
    desc: '서로 다름을 융합하고 좋음을 선별하는 EI 유형',
    group: ['EIDC', 'EICD'],
  },
];

export const ebti_24 = [
  {
    type: 'DICE',
    desc: '바른주의 발견자',
    feature:
      '서로 다른 것을 연결하고 새로운 것을 잘 찾는 발견자형 행동을 자주 한다.\n자기 내면에 창조자 감각이 숨어 있고 균형자 감각이 부족하다.\n사람들에게는 서로 다른 것을 연결하는 혁신자형으로 보인다.',
    collaborationType: 'ECID',
    collaborationDesc: '가치선별 균형자',
    collaborationTip: '평가와 판단으로 좋음을 선별할 때 도움을 받을 수 있음',
  },
  {
    type: 'DIEC',
    desc: '경험주의 발견자',
    feature:
      '서로 다른 것을 연결하고 새로운 것을 잘 찾는 발견자형 기업가 행동을 자주 한다.\n자기 내면에 균형자 감각이 숨어 있고 창조자 감각이 부족하다.\n사람들에게는 서로 다른 것을 연결하는 혁신자형으로 보인다.',
    collaborationType: 'CEID',
    collaborationDesc: '용기있는 창조자',
    collaborationTip: '열정과 용기로 선도적 헌신이 필요할 때 도움을 받을 수 있음',
  },
  {
    type: 'DCIE',
    desc: '기획하는 발견자',
    feature:
      '"선도적으로 헌신하고 새로운 것을 잘 찾는 발견자형 기업가 행동을 자주 한다.\n자기 내면에 혁신자 감각이숨어 있고 균형자 감각이 부족하다.\n사람들에게는 선도적으로 헌신하는 창조자형으로 보인다."',
    collaborationType: 'EICD',
    collaborationDesc: '판단귀재 균형자',
    collaborationTip: '평가와 판단으로 좋음을 선별할 떄 도움을 받을 수 있음',
  },
  {
    type: 'DCEI',
    desc: '트랜드 발견자',
    feature:
      '"서로 다른 것을 연결하고 새로운 것을 잘 찾는 발견자형 행동을 자주 한다.\n자기 내면에 균형자 감각이 숨어 있고 혁신자 감각이 부족하다.\n사람들에게는 선도적으로 헌신하는 창조자형으로 보인다."',
    collaborationType: 'IECD',
    collaborationDesc: '이종결합 혁신자',
    collaborationTip: '서로 다른 것을 연결하고 결합할 때 도움을 받을 수 있음',
  },
  {
    type: 'DEIC',
    desc: '일잘러 발견자',
    feature:
      '"서로 다른 것을 연결하고 새로운 것을 잘 찾는 발견자형 행동을 자주 한다.\n자기 내면에 혁신자 감각이 숨어 있고 창조자 감각이 부족하다.\n사람들에게는 좋음을 선별하는 균형자형으로 보인다."',
    collaborationType: 'CIED',
    collaborationDesc: '열정있는 창조자',
    collaborationTip: '열정과 용기로 선도적 헌신이 필요할 때 도움을 받을 수 있음',
  },
  {
    type: 'DECI',
    desc: '호기심현실 발견자',
    feature:
      '서로 다른 것을 연결하고 새로운 것을 잘 찾는 발견자형 행동을 자주 한다.\n자기 내면에 창조자 감각이 숨어 있고 혁신자 감각이 부족하다.\n사람들에게는 좋음을 선별하는 균형자형으로 보인다.',
    collaborationType: 'ICED',
    collaborationDesc: '신기방기 혁신자',
    collaborationTip: '서로 다른 것을 연결하고 결합할 때 도움을 받을 수 있음',
  },
  {
    type: 'IDCE',
    desc: '뒤에있는 혁신자',
    feature:
      '새로운 것을 잘 찾고 서로 다른 것을 융합하는 혁신자형 행동을 자주 한다.\n자기 내면에 창조자 감각이 숨어 있고 균형자 감각이 부족하다.\n사람들에게는 새로운 것을 잘 찾는 발견자형으로 보인다.',
    collaborationType: 'ECDI',
    collaborationDesc: '긍정하는 균형자',
    collaborationTip: '평가와 판단으로 좋음을 선별할 떄 도움을 받을 수 있음',
  },
  {
    type: 'IDEC',
    desc: '결과예측 혁신자',
    feature:
      '"새로운 것을 잘 찾고 서로 다른 것을 융합하는 혁신자형 행동을 자주 한다.\n자기 내면에 균형자 감각이 숨어 있고 창조자 감각이 부족하다.\n사람들에게는 새로운 것을 잘 찾는 발견자형으로 보인다."',
    collaborationType: 'CEDI',
    collaborationDesc: '신중대담 창조자',
    collaborationTip: '열정과 용기로 선도적 헌신이 필요할 때 도움을 받을 수 있음',
  },
  {
    type: 'ICDE',
    desc: '힙쿨스터 혁신자',
    feature:
      '"선도적으로 헌신하고 서로 다른 것을 융합하는 혁신자형 행동을 자주 한다.\n자기 내면에 발견자 감각이 숨어 있고 균형자 감각이 부족하다.\n사람들에게는 선도적으로 헌신하는 창조자형으로 보인다."',
    collaborationType: 'EDCI',
    collaborationDesc: '명랑새롬 균형자',
    collaborationTip: '평가와 판단으로 좋음을 선별할 때 도움을 받을 수 있음',
  },
  {
    type: 'ICED',
    desc: '신기방기 혁신자',
    feature:
      '"선도적으로 헌신하고 서로 다른 것을 융합하는 혁신자형 행동을 자주 한다.\n자기 내면에 균형자 감각이 숨어 있고 발견자 감각이 부족하다.\n사람들에게는 선도적으로 헌신하는 창조자형으로 보인다."',
    collaborationType: 'DECI',
    collaborationDesc: '호기심현실 발견자',
    collaborationTip: '탐색과 검색으로 새로운 기회를 발견 할 때 도움을 받을 수 있음',
  },
  {
    type: 'IEDC',
    desc: '균형찾는 혁신자',
    feature:
      '"좋음을 선별하고 서로 다른 것을 융합하는 혁신자형 행동을 자주 한다.\n자기 내면에 발견자 감각이 숨어 있고 창조자 감각이 부족하다.\n사람들에게는 좋음을 선별하는 균형자형으로 보인다."',
    collaborationType: 'CDEI',
    collaborationDesc: '열정호기심 창조자',
    collaborationTip: '열정과 용기로 선도적 헌신이 필요할 때 도움을 받을 수 있음',
  },
  {
    type: 'IECD',
    desc: '이종결합 혁신자',
    feature:
      '"좋음을 선별하고 서로 다름을 융합하는 혁신자형 행동을 자주 한다.\n자기 내면에 창조자 감각이 숨어 있고 발견자 감각이 부족하다.\n사람들에게는 좋음을 선별하는 균형자형으로 보인다."',
    collaborationType: 'DCEI',
    collaborationDesc: '트랜드 발견자',
    collaborationTip: '탐색과 검색으로 새로운 기회를 발견 할 때 도움을 받을 수 있음',
  },
  {
    type: 'CDIE',
    desc: '개척하는 창조자',
    feature:
      '"새로운 것을 잘 찾고 선도적으로 헌신하는 창조자형 행동을 자주 한다.\n자기 내면에 혁신자 감각이 숨어 있고 균형자 감각이 부족하다.\n사람들에게는 새로운 것을 잘 찾는 발견자형으로 보인다."',
    collaborationType: 'EIDC',
    collaborationDesc: '해법찾는 균형자',
    collaborationTip: '평가와 판단으로 좋음을 선별할 때 도움을 받을 수 있음',
  },
  {
    type: 'CDEI',
    desc: '열정호기심 창조자',
    feature:
      '"새로운 것을 잘 찾고 선도적으로 헌신하는 창조자형 행동을 자주 한다.\n자기 내면에 균형자 감각이 숨어 있고 혁신자 감각이 부족하다.\n사람들에게는 새로운 것을 잘 찾는 발견자형으로 보인다."',
    collaborationType: 'IEDC',
    collaborationDesc: '균형찾는 혁신자',
    collaborationTip: '서로 다른 것을 연결하고 결합할 때 도움을 받을 수 있음',
  },
  {
    type: '',
    desc: '',
    feature:
      '',
    collaborationType: '',
    collaborationDesc: '',
    collaborationTip: '',
  },
  {
    type: '',
    desc: '',
    feature:
      '',
    collaborationType: '',
    collaborationDesc: '',
    collaborationTip: '',
  },
  {
    type: '',
    desc: '',
    feature:
      '',
    collaborationType: '',
    collaborationDesc: '',
    collaborationTip: '',
  },
  {
    type: '',
    desc: '',
    feature:
      '',
    collaborationType: '',
    collaborationDesc: '',
    collaborationTip: '',
  },
  {
    type: '',
    desc: '',
    feature:
      '',
    collaborationType: '',
    collaborationDesc: '',
    collaborationTip: '',
  },
];
