'use client';

import AnswerOptions from '@/components/AnswerOptions';
import { answers, questions } from '@/configs/questions';
import { useEffect, useState } from 'react';

export default function EBTI() {
  const [loading, setLoading] = useState(true);
  const [questionNum, setQuestionNum] = useState<number>(0);
  const [answerValue, setAnswerValue] = useState<number | null>(null);
  useEffect(() => {
    try {
      setLoading(true);
      const existingProgress = localStorage.getItem('progress');
      if (!existingProgress) return;
      setQuestionNum(Number(existingProgress));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleQuestions = (item: number) => {
    const questionHistory = localStorage.getItem('question');
    if (questionHistory) {
      return;
    }
    const q = [
      {
        questionNum,
        value: item,
      },
    ];
    localStorage.setItem('question', JSON.stringify(q));
  };
  const handlePrevProgress = () => {
    const prev = questionNum - 1;
    setQuestionNum(prev);
    localStorage.setItem('progress', `${prev}`);
  };

  const handleNextProgress = () => {
    const next = questionNum + 1;
    setQuestionNum(next);
    localStorage.setItem('progress', `${next}`);
  };

  if (loading) return null;

  return (
    <div className="container flex flex-col items-center justify-center gap-10">
      <h2 className="text-center text-2xl font-bold text-[#576071]">
        {questions[questionNum].question}
      </h2>
      <div className="flex items-center justify-center gap-6">
        <p className="text-2xl font-bold text-[#88619A]">아니다</p>
        {answers.map((answer, index) => (
          <AnswerOptions
            key={index}
            answer={answer}
            index={index}
            isSelected={answerValue === answer.value}
            onSelect={setAnswerValue}
          />
        ))}
        <p className="text-2xl font-bold text-[#33A474]">그렇다</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <button onClick={handlePrevProgress}>이전</button>

        <button onClick={handleNextProgress}>다음</button>
      </div>
    </div>
  );
}
