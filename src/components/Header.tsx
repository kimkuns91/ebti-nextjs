'use client';

import navConfig from '@/utils/navConfig';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
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
          pathname === '/'
            ? '#FFE500'
            : pathname === '/labs'
            ? '#90D7FE'
            : 'rgba(255, 255, 255, 0.0)',
      }}
      className="z-10"
    >
      <div className="m-auto flex w-full max-w-[1280px] items-center justify-between">
        <div className="relative mr-40 flex items-center justify-center">
          <Link href="/">
            <Image src={'/images/logo.svg'} alt="logo" width={130} height={0} />
          </Link>
          <h2 className="absolute left-0 top-14 font-En text-2xl font-medium leading-10">
            Entreprenueurial
            <br />
            Behavior
            <br />
            Type
            <br />
            Indicator
          </h2>
        </div>
        <div className="flex w-full items-center justify-between border-b border-black py-9">
          <div className="flex gap-10 text-xl">
            {navConfig.map((nav, index) => (
              <Link
                href={nav.path}
                key={index}
                className={`font-En hover:opacity-70 ${
                  pathname === nav.path ? 'font-bold' : ''
                }`}
              >
                {nav.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6">
            {session && session.user ? (
              <>
                {/* <p>{session.user.name} 님</p> */}
                <Link
                  href={'/myreport'}
                  className="text-lg font-semibold hover:opacity-70"
                >
                  내 보고서
                </Link>
                <Profile
                  name={session.user.name ?? ''}
                  imageUrl={session.user.image ?? '/images/noUser.webp'}
                />
              </>
            ) : (
              <>
                <Link
                  href={'/login'}
                  className="font-En text-lg font-semibold hover:opacity-70"
                >
                  Login
                </Link>
                <Link
                  href={'/regist'}
                  className="font-En text-lg font-semibold hover:opacity-70"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
        {/* <div className="flex w-full gap-10">
          {navConfig.map((nav, index) => (
            <Link
              href={nav.path}
              key={index}
              className={`font-En ${pathname === nav.path ? 'font-bold' : ''}`}
            >
              {nav.title}
            </Link>
          ))}
        </div> */}
      </div>
    </header>
  );
};

export default Header;
