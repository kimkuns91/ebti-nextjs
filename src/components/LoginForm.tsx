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

      const res = await signIn('credentials', {
        email: emailRef.current?.value ?? '',
        password: passwordRef.current?.value ?? '',
        redirect: false
      });

      if (res && res.status === 401) {
        alert('아이디 혹은 비밀번호가 일치하지 않습니다!');
      } else {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container flex max-w-[440px] flex-col gap-4 py-20">
      <Image src={'/images/logo.svg'} alt="logo" width={130} height={0} />
      <h2 className="mt-4 text-lg font-bold leading-8">
        EBTI는 섬세한 기업가 유형 분석으로 <br /> 여러분의 삶에 깊이를 더하고,
        매일을 더욱 풍요롭게 만드는 든든한 파트너입니다.
      </h2>
      <div className="mt-8">
        <button
          className="flex w-full flex-row items-center justify-center gap-3 rounded-md bg-[#FEE500] px-5 py-3 font-medium"
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
        <p className="custom-border my-4 text-center text-[#919191]">
          또는 이메일로 로그인
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <label htmlFor="email">이메일</label>
        <Input ref={emailRef} type="text" name="email" />
        <label htmlFor="password">비밀번호</label>
        <Input ref={passwordRef} type="password" name="password" />
        <Button className='bg-[#00A1E9]' type="submit">로그인</Button>
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
