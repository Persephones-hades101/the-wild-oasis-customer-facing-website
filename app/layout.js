import '@/app/_styles/globals.css';

import Header from './_components/Header';

import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Welcome to The Wild Oasis',
    template: '%s | The Wild Oasis',
  },
  description: {
    default:
      'We are a beautiful retreat located in the heart of the wilderness. Our mission is to provide a peaceful and relaxing environment for our guests.',
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-auto scrollbar-hidden">
      <body
        className={`${josefin.className} bg-primary-950 antialiased text-gray-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8  grid">
          <main className="max-w-7xl mx-auto w-full pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
