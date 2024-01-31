'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DashboardCoupon() {
  const router = useRouter();

  const [coupon, setCoupon] = useState<string>('');
  const [count, setCount] = useState<number>(1);
  const [activated, setActivated] = useState<boolean>(true);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/coupon/addition', {
        coupon,
        count,
        activated,
      });

      if (response.status === 201) {
        alert(response.data.message);
        router.push('/dashboard/coupon');
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container flex max-w-[440px] flex-col gap-4 py-20">
      <h2 className="text-lg font-bold">쿠폰 추가</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <label htmlFor="coupon">쿠폰 코드</label>
        <Input
          type="text"
          name="coupon"
          placeholder="미입력시 고유 번호로 자동 발행"
          onChange={(e) => {
            setCoupon(e.target.value);
          }}
          value={coupon}
        />
        <label htmlFor="count">발행수량</label>
        <Input
          type="number"
          name="count"
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
          value={count}
        />
        {/* <label htmlFor="expiredAt">쿠폰 만료일</label>
        <Input ref={expiredAtRef} type="text" name="expiredAt" /> */}
        <div className="flex items-center justify-start gap-2">
          <input
            type="checkbox"
            id="activated"
            name="activated"
            onChange={() => {
              setActivated(!activated);
            }}
            checked={activated}
          />
          <label htmlFor="activated">활성화 여부</label>
        </div>
        <Button onClick={handleSubmit}>쿠폰 발행</Button>
      </form>
    </div>
  );
}
