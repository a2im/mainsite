import { Staff2022 } from "../lib/staff-data/staff-data"

export default function Staff(){
    return (
        <div className="mx-auto">
<div className="flex flex-col md:flex-row max-w-6xl mx-auto px-5 pt-10">
            <div>
            <h2 className="1/6">A2IM Staff</h2>
            <hr className="border-a2impurple my-5"></hr>
            </div>
        <div className='mt-10 grid grid-cols-0 md:grid-cols-4 gap-5 p-8 mb-20'>
        {Staff2022.map(Staff2022 => (
          <button key={Staff2022.id} className="p-10 drop-shadow-4xl hover:scale-105 max-w-64 border-4 mx-auto my-auto hover:bg-libera-pink hover:text-white">
          <h3 className='p-3 text-3xl font-medium mb-2 tracking-tight'>
              {Staff2022.Name}
          </h3>
          <h4 className='p-2 mx-auto hover:font-bold w-40 text-2xl'>
              {Staff2022.Title}
          </h4>
          </button>
        ))}
          </div>
          </div>
          </div>
    )
}