import { authOptions } from '@/libs/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import Profile from './Profile';

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="container flex h-16 items-center justify-between border-b lg:h-20">
      <Link href="/">
        <h1 className="text-3xl font-medium text-slate-600 lg:text-4xl">
          이비티아이 EBTI
        </h1>
      </Link>
      <div className="flex gap-6 items-center justify-center">
        {session && session.user ? (
          <>
            <p>{session.user.name} 님</p>
            <Link href={'/myreport'}>내 보고서</Link>
            <Profile imageUrl={session.user.image ?? '/images/noUser.webp'} />
          </>
        ) : (
          <>
            <Link href={'/login'}>로그인</Link>
            <Link href={'/regist'}>회원가입</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
