import 'next-auth';

declare module 'next-auth' {
  interface Profile {
    id: number;
    connected_at: string;
    properties: {
      nickname: string;
      profile_image?: string; // 640x640
      thumbnail_image?: string; // 110x110
    };
  }
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
