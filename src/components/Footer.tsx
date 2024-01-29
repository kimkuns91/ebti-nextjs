'use client';

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard')) return null;
  return (
    <div className="border-t border-slate-200">
      <div className="container flex items-center justify-center py-8">
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default Footer;
