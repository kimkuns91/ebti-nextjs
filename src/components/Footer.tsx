'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard')) return null;
  return (
    <div className="border-t border-slate-200 bg-slate-100">
      <div className="container flex flex-col items-center justify-center gap-4 py-6">
        <Image src={'/images/logo.svg'} alt="logo" width={100} height={0} />
        <h2>Copyright © 2024 EBTI</h2>
      </div>
    </div>
  );
};

export default Footer;
