import Spinner from '../_components/Spinner';

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-500">Loading cabins data...</p>
    </div>
  );
}
