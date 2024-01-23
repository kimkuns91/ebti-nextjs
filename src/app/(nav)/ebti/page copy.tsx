'use client';

import Question from '@/components/Question';
import UserInfo from '@/components/UserInfo';
import { questions } from '@/configs/questions';
import { RefObject, createRef, useEffect, useRef, useState } from 'react';

export default function EBTI() {
  const [progress, setProgress] = useState<number>(0);
  const [answerValue, setAnswerValue] = useState<{ [key: string]: number }>({});
  const questionRefs = useRef<RefObject<HTMLDivElement>[]>(
    questions.map(() => createRef())
  );

  const [prev, setPrev] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);

  const handleAnswerValue = ({
    id,
    value,
    questionIndex,
  }: {
    id: string;
    value: number;
    questionIndex: number;
  }) => {
    setAnswerValue({
      ...answerValue,
      [id]: value,
    });
    const nextQuestionIndex = questionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      scrollToQuestion(nextQuestionIndex);
    }
  };

  const handlePrevProgress = () => {
    if (progress === 0) return;
    setProgress(progress - 1);
  };

  const handleNextProgress = () => {
    if (progress === 5) return;
    setProgress(progress + 1);
  };

  const scrollToQuestion = (questionIndex: number) => {
    if (questionRefs.current[questionIndex]) {
      questionRefs.current[questionIndex]?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      } as ScrollIntoViewOptions);
    }
  };

  useEffect(() => {
    // 컴포넌트 마운트 시 첫 번째 질문으로 스크롤
    scrollToQuestion(0);
  }, []);

  if (progress === 0) {
    return (
      <div className="container flex flex-col items-center justify-center gap-10">
        <UserInfo />
        <div className="flex w-full items-center justify-between">
          <button onClick={handlePrevProgress} disabled={progress === 0}>
            이전
          </button>

          <button onClick={handleNextProgress}>다음</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container flex flex-col items-center justify-center gap-10">
      <div className="flex w-full flex-col">
        {questions
          // .slice((progress - 1) * 4, (progress - 1) * 4 + 4)
          .map((question, index: number) => (
            <Question
              ref={questionRefs.current[index]}
              key={index}
              question={question}
              answerValue={answerValue}
              handleAnswerValue={handleAnswerValue}
            />
          ))}
      </div>
      <div className="flex w-full items-center justify-between py-6">
        <button
          className="rounded-full bg-[#88619A] px-8 py-4 text-xl text-white"
          onClick={handlePrevProgress}
        >
          이전
        </button>

        <button
          className="rounded-full bg-[#88619A] px-8 py-4 text-xl text-white"
          onClick={handleNextProgress}
        >
          다음
        </button>
      </div>
    </div>
  );
}
