import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/logo.png';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <div>
        {/* Small screens */}
        <Image
          src={logo}
          quality={100}
          height={40}
          width={40}
          alt="The Wild Oasis logo"
          className="block sm:hidden" // Visible only on small screens
        />

        {/* Medium+ screens */}
        <Image
          src={logo}
          quality={100}
          height={60}
          width={60}
          alt="The Wild Oasis logo"
          className="hidden sm:block" // Hidden on small screens
        />
      </div>

      <span className="text-xs md:text-xl font-semibold text-primary-100 hidden md:block">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
