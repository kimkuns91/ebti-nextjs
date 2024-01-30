import User from '@/libs/models/user.model';
import { connectDB } from '@/libs/mongodb';
import bcrypt from 'bcryptjs';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectDB();

        const userFound = await User.findOne({
          email: credentials?.email,
        }).select('+password');
        console.log(userFound);

        if (!userFound) throw new Error('Invalid credentials');

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          userFound.password
        );

        if (!passwordMatch) throw new Error('Invalid credentials');

        return userFound;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async signIn({ user, profile }) {
      if (profile) {
        user.name = profile.properties.nickname || user.name;
        user.profileImg = profile.properties.profile_image || user.profileImg;
        console.log('user : ', user);
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.profileImg = user.profileImg;
        token.provider = user.provider;
        token.role = user.role;
      }
      // console.log('token :', token);
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.image = token.profileImg as string;
        session.user.role = token.role as string;
      }
      // console.log('session :', session);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
