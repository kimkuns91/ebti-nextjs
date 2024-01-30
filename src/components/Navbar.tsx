'use client';

import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard')) return null;

  return (
    <div
      style={{
        backgroundColor:
          pathname === '/' ? '#FFE500' : pathname === '/labs' ? '#90D7FE' : 'inherit',
      }}
    >
      <div className="m-auto flex max-w-[1280px] items-start gap-10">
        <h2 className="font-En text-2xl font-medium leading-10">
          Entreprenueurial
          <br />
          Behavior
          <br />
          Type
          <br />
          Indicator
        </h2>
        {/* <div className="mt-2 flex w-full gap-10 border-t border-black pl-8 pt-4">
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
    </div>
  );
};
export default Navbar;
