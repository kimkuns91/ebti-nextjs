'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Profile from './Profile';

const Header = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  if (pathname.startsWith('/dashboard')) return null;

  return (
    <header
      style={{
        backgroundColor:
          pathname === '/' ? '#FFE500' : pathname === '/labs' ? '#90D7FE' : 'inherit',
      }}
    >
      <div className="m-auto flex h-16 w-full max-w-[1280px] items-center justify-between lg:h-20">
        <Link href="/">
          <h1 className="text-3xl font-medium text-black lg:text-4xl">
            이비티아이 EBTI
          </h1>
        </Link>
        <div className="flex items-center justify-center gap-6">
          {session && session.user ? (
            <>
              <p>{session.user.name} 님</p>
              <Link href={'/myreport'}>내 보고서</Link>
              <Profile imageUrl={session.user.image ?? '/images/noUser.webp'} />
            </>
          ) : (
            <>
              <Link href={'/login'} className="text-lg">
                Login
              </Link>
              <Link href={'/regist'} className="text-lg">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
