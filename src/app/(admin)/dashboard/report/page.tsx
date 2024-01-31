'use client';

import { EBTI } from '@/types';
import axios from 'axios';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardReport() {
  const router = useRouter();
  const [reports, setReports] = useState<EBTI[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/myreport');
      setReports(response.data);
    })();
  }, []);

  if (!reports || reports.length === 0) return null;
  return (
    <div>
      <h2 className="text-3xl font-bold">리포트 목록</h2>
      <div className="mb-4 mt-8">
        <p className="pl-2 text-lg font-bold">
          총 {reports && reports.length} 건
        </p>
      </div>
      <table className="w-full table-auto border">
        <thead className="border-b py-8 text-left">
          <tr className="bg-slate-100">
            <th className="w-[33.3%] border-r px-4 py-2">설문 날짜</th>
            <th className="w-[33.3%] border-r px-4 py-2">이메일</th>
            <th className="w-[33.3%] border-r px-4 py-2">이름</th>
          </tr>
        </thead>
        <tbody>
          {reports &&
            reports.map((report) => (
              <tr
                key={report._id}
                className="cursor-pointer hover:bg-slate-200"
                onClick={() => {
                  router.push(`/dashboard/report/${report._id}`);
                }}
              >
                <td className="border px-4 py-2">
                  {format(new Date(report.createdAt), 'yyyy년 M월 d일 HH:mm')}
                </td>
                <td className="cursor-pointer border px-4 py-2">
                  {report.email}
                </td>
                <td className="border px-4 py-2">{report.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
