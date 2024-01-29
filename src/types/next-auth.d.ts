import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    name: string;
    password: string;
    role: string;
    provider: string;
    profileImg: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
      provider: string;
      image: string;
    };
  }
}
