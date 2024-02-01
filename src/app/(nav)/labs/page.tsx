import Image from 'next/image';

export default function Labs() {
  return (
    <div className="mx-auto mt-[-50px] max-w-[1920px] ">
      <Image
        src={'/images/EBTI-labs.png'}
        alt="EBTI-collabo"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
