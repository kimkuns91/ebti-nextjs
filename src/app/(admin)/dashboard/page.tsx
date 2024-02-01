"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      router.push('/dashboard/user');
    })();
  }, []);
  return <div>DashBoard</div>;
}
