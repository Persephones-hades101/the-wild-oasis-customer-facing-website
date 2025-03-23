'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton({ label, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-6">
      <button
        disabled={pending}
        className="bg-accent-500 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-primary-800 font-semibold rounded-md hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      >
        {pending ? pendingLabel : label}
      </button>
    </div>
  );
}
