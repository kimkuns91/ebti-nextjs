'use client';

import EBTI from '@/components/EBTI';
import UserInfo from '@/components/UserInfo';
import UserJob from '@/components/UserJob';
import { questions } from '@/configs/questions';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { RefObject, createRef, useEffect, useRef, useState } from 'react';

export default function EBTIPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const questionRefs = useRef<RefObject<HTMLDivElement>[]>(
    questions.map(() => createRef())
  );

  const [progress, setProgress] = useState<number>(0);
  const [userInfoValue, setUserInfoValue] = useState<{ [key: string]: string }>(
    {}
  );

  const [userJobValue, setUserJobValue] = useState<{ [key: string]: string }>(
    {}
  );
  const [answerValue, setAnswerValue] = useState<{ [key: string]: number }>({});

  const scrollToQuestion = (questionIndex: number) => {
    if (questionRefs.current[questionIndex]?.current) {
      questionRefs.current[questionIndex]?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      } as ScrollIntoViewOptions);
    }
  };

  const handlePrevProgress = () => {
    if (progress === 0) return;
    setProgress(progress - 1);
  };

  const handleNextProgress = async () => {
    if (progress === 0) {
      if (
        !userInfoValue['name'] ||
        !userInfoValue['birth'] ||
        !userInfoValue['email'] ||
        !userInfoValue['sns'] ||
        !userInfoValue['education']
      ) {
        alert('모든 질문에 답해주세요.');
        return;
      }
      setProgress(progress + 1);
      return;
    }
    if (progress === 1) {
      if (
        !userJobValue['job'] ||
        !userJobValue['jobSatisfaction'] ||
        !userJobValue['task'] ||
        !userJobValue['career']
      ) {
        alert('모든 질문에 답해주세요.');
        return;
      }
      setProgress(progress + 1);
      return;
    }
    if (progress === 2) {
      let i = 0;
      for (i = 0; i < questions.length; i++) {
        if (!answerValue[questions[i].id]) {
          alert('모든 질문에 답해주세요.');
          scrollToQuestion(i);
          return;
        }
      }
      const response = await axios.post('/api/ebti', {
        id: session?.user.id,
        userInfoValue,
        userJobValue,
        answerValue : JSON.stringify(answerValue),
      });
      if (response.status === 201) {
        router.push('/ebti/complete');
      }
    }
    if (progress === 3) return;
  };

  useEffect(() => {
    if (session && status === 'authenticated') {
      setUserInfoValue({
        ...userInfoValue,
        name: session?.user?.name ?? '',
        email: session?.user?.email ?? '',
      });
    } else {
      alert('로그인이 필요한 서비스입니다.');
      router.push('/login');
    }
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center gap-10 py-10">
      {progress === 0 && (
        <UserInfo
          userInfoValue={userInfoValue}
          setUserInfoValue={setUserInfoValue}
        />
      )}
      {progress === 1 && (
        <UserJob
          userJobValue={userJobValue}
          setUserJobValue={setUserJobValue}
        />
      )}
      {progress === 2 && (
        <EBTI
          scrollToQuestion={scrollToQuestion}
          questionRefs={questionRefs.current}
          answerValue={answerValue}
          setAnswerValue={setAnswerValue}
        />
      )}
      <div className="flex w-full items-center justify-between py-6">
        <button
          className="rounded-full bg-[#88619A] px-8 py-4 text-xl text-white"
          style={{ opacity: progress === 0 ? 0.3 : 1 }}
          onClick={handlePrevProgress}
        >
          이전
        </button>
        <button
          className="rounded-full bg-[#88619A] px-8 py-4 text-xl text-white"
          onClick={handleNextProgress}
        >
          {progress === 2 ? '완료' : '다음'}
        </button>
      </div>
    </div>
  );
}
