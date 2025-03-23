'use client';

import { useFormStatus } from 'react-dom';
import { updateGuest } from '../_lib/actions';

export default function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-6 sm:py-8 px-6 sm:px-12 text-base sm:text-lg flex flex-col gap-5 sm:gap-6 rounded-md"
    >
      <div className="space-y-2">
        <label className="text-sm sm:text-base">Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-4 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm sm:text-base">Email address</label>
        <input
          disabled
          name="email"
          defaultValue={email}
          className="px-4 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality" className="text-sm sm:text-base">
            Where are you from?
          </label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-4 sm:h-5 rounded-sm"
          />
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID" className="text-sm sm:text-base">
          National ID number
        </label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="px-4 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent-500 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-primary-800 font-semibold rounded-md hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? 'Updating...' : 'Update profile'}
    </button>
  );
}
