'use client';
 
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useTranslation } from "react-i18next";
 
export default function Search() {  
  const { t, i18n } = useTranslation();   
  let lng = i18n.language;
  let searchPlaceholder=t("course.SearchPlaceholder");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
 
  const handleSearch =useDebouncedCallback((term) =>{
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return(
<>
     <div className="relative flex flex-1 flex-shrink-0 w-[300px] sm:w-[360px]  max-w-[500px]">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 font-freesansbold ${lng === 'en' || 'pr-2 font-kurdish font-bold'}`}
              placeholder={searchPlaceholder}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              defaultValue={searchParams.get('query')?.toString()}
            />
            <FaMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
</>
  )
}



