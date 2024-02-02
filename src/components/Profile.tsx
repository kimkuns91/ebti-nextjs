'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProfileProps {
  role: string;
  name: string;
  imageUrl: string;
}

const Profile = ({ role, name, imageUrl }: ProfileProps) => {
  const router = useRouter();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="inline-flex size-[35px] items-center justify-center overflow-hidden rounded-full border border-slate-50"
          aria-label="Customise options"
        >
          <Image
            src={imageUrl}
            width={0}
            height={0}
            sizes="100vw"
            alt="userIcon"
            className="h-auto w-full"
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-20 min-w-[120px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
          sideOffset={10}
        >
          <DropdownMenu.Label className="group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[14px] font-bold leading-none outline-none">
            {name} 님
          </DropdownMenu.Label>
          <DropdownMenu.Separator className="m-[5px] h-[1px] border" />
          {role === 'admin' && (
            <DropdownMenu.Item
              onClick={() => {
                router.push('/dashboard');
              }}
              className="group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200"
            >
              대시보드
            </DropdownMenu.Item>
          )}
          <DropdownMenu.Item
            onClick={() => {
              router.push('/mypage');
            }}
            className="group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200"
          >
            마이페이지
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => {
              router.push('/mypage');
            }}
            className="group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200"
          >
            내 보고서
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => {
              router.push('/payment');
            }}
            className="group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200"
          >
            거래내역
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="m-[5px] h-[1px] border" />
          <DropdownMenu.Item
            onClick={() => {
              signOut();
            }}
            className="group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200"
          >
            로그아웃
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
export default Profile;
