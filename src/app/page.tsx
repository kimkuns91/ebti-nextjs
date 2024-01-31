import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="bg-[#FFE500] pb-24 pt-40">
        <div className="container flex flex-row items-end justify-center">
          <div className="flex-1">
            <Image
              src={'/images/MainImg.png'}
              alt="MainImg"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="box-border flex flex-1 flex-col px-8">
            <h3 className="mb-4 text-2xl font-bold leading-8">
              모든 세상의 변화는 자신으로부터 시작한다
              <br /> 자기다움, 자기다운 일, 자기다운 삶에 대해 통찰하다
            </h3>
            <h2 className="mb-4 text-3xl font-bold leading-6">
              DICE+ Entrepreneurs Action Sheet
            </h2>
            <Link href={'/ebti'}>
              <Image
                src={'/images/MainButton.png'}
                alt="MainButton"
                width={500}
                height={0}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black py-10 text-white">
        <div className="container">
          <h2 className="text-right text-lg">이비티아이는 MISSION</h2>
          <p className="text-right font-En text-lg">
            Helping people predict the future and choose happiness for a good
            life
          </p>
          <p className="text-right text-lg">
            사람들의 좋은 삶을 위해 미래를 예측하고 행복을 선택하도록 돕습니다.
          </p>
          <div className="py-20">
            <div className="mb-10 flex">
              <div className="box-border flex flex-1 flex-col items-center justify-center px-20">
                <Image
                  src={'/images/ShapeType01.png'}
                  alt="ShapeType01"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="box-border flex flex-1 flex-col items-center justify-center px-20">
                <Image
                  src={'/images/ShapeType02.png'}
                  alt="ShapeType01"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="box-border flex flex-1 flex-col items-center justify-center px-20">
                <Image
                  src={'/images/ShapeType03.png'}
                  alt="ShapeType01"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="flex">
              <div className="box-border flex flex-1 flex-col items-center justify-center">
                <p className="text-lg font-medium">Be Yourself</p>
              </div>
              <div className="box-border flex flex-1 flex-col items-center justify-center">
                <p className="text-lg font-semibold">Collaboration Platform</p>
              </div>
              <div className="box-border flex flex-1 flex-col items-center justify-center">
                <p className="text-lg font-semibold">Learning Programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
