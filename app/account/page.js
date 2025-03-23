import Link from 'next/link';
import { auth } from '../_lib/auth';

export const metadata = {
  title: 'Account',
  description: 'View your account information here.',
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(' ')[0];
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, {firstName}
      </h2>
    </div>
  );
}
