import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import './globals.css';
import Providers from './providers';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NX Media',
  description: 'Смотри все отовсюду',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='overflow-y-scroll' lang='en'>
      <body
        className={`${montserrat.variable} antialiased flex flex-col min-h-screen h-full mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8`}
      >
        <Providers>
          <Header />
          <div className='flex-1 my-4'>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
