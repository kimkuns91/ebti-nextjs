"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Toolkit() {
  const router = useRouter();
  useEffect(() => {
    router.push('/ebti');
  }, []);
  return <div></div>;
}
