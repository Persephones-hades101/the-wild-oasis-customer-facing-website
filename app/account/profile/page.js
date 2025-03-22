import SelectCountry from '@/app/_components/SelectCountry';
import UpdateProfileForm from '@/app/_components/UpdateProfileForm';

export const metadata = {
  title: 'Update your guest profile',
  description: 'Update your guest profile information here.',
};

export default function Page() {
  // CHANGE
  const countryFlag = 'pt.jpg';
  const nationality = 'portugal';

  return (
    <div className="px-4 sm:px-8 lg:px-12">
      <h2 className="font-semibold text-xl sm:text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-base sm:text-lg mb-6 sm:mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-4 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
