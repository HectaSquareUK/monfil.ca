'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const currentLocale = pathname.split('/')[1];
    const newPath = pathname.replace(`/${currentLocale}`, '') || '/';

    // And prepend the new one
    router.replace(`/${newLocale}${newPath}`);
  };

  return (
    <div>
      <button
        onClick={() => handleLocaleChange('en')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
      >
        English
      </button>
      <button
        onClick={() => handleLocaleChange('fr')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
      >
        Français
      </button>
    </div>
  );
}
