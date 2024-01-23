'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import Button from './Button';
import Input from './Input';

const LoginForm = () => {
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await signIn('credentials', {
        email: emailRef.current?.value ?? '',
        password: passwordRef.current?.value ?? '',
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container flex flex-col gap-4 max-w-[440px] py-20">
      <h2 className="text-lg font-bold">로그인</h2>
      <div>
        <button
          className="w-full rounded-md flex flex-row items-center justify-center gap-3 bg-[#FEE500] text-md px-5 py-3"
          onClick={() => signIn('kakao', { redirect: true, callbackUrl: '/' })}
        >
          <Image
            src={'/images/kakaoIcon.svg'}
            width={20}
            height={20}
            alt="kakaoIcon"
          />
          카카오로 1초 만에 시작하기
        </button>
      </div>
      <div>
        <p className="text-center text-[#919191] custom-border my-4">
          또는 이메일로 로그인
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <label htmlFor="email">이메일</label>
        <Input ref={emailRef} type="text" name="email" />
        <label htmlFor="password">비밀번호</label>
        <Input ref={passwordRef} type="text" name="password" />
        <Button type="submit">로그인</Button>
      </form>
      <Button
        className="bg-[#f2f2f2] text-[#5e5e5e] hover:bg-[#777]"
        onClick={() => {
          router.push('/regist');
        }}
      >
        이메일로 회원가입
      </Button>
    </div>
  );
};
export default LoginForm;
