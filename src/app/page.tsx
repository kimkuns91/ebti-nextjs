"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <div>
      <pre className="p-4">
        {JSON.stringify(
          {
            session,
            status,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}
