"use client";

import { signIn } from "next-auth/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await signIn("credentials", {
        email: emailRef.current?.value ?? "",
        password: passwordRef.current?.value ?? "",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">이메일</label>
        <input ref={emailRef} type="text" name="email" />
        <label htmlFor="password">비밀번호</label>
        <input ref={passwordRef} type="text" name="password" />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
