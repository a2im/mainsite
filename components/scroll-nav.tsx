'use client';
export default function ScrollNav(){ 
  const data = [1,2,3,4,5,6,7,8,9,10]
  const loadingdata = data.slice(1,5)
  const MyTitle = document.title.toString();
    return(
      <>
<nav className="navigation max-w-xs pt-5 side-bar md:sticky mb-auto md:top-16 bg-neutral-100 dark:bg-neutral-800  rounded-xl border-2 border-black ml-5 dark:border-white">
    <ul className="list-inside p-2 marker:text-black items-center content-center">
      <h4 className="text-black px-2 -mt-5 dark:text-neutral-50 whitespace-nowrap">{MyTitle}</h4>
      <hr className="border-black mx-2 dark:border-white"/>
      <div className="relative animate-pulse grid grid-cols-1 mx-auto gap-3 z-0">
        {loadingdata.map(data => (
            <div key={data} className="animate-pulse bg-gray-200 rounded-sm dark:bg-gray-700">
              <p className="mx-auto text-center">{data}</p>
            </div>
              )
            )}
            </div>
            </ul>
        </nav>
      </>
    )}