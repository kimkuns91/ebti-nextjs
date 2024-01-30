'use client';

import BarGraph from '@/components/BarGraph';
import { pdfOptions } from '@/libs/pdfOptions';
import { EBTI } from '@/types';
import { detailsOfEBTI } from '@/utils/ebti/ebti';
import axios from 'axios';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { usePDF } from 'react-to-pdf';

type MyReportByReportId = {
  reportId: string;
};

const ColoredCircle = ({ char }: { char: string }) => {
  const getColor = (char: string) => {
    switch (char) {
      case 'C':
        return '#FF0000';
      case 'E':
        return '#92D051';
      case 'D':
        return '#00B0F0';
      case 'I':
        return '#FFC100';
      default:
        return '#7030a0'; // Default color
    }
  };

  return (
    <div
      className="flex size-10 items-center justify-center rounded-full text-white"
      style={{
        backgroundColor: getColor(char),
      }}
    >
      <p className="text-lg font-bold">{char}</p>
    </div>
  );
};

export default function MyReportByReportId({
  params,
}: {
  params: MyReportByReportId;
}) {
  const { toPDF, targetRef } = usePDF(pdfOptions);
  const router = useRouter();
  const [data, setData] = useState<EBTI | null>(null);

  useEffect(() => {
    (async () => {
      const data = await axios.get(`/api/myreport/${params.reportId}`);
      if (!data) {
        router.push('/');
      }
      setData(data.data);
    })();
  }, [params.reportId, router]);

  if (!data) return null;

  const {
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
    generalOpinion,
  } = detailsOfEBTI(data.answerValue);

  return (
    <div ref={targetRef} className="py-32">
      {/* <div className="bg-[#7030a0] py-10">
        <div className="container">
          <h2 className="text-3xl font-bold text-white">
            EBTI 기업가 행동유형 검사
          </h2>
        </div>
      </div> */}
      <div className="container py-8">
        <div className="flex items-center justify-between rounded-full border-2 border-slate-700 bg-slate-200 px-12 py-6">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl font-bold text-slate-800">
              <span className="text-[#7030a0]">{data.name}</span> 님의 기업가
              행동 유형은
            </h3>
            <div className="flex items-center gap-2">
              {type.split('').map((char, index) => (
                <ColoredCircle key={index} char={char} />
              ))}
            </div>
            <h3 className="mr-4 text-3xl font-bold text-slate-800">
              형 입니다.
            </h3>
          </div>
          <div
            className="flex flex-col items-center gap-1 hover:opacity-70"
            onClick={() => {
              toPDF();
            }}
          >
            <FaFileDownload className="float-right cursor-pointer text-3xl font-bold text-slate-800" />
            <p className="text-sm text-slate-400">PDF 다운로드</p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-purple-700 text-white">
              <p className="text-lg font-bold">H</p>
            </div>
            <p>행복감</p>
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex items-center justify-center gap-4">
                <p className="font-bold">자기 발견</p>
                <div className="flex-1">
                  <BarGraph color={'purple'} statistics={10} />
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <p className="font-bold">자기 인식</p>
                <div className="flex-1">
                  <BarGraph color={'purple'} statistics={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="mt-10 w-full table-auto border-t-2 border-black text-lg">
          <tbody>
            <tr>
              <td className="w-[15%] border py-4 text-center font-bold">
                이름
              </td>
              <td className="w-[35%] border pl-4 font-bold text-slate-500">
                {data.name}
              </td>
              <td className="w-[15%] border py-4 text-center font-bold">
                진단 일시
              </td>
              <td className="w-[35%] border pl-4 font-bold text-slate-500">
                {format(new Date(data.createdAt), 'yyyy년 M월 d일 HH:mm')}
              </td>
            </tr>
            <tr>
              <td className="border py-4 text-center font-bold" colSpan={1}>
                직업 / 경력 / 전공
              </td>
              <td className="border pl-4 font-bold text-slate-500" colSpan={3}>
                {data.job} / {data.career} /
              </td>
            </tr>
            <tr>
              <td className="border py-4 text-center font-bold">총계</td>
              <td className="border pl-4 font-bold text-slate-500">
                {totalScore}
              </td>
              <td className="border py-4 text-center font-bold">기민성 단계</td>
              <td className="border pl-4 font-bold text-slate-500">
                {stageOfAgility}
              </td>
            </tr>
            <tr>
              <td className="border py-4 text-center font-bold">자기 발견</td>
              <td className="border pl-4 font-bold text-slate-500">
                {selfDiscovery}
              </td>
              <td className="border py-4 text-center font-bold">자기 인식</td>
              <td className="border pl-4 font-bold text-slate-500">
                {selfAwareness}
              </td>
            </tr>
            <tr>
              <td className="border py-4 text-center font-bold">기업가 유형</td>
              <td className="border pl-4 font-bold text-slate-500">
                {typeOfEntrepreneur}
              </td>
              <td className="border py-4 text-center font-bold">사고 유형</td>
              <td className="border pl-4 font-bold text-slate-500">
                {accidentType}
              </td>
            </tr>
            <tr>
              <td className="border py-4 text-center font-bold">
                기업가 행동 유형
              </td>
              <td className="border pl-4 font-bold text-slate-500">
                {JSON.parse(typeOfEntrepreneurBehavior)}
              </td>
              <td className="border py-4 text-center font-bold">협업 유형</td>
              <td className="border pl-4 font-bold text-slate-500">
                {collaborationType}
              </td>
            </tr>
            <tr>
              <td className="border py-4 text-center font-bold">외부 유형</td>
              <td className="border pl-4 font-bold text-slate-500">
                {externalTypeOfEntrepreneur}
              </td>
              <td className="border py-4 text-center font-bold">내부 유형</td>
              <td className="border pl-4 font-bold text-slate-500">
                {internalTypeOfEntrepreneur}
              </td>
            </tr>
            <tr>
              <td className="border py-4 text-center font-bold">핵심 역량</td>
              <td className="border pl-4 font-bold text-slate-500">
                {mainAbility}
              </td>
              <td className="border py-4 text-center font-bold">강화 역량</td>
              <td className="border pl-4 font-bold text-slate-500">
                {weakAbility}
              </td>
            </tr>
            <tr>
              <td className="border py-4 text-center font-bold" colSpan={1}>
                역량 개발 방향
              </td>
              <td className="border pl-4 font-bold text-slate-500" colSpan={3}>
                {competencyDevelopmentDirection}
              </td>
            </tr>
            <tr>
              <td className="border py-4 text-center font-bold" colSpan={1}>
                진단 결과
              </td>
              <td
                className="border py-8 pl-4 font-bold leading-8 text-slate-500"
                colSpan={3}
              >
                {diagnosticResults}
              </td>
            </tr>
            <tr>
              <td className="border py-4 text-center font-bold" colSpan={1}>
                종합 의견
              </td>
              <td
                className="border py-8 pl-4 font-bold leading-8 text-slate-500"
                colSpan={3}
              >
                {generalOpinion}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="relative mt-10 grid grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4 border py-28">
            <p className="text-4xl font-bold text-slate-400">
              요즘 내가 협업할 사람
            </p>
            <p className="mb-4 text-2xl font-bold text-slate-400">
              {'('}혁신하게 만드는 사람, 도움을 줘야 하는 사람{')'}
            </p>
            <div className="flex items-center gap-2">
              {type.split('').map((char, index) => (
                <ColoredCircle key={index} char={char} />
              ))}
            </div>
            <p className="text-3xl font-bold">{desc}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 border py-28">
            <p className="text-4xl font-bold text-slate-400">
              요즘 나와 비슷한 사람
            </p>
            <p className="mb-4 text-2xl font-bold text-slate-400">
              {'('}말하지 않아도 알 것 같은 사람{')'}
            </p>
            <div className="flex items-center gap-2">
              {type.split('').map((char, index) => (
                <ColoredCircle key={index} char={char} />
              ))}
            </div>
            <p className="text-3xl font-bold">{desc}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 border py-28">
            <p className="text-4xl font-bold text-slate-400">
              내 일을 도울 수 있는 사람
            </p>
            <p className="mb-4 text-2xl font-bold text-slate-400">
              {'('}말없이 도와주는 사람{')'}
            </p>
            <div className="flex items-center gap-2">
              {type.split('').map((char, index) => (
                <ColoredCircle key={index} char={char} />
              ))}
            </div>
            <p className="text-3xl font-bold">{desc}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 border py-28">
            <p className="text-4xl font-bold text-slate-400">
              요즘 내가 선호하는 사람
            </p>
            <p className="mb-4 text-2xl font-bold text-slate-400">
              {'('}대화가 잘 통하는 사람{')'}
            </p>
            <div className="flex items-center gap-2">
              {type.split('').map((char, index) => (
                <ColoredCircle key={index} char={char} />
              ))}
            </div>
            <p className="text-3xl font-bold">{desc}</p>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-slate-400 bg-white p-12">
              <div className="flex items-center gap-2">
                {type.split('').map((char, index) => (
                  <ColoredCircle key={index} char={char} />
                ))}
              </div>
              <p className="text-3xl font-bold">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
