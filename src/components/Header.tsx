"use client";

import { GetServerSideProps, GetServerSidePropsContext } from "next";
import type { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 lg:h-20 lg:px-10">
      <Link href="/">
        <h1 className="text-3xl font-medium text-slate-600 lg:text-4xl">
          이비티아이 EBTI
        </h1>
      </Link>
      <div>
        {session && session.user ? (
          <Link href={"/mypage"}>{session.user.email}</Link>
        ) : (
          <>
            <Link href={"/login"}>로그인</Link>
            <Link href={"/regist"}>회원가입</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
