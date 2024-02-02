import Header from '@/components/Header';
import SessionProvider from '@/components/SessionProvider';
import { cn } from '@/utils/style';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Montserrat, Noto_Sans_KR } from 'next/font/google';

import Footer from '@/components/Footer';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const montserratEn = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--montserrat',
});

export const metadata: Metadata = {
  title: 'EBTI',
  description: 'EBTI',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body
        className={cn(
          'flex text-sm lg:text-base',
          notoSansKr.className,
          montserratEn.variable
        )}
      >
        <SessionProvider session={session}>
          <div className="flex flex-1 flex-col">
            <Header />
            <div className="flex flex-1 flex-col overflow-y-auto">
              <main className="flex flex-1 flex-col">{children}</main>
              <Footer />
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
