import { getCabin, getCabins } from '@/app/_lib/data-service';

import Cabin from '@/app/_components/Cabin';
import Reservation from '@/app/_components/Reservation';
import Spinner from '@/app/_components/Spinner';
import { Suspense } from 'react';

export async function generateMetadata({ params }) {
  const { name, description } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
    description: description,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export default async function Page({ params }) {
  // console.log(params.cabinId);
  const cabin = await getCabin(params.cabinId);
  const { name } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
