import Link from 'next/link';

export const metadata = {
  title: 'Account',
  description: 'View your account information here.',
};

export default function Page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome , User
      </h2>
      <p>Welcome back! You can view your account information here.</p>
      <Link href="/account/profile">View your profile</Link>
      <Link href="/account/reservations">View your reservations</Link>
    </div>
  );
}
