import { careers, jobSatisfactions, tasks } from '@/configs/questions';
import { ChangeEvent } from 'react';
import Input from './Input';

type UserJobProps = {
  userJobValue: { [key: string]: string };
  setUserJobValue: (
    newValue:
      | { [key: string]: string }
      | ((prevState: { [key: string]: string }) => { [key: string]: string })
  ) => void;
};

const UserJob = ({ userJobValue, setUserJobValue }: UserJobProps) => {
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUserJobValue({ ...userJobValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-col gap-6">
        <label className="text-lg font-semibold" htmlFor="job">직업</label>
        <Input
          id="job"
          name="job"
          value={userJobValue['job'] || ''}
          onChange={handleValue}
        />
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-lg font-semibold">직업 만족도</p>
        <div className="grid grid-cols-5 gap-4">
          {jobSatisfactions.map((jobSatisfaction, index) => (
            <div key={index} className="flex gap-2">
              <input
                id={jobSatisfaction}
                type="radio"
                name="jobSatisfaction"
                value={jobSatisfaction}
                onChange={handleValue}
                checked={userJobValue['jobSatisfaction'] === jobSatisfaction}
              />
              <label htmlFor={jobSatisfaction}>{jobSatisfaction}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-lg font-semibold">직무</p>
        <div className="grid grid-cols-5 gap-4">
          {tasks.map((task, index) => (
            <div key={index} className="flex gap-2">
              <input
                id={task}
                type="radio"
                name="task"
                value={task}
                onChange={handleValue}
                checked={userJobValue['task'] === task}
              />
              <label htmlFor={task}>{task}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-lg font-semibold">경력</p>
        <div className="grid grid-cols-5 gap-4">
          {careers.map((career, index) => (
            <div key={index} className="flex gap-2">
              <input
                id={career}
                type="radio"
                name="career"
                value={career}
                onChange={handleValue}
                checked={userJobValue['career'] === career}
              />
              <label htmlFor={career}>{career}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserJob;
