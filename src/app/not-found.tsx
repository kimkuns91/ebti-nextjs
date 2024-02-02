import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="text-gray-600">페이지를 찾을 수 없습니다.</p>
        <Link
          href={'/'}
          className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
