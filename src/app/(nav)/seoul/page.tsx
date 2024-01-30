import Image from 'next/image';

export default function Seoul() {
  return (
    <div className="max-w-[1920px]">
      <Image
        src={'/images/EBTI-seoul.png'}
        alt="EBTI-collabo"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
