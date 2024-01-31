'use client';

import { cn } from '@/utils/style';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navigation = [
  // { name: '홈', href: '/dashboard', icon: '🏠' },
  { name: '유저', href: '/dashboard/user', icon: '👤' },
  { name: '리포트', href: '/dashboard/report', icon: '📊' },
  { name: '쿠폰', href: '/dashboard/coupon', icon: '🎫' },
];

const SideNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex h-full w-64 flex-col bg-gray-800 p-4 py-8">
      <Link href="/">
        <Image
          className="pl-2"
          src={'/images/logo.svg'}
          alt="logo"
          width={110}
          height={0}
        />
      </Link>
      <ul className="mt-6">
        {navigation.map((item) => (
          <li
            key={item.name}
            className={cn(
              pathname === item.href
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'flex cursor-pointer items-center rounded-md px-3 py-4 text-sm font-medium'
            )}
            onClick={() => {
              router.push(item.href);
            }}
          >
            <span className="mr-3">{item.icon}</span>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavBar;
