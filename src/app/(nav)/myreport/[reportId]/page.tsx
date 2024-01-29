'use client';

import { EBTI } from '@/types';
import { detailsOfEBTI, typeOfEntrepreneur } from '@/utils/ebti/ebti';
import axios from 'axios';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type MyReportByReportId = {
  reportId: string;
};

export default function MyReportByReportId({
  params,
}: {
  params: MyReportByReportId;
}) {
  const router = useRouter();
  const [data, setData] = useState<EBTI | null>(null);
  console.log(data);
  useEffect(() => {
    (async () => {
      const data = await axios.get(`/api/myreport/${params.reportId}`);
      if (!data) {
        router.push('/');
      }
      setData(data.data);
    })();
  }, [params.reportId]);

  if (!data) return null;

  return (
    <div>
      <div className="bg-[#7030a0] py-10">
        <div className="container">
          <h2 className="text-3xl font-bold text-white">
            EBTI 기업가 행동유형 검사
          </h2>
        </div>
      </div>
      <div className="container flex flex-col gap-10 py-10">
        <p>{data.name}</p>
        <p>{typeOfEntrepreneur(data.answerValue).type}</p>
        <div>
          <p>이름 : </p>
          <p>{data.name}</p>
        </div>
        <div>
          <p>진단 일시 : </p>
          <p>{format(new Date(data.createdAt), 'yyyy년 M월 d일 HH:mm')}</p>
        </div>
        <div>
          <p>직업 / 경력 / 전공 : </p>
          <p>
            {data.job} / {data.career}
          </p>
        </div>
        <div>
          <p>총계 : </p>
          <p>{detailsOfEBTI(data.answerValue).totalScore}</p>
        </div>
        <div>
          <p>자기 발견 : </p>
          <p>{detailsOfEBTI(data.answerValue).selfDiscovery}</p>
        </div>
        <div>
          <p>기업가 유형 : </p>
          <p>{detailsOfEBTI(data.answerValue).typeOfEntrepreneur}</p>
        </div>
        <div>
          <p>기업가 행동 유형 : </p>
          <p>
            {JSON.parse(
              detailsOfEBTI(data.answerValue).typeOfEntrepreneurBehavior
            )}
          </p>
        </div>
        <div>
          <p>외부 유형 : </p>
          <p>{detailsOfEBTI(data.answerValue).externalTypeOfEntrepreneur}</p>
        </div>
        <div>
          <p>핵심 역량 : </p>
          <p>{detailsOfEBTI(data.answerValue).mainAbility}</p>
        </div>
        <div>
          <p>역량 개발 방향: </p>
          <p>{detailsOfEBTI(data.answerValue).competencyDevelopmentDirection}</p>
        </div>
        <div>
          <p>기민성 단계: </p>
          <p>{detailsOfEBTI(data.answerValue).stageOfAgility}</p>
        </div>
        <div>
          <p>자기 인식: </p>
          <p>{detailsOfEBTI(data.answerValue).selfAwareness}</p>
        </div>
        <div>
          <p>사고 유형: </p>
          <p>{detailsOfEBTI(data.answerValue).accidentType}</p>
        </div>
        <div>
          <p>협업 유형: </p>
          <p>{detailsOfEBTI(data.answerValue).collaborationType}</p>
        </div>
        <div>
          <p>내부 유형: </p>
          <p>{detailsOfEBTI(data.answerValue).internalTypeOfEntrepreneur}</p>
        </div>
        <div>
          <p>강화 역량: </p>
          <p>{detailsOfEBTI(data.answerValue).weakAbility}</p>
        </div>
        <div>
          <p>진단 결과: </p>
          <p>{detailsOfEBTI(data.answerValue).diagnosticResults}</p>
        </div>
        <div>
          <p>종합 의견: </p>
          <p>{detailsOfEBTI(data.answerValue).generalOpinion}</p>
        </div>
        <h3>
          <span>{typeOfEntrepreneur(data.answerValue).desc}</span>유형
        </h3>
      </div>
    </div>
  );
}
