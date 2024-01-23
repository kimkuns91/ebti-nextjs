import LoginForm from '@/components/LoginForm';
import { authOptions } from '@/libs/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect('/');
  return <LoginForm />;
}
