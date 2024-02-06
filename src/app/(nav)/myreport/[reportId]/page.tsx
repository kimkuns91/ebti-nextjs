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
    categoryScores,
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
    collaborationTypeOfEntrepreneurBehavior,
    weakAbility,
    internalTypeOfEntrepreneur,
    diagnosticResults,
    generalOpinion,
    recentCollaborator,
    recentCollaboratorDesc,
    recentSimilarPerson,
    recentSimilarPersonDesc,
    whoCanHelpMe,
    whoCanHelpMeDesc,
    whoIPrefer,
    whoIPreferDesc,
  } = detailsOfEBTI(data.answerValue);

  return (
    <div className="py-32">
      <div ref={targetRef} className="container py-8">
        <div className="flex items-center justify-between rounded-full border-2 border-slate-700 bg-slate-200 px-12 py-6">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl font-bold text-slate-800">
              <span className="text-[#7030a0]">{data.name}</span> 님의 기업가
              행동 유형은
            </h3>
            <h3 className="text-3xl font-bold text-slate-800">
              {'"'}
              {desc}
            </h3>
            <div className="flex items-center gap-2">
              {type.split('').map((char, index) => (
                <ColoredCircle key={index} char={char} />
              ))}
            </div>
            <h3 className="mr-4 text-3xl font-bold text-slate-800">
              형{'"'} 입니다.
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
                {data.job} / {data.career} / {data.major ? data.major : '-'}
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
                {JSON.parse(collaborationTypeOfEntrepreneurBehavior)}
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
                {JSON.parse(generalOpinion)}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="my-20 flex gap-4">
          <div className="flex flex-[1] flex-col gap-8">
            <div className="flex items-center justify-center gap-8">
              <div className="flex flex-[1] items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#7030a0] text-white">
                  <p className="text-lg font-bold">H</p>
                </div>
                <p>행복감</p>
              </div>
              <div className="flex flex-[3.5] flex-col gap-4">
                <div className="flex items-center justify-center gap-4">
                  <p>자기발견</p>
                  <div className="flex-1">
                    <BarGraph
                      color={'#7030a0'}
                      statistics={Math.round(categoryScores.발견)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p>자기인식</p>
                  <div className="flex-1">
                    <BarGraph
                      color={'#7030a0'}
                      statistics={Math.round(categoryScores.인식)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8">
              <div className="flex flex-[1] items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#00B0F0] text-white">
                  <p className="text-lg font-bold">D</p>
                </div>
                <p>발견자형</p>
              </div>
              <div className="flex flex-[3.5] flex-col gap-4">
                <div className="flex items-center justify-center gap-4">
                  <p>탐색하기</p>
                  <div className="flex-1">
                    <BarGraph
                      color={'#00B0F0'}
                      statistics={Math.round(categoryScores.탐색)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p>검색하기</p>
                  <div className="flex-1">
                    <BarGraph
                      color={'#00B0F0'}
                      statistics={Math.round(categoryScores.검색)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8">
              <div className="flex flex-[1] items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#FFC100] text-white">
                  <p className="text-lg font-bold">D</p>
                </div>
                <p>혁신자형</p>
              </div>
              <div className="flex flex-[3.5] flex-col gap-4">
                <div className="flex items-center justify-center gap-4">
                  <p>연결하기</p>
                  <div className="flex-1">
                    <BarGraph
                      color={'#FFC100'}
                      statistics={Math.round(categoryScores.연결)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p>결합하기</p>
                  <div className="flex-1">
                    <BarGraph
                      color={'#FFC100'}
                      statistics={Math.round(categoryScores.결합)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8">
              <div className="flex flex-[1] items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#FF0000] text-white">
                  <p className="text-lg font-bold">D</p>
                </div>
                <p>창조자형</p>
              </div>
              <div className="flex flex-[3.5] flex-col gap-4">
                <div className="flex items-center justify-center gap-4">
                  <p>열정내기</p>
                  <div className="flex-1">
                    <BarGraph
                      color={'#FF0000'}
                      statistics={Math.round(categoryScores.열정)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p>용기내기</p>
                  <div className="flex-1">
                    <BarGraph
                      color={'#FF0000'}
                      statistics={Math.round(categoryScores.용기)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8">
              <div className="flex flex-[1] items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#92D051] text-white">
                  <p className="text-lg font-bold">D</p>
                </div>
                <p>균형자형</p>
              </div>
              <div className="flex flex-[3.5] flex-col gap-4">
                <div className="flex items-center justify-center gap-4">
                  <p>평가하기</p>
                  <div className="flex-1">
                    <BarGraph
                      color={'#92D051'}
                      statistics={Math.round(categoryScores.평가)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <p>판단하기</p>
                  <div className="flex-1">
                    <BarGraph
                      color={'#92D051'}
                      statistics={Math.round(categoryScores.판단)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-8 grid flex-[1] grid-cols-2 gap-4">
            <div className="relative box-border rounded-[30px] bg-[#ffe09b]">
              <p className="absolute left-4 top-4">
                {(categoryScores.탐색 * categoryScores.연결)}%
              </p>
              <div className="absolute bottom-0 right-0 flex size-1/2 items-center justify-center rounded-[20px] bg-[#ffc637]">
                {(categoryScores.검색 * categoryScores.결합)}%
              </div>
            </div>
            <div className="relative rounded-[30px] bg-[#ff9e95]">
              <p className="absolute right-4 top-4">
                {(categoryScores.열정 * categoryScores.연결)}%
              </p>
              <div className="absolute bottom-0 left-0 flex size-1/2 items-center justify-center rounded-[20px] bg-[#ff392f]">
                {(categoryScores.결합 * categoryScores.용기)}%
              </div>
            </div>
            <div className="relative rounded-[30px] bg-[#9ed9f8]">
              <p className="absolute bottom-4 left-4">
                {(categoryScores.탐색 * categoryScores.평가)}%
              </p>
              <div className="absolute right-0 top-0 flex size-1/2 items-center justify-center rounded-[20px] bg-[#5bb8f9]">
                {(categoryScores.검색 * categoryScores.판단)}%
              </div>
            </div>
            <div className="relative rounded-[30px] bg-[#cbe8ae]">
              <p className="absolute bottom-4 right-4">
                {(categoryScores.평가 * categoryScores.열정)}%
              </p>
              <div className="absolute left-0 top-0 flex size-1/2 items-center justify-center rounded-[20px] bg-[#9ed565]">
                {(categoryScores.판단 * categoryScores.용기)}%
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-10 grid grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4 border py-28">
            <p className="text-4xl font-bold text-slate-400">
              요즘 내가 협업할 사람
            </p>
            <p className="mb-4 text-2xl font-bold text-slate-400">
              {'('}혁신하게 만드는 사람, 도움을 줘야 하는 사람{')'}
            </p>
            <div className="flex items-center gap-2">
              {recentCollaborator.split('').map((char, index) => (
                <ColoredCircle key={index} char={char} />
              ))}
            </div>
            <p className="text-3xl font-bold">{recentCollaboratorDesc}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 border py-28">
            <p className="text-4xl font-bold text-slate-400">
              요즘 나와 비슷한 사람
            </p>
            <p className="mb-4 text-2xl font-bold text-slate-400">
              {'('}말하지 않아도 알 것 같은 사람{')'}
            </p>
            <div className="flex items-center gap-2">
              {recentSimilarPerson.split('').map((char, index) => (
                <ColoredCircle key={index} char={char} />
              ))}
            </div>
            <p className="text-3xl font-bold">{recentSimilarPersonDesc}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 border py-28">
            <p className="text-4xl font-bold text-slate-400">
              내 일을 도울 수 있는 사람
            </p>
            <p className="mb-4 text-2xl font-bold text-slate-400">
              {'('}말없이 도와주는 사람{')'}
            </p>
            <div className="flex items-center gap-2">
              {whoCanHelpMe.split('').map((char, index) => (
                <ColoredCircle key={index} char={char} />
              ))}
            </div>
            <p className="text-3xl font-bold">{whoCanHelpMeDesc}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 border py-28">
            <p className="text-4xl font-bold text-slate-400">
              요즘 내가 선호하는 사람
            </p>
            <p className="mb-4 text-2xl font-bold text-slate-400">
              {'('}대화가 잘 통하는 사람{')'}
            </p>
            <div className="flex items-center gap-2">
              {whoIPrefer.split('').map((char, index) => (
                <ColoredCircle key={index} char={char} />
              ))}
            </div>
            <p className="text-3xl font-bold">{whoIPreferDesc}</p>
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
