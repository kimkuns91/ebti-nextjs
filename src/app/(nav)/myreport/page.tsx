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
  // console.log(data);
  useEffect(() => {
    if (status !== 'authenticated') {
      alert('로그인이 필요한 서비스 입니다.');
      router.push('/login');
    }
    (async () => {
      const result = await axios.post('/api/myreport', {
        email: session?.user?.email,
      });
      // console.log(result.data);

      setData(result.data);
    })();
  }, []);
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
                {typeOfEntrepreneur(item).type} {typeOfEntrepreneur(item).desc}
              </td>
              <td>{typeOfEntrepreneur(item).descOfType}</td>
              <td>
                {typeOfEntrepreneur(item).Dd + typeOfEntrepreneur(item).Ii >
                typeOfEntrepreneur(item).Cc + typeOfEntrepreneur(item).Ee
                  ? '좌뇌'
                  : '우뇌'}{' '}
                ({typeOfEntrepreneur(item).Dd + typeOfEntrepreneur(item).Ii},{' '}
                {typeOfEntrepreneur(item).Cc + typeOfEntrepreneur(item).Ee})
              </td>
              <td>{typeOfEntrepreneur(item).mainAbility}</td>
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
