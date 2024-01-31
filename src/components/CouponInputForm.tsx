'use client';

import axios from 'axios';
import { useRef } from 'react';
import Button from './Button';
import Input from './Input';

type CouponInputFormProps = {
  setCoupon: (char: string) => void;
};

const CouponInputForm = ({ setCoupon }: CouponInputFormProps) => {
  const couponRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!couponRef.current?.value || couponRef.current?.value === '') {
      alert('쿠폰 번호를 입력해주세요.');
      return;
    }
    try {
      e.preventDefault();

      const response = await axios.post('/api/coupon', {
        coupon: couponRef.current?.value ?? '',
      });
      if (response.status === 201) {
        setCoupon(response.data.coupon);
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="container flex h-screen max-w-[440px] flex-col gap-4 pt-60">
      <h2 className="text-lg font-bold">쿠폰 번호를 입력해주세요</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Input ref={couponRef} type="text" name="coupon" />
        <Button type="submit">입력 완료</Button>
      </form>
    </div>
  );
};
export default CouponInputForm;
