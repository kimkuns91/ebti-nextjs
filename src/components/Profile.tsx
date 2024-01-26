'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ProfileProps {
  imageUrl: string;
}

const Profile = ({ imageUrl }: ProfileProps) => {
  const router = useRouter();
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState('pedro');

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
          className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[120px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
          sideOffset={10}
        >
          <DropdownMenu.Item
            onClick={() => {
              router.push('/mypage');
            }}
            className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200 data-[disabled]:pointer-events-none"
          >
            마이페이지
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => {
              router.push('/payment');
            }}
            className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200 data-[disabled]:pointer-events-none"
          >
            거래내역
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="bg-violet6 m-[5px] h-[1px] border" />
          <DropdownMenu.Item
            onClick={() => {
              signOut();
            }}
            className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200 data-[disabled]:pointer-events-none"
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
