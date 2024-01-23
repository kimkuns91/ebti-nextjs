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
          className="rounded-full overflow-hidden w-[35px] h-[35px] inline-flex items-center justify-center border border-slate-50"
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
          className="min-w-[120px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={10}
        >
          <DropdownMenu.Item
            onClick={() => {
              router.push('/mypage');
            }}
            className="cursor-pointer hover:bg-slate-200 group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[10px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
          >
            마이페이지
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => {
              router.push('/payment');
            }}
            className="cursor-pointer hover:bg-slate-200 group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[10px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
          >
            거래내역
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="border h-[1px] bg-violet6 m-[5px]" />
          <DropdownMenu.Item
            onClick={() => {
              signOut();
            }}
            className="cursor-pointer hover:bg-slate-200 group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[10px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
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
