import { FaCheck } from 'react-icons/fa';

type AnswerOptionsProps = {
  id: string;
  answer: {
    value: number;
    scale: string; // 'scale' 속성 추가
    color: string; // 'color' 속성 추가
  };
  index: number;
  isSelected: boolean;
  handleAnswerValue: ({
    id,
    value,
    questionIndex,
  }: {
    id: string;
    value: number;
    questionIndex: number;
  }) => void; // 'onSelect' 타입 정의 개선
};

const AnswerOptions = ({
  id,
  answer: { value, scale, color },
  index,
  isSelected,
  handleAnswerValue,
}: AnswerOptionsProps) => {
  return (
    <div
      className="flex cursor-pointer items-center justify-center rounded-full border-2 text-xl text-white"
      style={{
        width: scale,
        height: scale,
        borderColor: color,
        backgroundColor: `${isSelected ? color : '#FFF'}`,
      }}
      onClick={() => handleAnswerValue({ id, value, questionIndex: index })}
      key={index}
    >
      {isSelected && <FaCheck />}
    </div>
  );
};

export default AnswerOptions;
