"use client";

import axios from "axios";
import { useRef } from "react";

export default function RegistPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      
      const response = await axios.post("/api/auth/signup", {
        email: emailRef.current?.value ?? "",
        name: nameRef.current?.value ?? "",
        password: passwordRef.current?.value ?? "",
      });

      if(response.status === 201){
        alert("회원가입 성공");
      }
    } catch (error : any) {
      alert(error.response.data.message)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">이메일</label>
        <input ref={emailRef} type="text" name="email" />
        <label htmlFor="name">이름</label>
        <input ref={nameRef} type="text" name="name" />
        <label htmlFor="password">비밀번호</label>
        <input ref={passwordRef} type="text" name="password" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
