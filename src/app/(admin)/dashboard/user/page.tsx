'use client';

import { User } from '@/types';
import axios from 'axios';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

export default function DashboardUser() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/user');
      setUsers(response.data);
    })();
  }, []);

  if (!users || users.length === 0) return null;

  return (
    <div>
      <h2 className="text-3xl font-bold">유저 목록</h2>
      <div className="mb-4 mt-8">
        <p className="pl-2 text-lg font-bold">총 {users && users.length} 건</p>
      </div>
      <table className="w-full table-auto border">
        <thead className="border-b py-8 text-left">
          <tr className="bg-slate-100">
            <th className="w-[20%] border-r px-4 py-2">이메일</th>
            <th className="w-[20%] border-r px-4 py-2">이름</th>
            <th className="w-[20%] border-r px-4 py-2">권한</th>
            <th className="w-[20%] px-4 py-2">가입 경로</th>
            <th className="w-[20%] px-4 py-2">가입일</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id} className="cursor-pointer  hover:bg-slate-200">
                <td className="cursor-pointer border px-4 py-2">
                  {user.email}
                </td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">
                  {user.role === 'user' ? '일반 회원' : '관리자'}
                </td>
                <td className="border px-4 py-2">
                  {user.role === 'credentials'
                    ? '이메일 가입'
                    : '카카오 로그인'}
                </td>
                <td className="border px-4 py-2">
                  {format(new Date(user.createdAt), 'yyyy년 M월 d일 HH:mm')}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
