'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import InputDate from '@/components/InputDate';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DashboardCoupon() {
  const router = useRouter();

  const [coupon, setCoupon] = useState<string>('');
  const [count, setCount] = useState<number>(1);
  const [limited, setLimited] = useState<boolean>(true);
  const [activated, setActivated] = useState<boolean>(true);
  const [expired, setExpired] = useState<boolean>(false);
  const [expiredAt, setExpiredAt] = useState<Date>(new Date());
  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/coupon/addition', {
        coupon,
        count,
        limited,
        activated,
        expired,
        expiredAt,
      });
      console.log(response)
      // if (response.status === 201) {
      //   alert(response.data.message);
      //   router.push('/dashboard/coupon');
      // }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container flex max-w-[440px] flex-col gap-4 py-20">
      <h2 className="text-lg font-bold">쿠폰 추가</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <label htmlFor="coupon">쿠폰명</label>
        <Input
          type="text"
          name="coupon"
          placeholder="쿠폰명을 입력해주세요"
          onChange={(e) => {
            setCoupon(e.target.value);
          }}
          value={coupon}
        />
        <div className="flex gap-2">
          <label htmlFor="limited">수량 제한</label>
          <input
            type="radio"
            name="limited"
            id="limited"
            checked={limited === true}
            onChange={() => {
              setLimited(!limited);
            }}
          />
          <label htmlFor="unlimited">무제한 쿠폰</label>
          <input
            type="radio"
            name="limited"
            id="unlimited"
            checked={limited === false}
            onChange={() => {
              setLimited(!limited);
            }}
          />
        </div>
        {limited && (
          <>
            <label htmlFor="count">발행수량</label>
            <Input
              type="number"
              name="count"
              onChange={(e) => {
                setCount(Number(e.target.value));
              }}
              value={count}
            />
          </>
        )}
        <div className="flex items-center gap-2">
          <label htmlFor="expire">쿠폰 만료일 설정</label>
          <input
            type="checkbox"
            name="expire"
            id="expire"
            onChange={() => setExpired(!expired)}
            checked={expired}
          />
        </div>
        {expired && (
          <>
            <label htmlFor="expiredAt">쿠폰 만료일</label>
            <InputDate
              selectedDate={expiredAt}
              setSelectedDate={setExpiredAt}
            />
          </>
        )}
        <div className="flex items-center justify-start gap-2">
          <label htmlFor="activated">쿠폰 활성화 여부</label>
          <input
            type="checkbox"
            id="activated"
            name="activated"
            onChange={() => {
              setActivated(!activated);
            }}
            checked={activated}
          />
        </div>
        <Button onClick={handleSubmit}>쿠폰 발행</Button>
      </form>
    </div>
  );
}
