import Link from 'next/link';

export default function CompletePage() {
  return (
    <div className="container flex flex-col items-center justify-center gap-20 pb-80 pt-20">
      <h2 className="text-3xl font-bold">EBTI 테스트가 완료 되었습니다.</h2>
      <Link href={'/myreport'} className="rounded-full bg-[#92d051] px-8 py-4 text-xl text-white">
        결과 보고서 보러 가기
      </Link>
    </div>
  );
}
