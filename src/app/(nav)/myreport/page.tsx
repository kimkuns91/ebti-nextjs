'use client';

import { EBTI } from '@/types';
import { typeOfEntrepreneur } from '@/utils/ebti/ebti';
import axios from 'axios';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
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
    <div className="container py-20">
      <h2 className="mb-8 text-2xl font-bold">내 보고서</h2>
      <table className="w-full table-auto">
        <thead className="border-b py-8 text-left">
          <tr>
            <th>검사 일시</th>
            <th>EBTI 유형</th>
            <th>기업가 유형</th>
            <th>사고 유형</th>
            <th>핵심 역량</th>
            <th>보고서</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>
                {format(new Date(item.createdAt), 'yyyy년 M월 d일 HH:mm')}
              </td>
              <td>
                {typeOfEntrepreneur(item.answerValue).type} {typeOfEntrepreneur(item.answerValue).desc}
              </td>
              <td>{typeOfEntrepreneur(item.answerValue).descOfType}</td>
              <td>
                {typeOfEntrepreneur(item.answerValue).Dd + typeOfEntrepreneur(item.answerValue).Ii >
                typeOfEntrepreneur(item.answerValue).Cc + typeOfEntrepreneur(item.answerValue).Ee
                  ? '좌뇌'
                  : '우뇌'}{' '}
                ({typeOfEntrepreneur(item.answerValue).Dd + typeOfEntrepreneur(item.answerValue).Ii},{' '}
                {typeOfEntrepreneur(item.answerValue).Cc + typeOfEntrepreneur(item.answerValue).Ee})
              </td>
              <td>{typeOfEntrepreneur(item.answerValue).mainAbility}</td>
              <td>
                <Link href={`/myreport/${item._id}`}>보고서 보러가기</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
