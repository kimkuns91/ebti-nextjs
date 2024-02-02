'use client';

import ko from 'date-fns/locale/ko';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

type InputDateProps = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
};

const InputDate = ({ selectedDate, setSelectedDate }: InputDateProps) => {
  const [viewMonth, setViewMonth] = useState(new Date());

  const isSameMonth = (date: Date, viewDate: Date) => {
    return (
      date.getMonth() === viewDate.getMonth() &&
      date.getFullYear() === viewDate.getFullYear()
    );
  };

  const dayClassName = (date: Date) => {
    return !isSameMonth(date, viewMonth) ? 'other-month' : null;
  };
  return (
    <div>
      <DatePicker // DatePicker의 styled-component명
        className="flex items-center rounded-md border border-gray-300 p-2 transition-all hover:border-gray-400"
        locale={ko} //한글
        dateFormat="yyyy년 MM월 dd일"
        selected={selectedDate}
        minDate={new Date()}
        placeholderText="날짜 선택"
        closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
        onChange={(date: Date) => setSelectedDate(date)}
        onMonthChange={(date) => setViewMonth(date)}
        dayClassName={dayClassName}
      />
    </div>
  );
};

export default InputDate;
