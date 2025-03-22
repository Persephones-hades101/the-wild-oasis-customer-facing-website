import CabinCard from '../_components/CabinCard';
import { getCabins } from '../_lib/data-service';

export const metadata = {
  title: 'Cabins',
  description:
    'Our cabins are the perfect place to unwind after a day of exploring the great outdoors.',
};

export default async function Page() {
  // CHANGE
  const cabins = await getCabins();

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

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
