'use client';

import AnswerOptions from '@/components/AnswerOptions';
import { answers, questions } from '@/configs/questions';
import { RefObject, useEffect } from 'react';

type EBTIProps = {
  scrollToQuestion: (questionIndex: number) => void;
  questionRefs: RefObject<HTMLDivElement>[];
  answerValue: { [key: string]: number };
  setAnswerValue: (
    newValue:
      | { [key: string]: number }
      | ((prevState: { [key: string]: number }) => { [key: string]: number })
  ) => void;
};

const EBTI = ({
  scrollToQuestion,
  questionRefs,
  answerValue,
  setAnswerValue,
}: EBTIProps) => {
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
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex w-full flex-col">
      {questions.map((question, index) => (
        <div
          key={index}
          ref={questionRefs[index]}
          className="flex flex-col items-center justify-center gap-10 border-b py-20"
        >
          <h2 className="text-center text-2xl font-bold text-[#576071]">
            {question.question}
          </h2>
          <div className="flex items-center justify-center gap-6">
            <p className="text-2xl font-bold text-[#88619A]">아니다</p>
            {answers.map((answer, i) => (
              <AnswerOptions
                id={question.id}
                key={i}
                answer={answer}
                index={index}
                isSelected={answerValue[question.id] === answer.value}
                handleAnswerValue={handleAnswerValue}
              />
            ))}
            <p className="text-2xl font-bold text-[#33A474]">그렇다</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EBTI;
