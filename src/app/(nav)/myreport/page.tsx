'use client';

import { EBTI } from '@/types';
import { typeOfEntrepreneur } from '@/utils/ebti/ebti';
import axios from 'axios';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MyReport() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [data, setData] = useState<EBTI[]>([]);

  useEffect(() => {
    if (status !== 'authenticated') {
      alert('로그인이 필요한 서비스 입니다.');
      router.push('/login');
    }
    (async () => {
      console.log('session userId : ', session?.user.id);
      const result = await axios.post('/api/myreport', {
        userId: session?.user.id,
      });
      // console.log(result.data);

      setData(result.data);
    })();
  }, [session, status]);

  return (
    <div className="container py-20 pt-60">
      <h2 className="mb-8 text-2xl font-bold">내 보고서</h2>
      <table className="w-full table-auto overflow-hidden rounded-md border">
        <thead className="border-b py-8 text-center">
          <tr className="bg-slate-100">
            <th className="border-r px-4 py-2">검사 일시</th>
            <th className="border-r px-4 py-2">EBTI 유형</th>
            <th className="border-r px-4 py-2">기업가 유형</th>
            <th className="border-r px-4 py-2">사고 유형</th>
            <th className="border-r px-4 py-2">핵심 역량</th>
            <th className="border-r px-4 py-2">보고서</th>
          </tr>
        </thead>
        <tbody className="border-b py-8 text-center">
          {data.map((item) => (
            <tr key={item._id}>
              <td className="border px-4 py-2">
                {format(new Date(item.createdAt), 'yyyy년 M월 d일 HH:mm')}
              </td>
              <td className="border px-4 py-2">
                {typeOfEntrepreneur(item.answerValue).type}{' '}
                {typeOfEntrepreneur(item.answerValue).desc}
              </td>
              <td className="border px-4 py-2">
                {typeOfEntrepreneur(item.answerValue).descOfType}
              </td>
              <td className="border px-4 py-2">
                {typeOfEntrepreneur(item.answerValue).Dd +
                  typeOfEntrepreneur(item.answerValue).Ii >
                typeOfEntrepreneur(item.answerValue).Cc +
                  typeOfEntrepreneur(item.answerValue).Ee
                  ? '좌뇌'
                  : '우뇌'}{' '}
                (
                {typeOfEntrepreneur(item.answerValue).Dd +
                  typeOfEntrepreneur(item.answerValue).Ii}
                ,{' '}
                {typeOfEntrepreneur(item.answerValue).Cc +
                  typeOfEntrepreneur(item.answerValue).Ee}
                )
              </td>
              <td className="border px-4 py-2">
                {typeOfEntrepreneur(item.answerValue).mainAbility}
              </td>
              <td
                onClick={() => {
                  router.push(`/myreport/${item._id}`);
                }}
                className="cursor-pointer border px-4 py-2 text-center font-semibold text-[#00A1E9] hover:opacity-70"
              >
                보고서 보러가기
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
