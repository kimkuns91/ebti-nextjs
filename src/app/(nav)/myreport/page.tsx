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
      <table className="w-full table-auto">
        <thead className="text-left">
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
          <tr>
            <td>2024년 1월 10일 5:24 오후</td>
            <td>IDCE 뒤에있는 혁신자</td>
            <td>혁신자 (새로움을 발견하고 다름을 융합)</td>
            <td>좌뇌 (32, 0)</td>
            <td>결합, 검색, 평가</td>
            <td>보고서 보러가기</td>
          </tr>
          {data.map((item) => (
            <tr key={item._id}>
              <td>
                {format(new Date(item.createdAt), 'yyyy년 M월 d일 HH:mm')}
              </td>
              <td>
                {typeOfEntrepreneur(item)}
              </td>
              <td>혁신자 (새로움을 발견하고 다름을 융합)</td>
              <td>좌뇌 (32, 0)</td>
              <td>결합, 검색, 평가</td>
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
