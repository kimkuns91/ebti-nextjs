import { educations } from '@/configs/questions';
import { ChangeEvent } from 'react';
import Input from './Input';

type UserInfoProps = {
  userInfoValue: { [key: string]: string };
  setUserInfoValue: (
    newValue:
      | { [key: string]: string }
      | ((prevState: { [key: string]: string }) => { [key: string]: string })
  ) => void;
};

const UserInfo = ({ userInfoValue, setUserInfoValue }: UserInfoProps) => {
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfoValue({ ...userInfoValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-6">
        <label className="text-lg font-semibold" htmlFor="name">
          성함
        </label>
        <Input
          id="name"
          name="name"
          value={userInfoValue['name'] || ''}
          onChange={handleValue}
          readOnly
        />
      </div>
      <div className="flex flex-col gap-6">
        <label className="text-lg font-semibold" htmlFor="birth">
          생년월일
        </label>
        <Input
          id="birth"
          name="birth"
          value={userInfoValue['birth'] || ''}
          onChange={handleValue}
        />
      </div>
      <div className="flex flex-col gap-6">
        <label className="text-lg font-semibold" htmlFor="email">
          이메일
        </label>
        <Input
          id="email"
          name="email"
          value={userInfoValue['email'] || ''}
          onChange={handleValue}
          readOnly
        />
      </div>
      <div className="flex flex-col gap-6">
        <label className="text-lg font-semibold" htmlFor="birth">
          SNS
        </label>
        <Input
          id="sns"
          name="sns"
          value={userInfoValue['sns'] || ''}
          onChange={handleValue}
        />
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-lg font-semibold">학력</p>
        <div className="grid grid-cols-4 gap-4">
          {educations.map((education, index) => (
            <div key={index} className="flex gap-2">
              <input
                id={education}
                type="radio"
                name="education"
                value={education}
                onChange={handleValue}
                checked={userInfoValue['education'] === education}
              />
              <label htmlFor={education}>{education}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <label className="text-lg font-semibold" htmlFor="major">
          전공
        </label>
        <Input
          id="major"
          name="major"
          value={userInfoValue['major'] || ''}
          onChange={handleValue}
        />
      </div>
    </div>
  );
};
export default UserInfo;
