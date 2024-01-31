export type SignInWithCredentialsParams = {
  email: string;
  password: string;
};

export type User = {
  _id: string;
  email: string;
  name: string;
  password: string;
  profileImg: string;
  role: string;
  provider: string;
  createdAt: string;
};

export type UserInfo = {
  _id: string;
  name: string;
  email: string;
  password: string;
};

export type Coupon = {
  _id: string;
  category: string;
  coupon: string;
  type: string;
  count?: number;
  owner?: string;
  activated: boolean;
  used?: boolean;
  expiredAt: string;
  createdAt: string;
  updatedAt: string;
};

export type EBTI = {
  _id: string;
  name: string;
  birth: string;
  email: string;
  sns: string;
  education: string;
  major: string;
  job: string;
  jobSatisfaction: string;
  task: string;
  career: string;
  answerValue: {
    'H-01': number;
    'H-02': number;
    'H-03': number;
    'H-04': number;
    'D-01': number;
    'D-02': number;
    'D-03': number;
    'D-04': number;
    'I-01': number;
    'I-02': number;
    'I-03': number;
    'I-04': number;
    'C-01': number;
    'C-02': number;
    'C-03': number;
    'C-04': number;
    'E-01': number;
    'E-02': number;
    'E-03': number;
    'E-04': number;
  };
  createdAt: string;
  updatedAt: string;
};

export type answerValueProps = {
  'H-01': number;
  'H-02': number;
  'H-03': number;
  'H-04': number;
  'D-01': number;
  'D-02': number;
  'D-03': number;
  'D-04': number;
  'I-01': number;
  'I-02': number;
  'I-03': number;
  'I-04': number;
  'C-01': number;
  'C-02': number;
  'C-03': number;
  'C-04': number;
  'E-01': number;
  'E-02': number;
  'E-03': number;
  'E-04': number;
};
