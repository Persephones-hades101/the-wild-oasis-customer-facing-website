import { Suspense } from 'react';
import CabinList from '../_components/CabinList';
import Spinner from '../_components/Spinner';

export const metadata = {
  title: 'Cabins',
  description:
    'Our cabins are the perfect place to unwind after a day of exploring the great outdoors.',
};

export default async function Page() {
  // CHANGE

  return (
    <div className=" text-xs sm:text-sm md:text-lg items-center px-4 sm:px-8">
      <h1 className="text-xl sm:text-2xl md:text-4xl mb-6 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200  mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
