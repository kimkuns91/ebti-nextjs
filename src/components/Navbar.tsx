import navConfig from '@/utils/navConfig';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container flex h-16 items-center gap-10 lg:h-20 ">
      {navConfig.map((nav, index) => (
        <Link href={nav.path} key={index}>
          {nav.title}
        </Link>
      ))}
    </div>
  );
};
export default Navbar;
