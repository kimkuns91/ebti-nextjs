export type SignInWithCredentialsParams = {
  email: string;
  password: string;
};

export type UserInfo = {
  name: string;
  email: string;
  password: string;
};

export type EBTI = {
  _id: string;
  name: string;
  birth: string;
  email: string;
  sns: string;
  education: string;
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
