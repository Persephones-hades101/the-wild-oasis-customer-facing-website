import Link from 'next/link';

import about_1 from '@/public/about-1.jpg';
import about_2 from '@/public/about-2.jpg';
import Image from 'next/image';
import { getCabins } from '../_lib/data-service';

export const revalidate = 86400;

export const metadata = {
  title: 'About',
  description:
    'The Wild Oasis is a beautiful retreat located in the heart of the Italian Dolomites. Our mission is to provide a peaceful and relaxing environment for our guests. We offer a variety of activities, including hiking, fishing, and bird watching. Our cabins are the perfect place to unwind after a day of exploring the great outdoors.',
};

export default async function Page() {
  const cabins = await getCabins();
  const noOfCabins = cabins.length;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-16 text-xs sm:text-sm md:text-lg items-center px-4 sm:px-8">
      {/* Welcome Section */}
      <div className="lg:col-span-3">
        <h1 className="text-xl sm:text-2xl md:text-4xl mb-6 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-6">
          <p>
            Where nature's beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it's not just about the luxury cabins.
            It's about the experience of reconnecting with nature and enjoying
            simple pleasures with family.
          </p>
          <p>
            Our {noOfCabins} luxury cabins provide a cozy base, but the real
            freedom and peace you'll find in the surrounding mountains. Wander
            through lush forests, breathe in the fresh air, and watch the stars
            twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by nature's
            splendor. It's a place to slow down, relax, and feel the joy of
            being together in a beautiful setting.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:col-span-2">
        <Image
          src={about_1}
          alt="Family sitting around a fire pit in front of a cabin"
          className="w-full h-auto object-cover rounded-md"
          quality={80}
        />
      </div>

      <div className="lg:col-span-2">
        <Image
          src={about_2}
          alt="Family that manages The Wild Oasis"
          className="w-full h-auto object-cover rounded-md"
          quality={80}
        />
      </div>

      {/* History Section */}
      <div className="lg:col-span-3">
        <h1 className="text-xl sm:text-2xl md:text-4xl mb-6 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-6">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we've maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you're not just a
            guest; you're part of our extended family. So join us at The Wild
            Oasis soon, where tradition meets tranquility, and every visit is
            like coming home.
          </p>

          {/* CTA Button */}
          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-4 py-3 text-sm sm:px-6 sm:py-4 sm:text-base md:text-lg font-semibold rounded-md hover:bg-accent-600 transition-all text-center w-full sm:w-auto"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
