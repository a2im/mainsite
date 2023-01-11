export default function Loading(start, end) {
    const data = [1,2,3,4,5,6,7,8,9,10]
    const loadingdata = data.slice(start,end)
    return (
        <>
        <div className="relative animate-pulse grid grid-cols-1 mx-auto p-10 gap-10 z-0 max-w-6xl">
        {loadingdata.map(data => (
            <div key={data} className="animate-pulse h-[128px] bg-gray-200 rounded-sm dark:bg-gray-700 w-[728px] mb-[40px]">
            </div>
              )
            )}
            </div>
            </>
    );
}