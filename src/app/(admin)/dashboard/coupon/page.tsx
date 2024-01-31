'use client';

import { Coupon } from '@/types';
import axios from 'axios';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardCoupon() {
  const router = useRouter();
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/coupon');
      setCoupons(response.data);
    })();
  }, []);
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <h2 className="text-3xl font-bold">쿠폰</h2>
        <button
          onClick={() => {
            router.push('/dashboard/coupon/add');
          }}
          className="rounded-full bg-[#00b0f0] px-6 py-3 text-lg font-bold text-white hover:opacity-70"
        >
          쿠폰 발행
        </button>
      </div>
      <div className="mb-4 mt-8">
        <p className="pl-2 text-lg font-bold">총 0건</p>
      </div>
      <table className="w-full table-auto border">
        <thead className="border-b py-8 text-left">
          <tr className="bg-slate-100">
            <th className="w-[15%] border-r px-4 py-2">쿠폰 코드</th>
            <th className="w-[15%] border-r px-4 py-2">쿠폰 발행 수량</th>
            <th className="w-[15%] border-r px-4 py-2">쿠폰 만료일</th>
            <th className="w-[10%] border-r px-4 py-2">활성화 여부</th>
            <th className="w-[15%] border-r px-4 py-2">사용자 당 한번 사용</th>
            <th className="w-[15%] border-r px-4 py-2">생성일</th>
            <th className="w-[15%] border-r px-4 py-2">수정일</th>
          </tr>
        </thead>
        <tbody>
          {coupons &&
            coupons.map((coupon) => (
              <tr
                key={coupon._id}
                className="cursor-pointer hover:bg-slate-200"
              >
                <td
                  onClick={() => {
                    router.push(`/dashboard/coupon/EBTI0128`);
                  }}
                  className="cursor-pointer border px-4 py-2"
                >
                  {coupon.coupon}
                </td>
                <td className="border px-4 py-2">{coupon.count}</td>
                <td className="border px-4 py-2">
                  {coupon.expiredAt
                    ? format(new Date(coupon.expiredAt), 'yyyy년 M월 d일 HH:mm')
                    : '-'}
                </td>
                <td className="border px-4 py-2">true</td>
                <td className="border px-4 py-2">true</td>
                <td className="border px-4 py-2">
                  {format(new Date(coupon.createdAt), 'yyyy년 M월 d일 HH:mm')}
                </td>
                <td className="border px-4 py-2">
                  {format(new Date(coupon.updatedAt), 'yyyy년 M월 d일 HH:mm')}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
