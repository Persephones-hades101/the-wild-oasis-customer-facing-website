import Image from 'next/image';
import Link from 'next/link';

import bg from '@/public/bg.png';

export default function Page() {
  return (
    <main className="mt-20">
      <Image
        src={bg}
        fill
        className="object-cover object-top"
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center mt-5">
        <h1 className="text-xl md:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
