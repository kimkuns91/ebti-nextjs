import { answers } from '@/configs/questions';
import { forwardRef } from 'react';
import AnswerOptions from './AnswerOptions';

type QuestionProps = {
  question: {
    id: string;
    question: string;
  };
  answerValue: { [key: string]: number };
  handleAnswerValue: ({
    id,
    value,
    questionIndex,
  }: {
    id: string;
    value: number;
    questionIndex: number;
  }) => void;
};

const Question = forwardRef<HTMLDivElement, QuestionProps>(
  function QuestionComponent(
    { question, answerValue, handleAnswerValue },
    ref
  ) {
    return (
      <div
        ref={ref}
        className="flex flex-col items-center justify-center gap-10 border-b py-20"
      >
        <h2 className="text-center text-2xl font-bold text-[#576071]">
          {question.question}
        </h2>
        <div className="flex items-center justify-center gap-6">
          <p className="text-2xl font-bold text-[#88619A]">아니다</p>
          {answers.map((answer, index) => (
            <AnswerOptions
              id={question.id}
              key={index}
              answer={answer}
              index={index}
              isSelected={answerValue[question.id] === answer.value}
              handleAnswerValue={handleAnswerValue}
            />
          ))}
          <p className="text-2xl font-bold text-[#33A474]">그렇다</p>
        </div>
      </div>
    );
  }
);
export default Question;
