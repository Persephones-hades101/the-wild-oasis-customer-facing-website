'use client';

import React, { useState } from 'react';

export default function UpdateProfileForm({ children }) {
  const [count, setCount] = useState(0);
  const countryFlag = 'pt.jpg';
  const nationality = 'portugal';
  return (
    <form className="bg-primary-900 py-6 sm:py-8 px-6 sm:px-12 text-base sm:text-lg flex flex-col gap-5 sm:gap-6 rounded-md">
      <div className="space-y-2">
        <label className="text-sm sm:text-base">Full name</label>
        <input
          disabled
          className="px-4 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm sm:text-base">Email address</label>
        <input
          disabled
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
          className="px-4 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-6">
        <button className="bg-accent-500 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-primary-800 font-semibold rounded-md hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
          Update profile
        </button>
      </div>
    </form>
  );
}
