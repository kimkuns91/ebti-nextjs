import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth/next"
import Link from "next/link";

const Header = ({session} : any) => {
  console.log(session)
  return (
    <header className="flex h-16 items-center justify-between border-b px-4 lg:h-20 lg:px-10">
      <Link href="/">
        <h1 className="text-3xl font-medium text-slate-600 lg:text-4xl">
          이비티아이 EBTI
        </h1>
      </Link>
      <div>
        {/* {session ? (
          <Link href={'/admin'}>{session.user.email}</Link>
        ) : (
          <>
            <Link href={'/login'}>로그인</Link>
            <Link href={'/regist'}>회원가입</Link>
          </>
        )} */}
      </div>
    </header>
  );
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context);

  return {
    props: {
      session
    }
  };
}

export default Header;
