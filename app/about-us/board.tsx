import { BoD2022, AdvBoD2022 } from "../../lib/board-data/board-data"

export function MainBoard(){
    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            <h3 className="1/6">Board of Directors</h3>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 p-8 mb-20'>
        {BoD2022.map(BoD2022 => (
          <button key={BoD2022.id} className="p-10 drop-shadow-4xl hover:scale-105 max-w-64 border-4 mx-auto my-auto hover:bg-libera-pink hover:text-white">
          <h3 className='p-3 text-3xl font-medium mb-2 tracking-tight'>
              {BoD2022.Name}
          </h3>
          <h4 className='p-2 mx-auto hover:font-bold w-40 text-2xl'>
              {BoD2022.Title}
          </h4>
          <h4 className='p-2 mx-auto hover:font-bold w-40 text-xl'>
              {BoD2022.Company}
          </h4>
          </button>
        ))}
          </div>
          </div>
    )
}

export function AdvBoard(){
    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            <h3 className="1/6">Advisory Board</h3>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 p-8 mb-20'>
        {AdvBoD2022.map(AdvBoD2022 => (
          <button key={AdvBoD2022.id} className="p-10 drop-shadow-4xl hover:scale-105 max-w-64 border-4 mx-auto my-auto hover:bg-libera-pink hover:text-white">
          <h3 className='p-3 text-3xl font-medium mb-2 tracking-tight'>
              {AdvBoD2022.Name}
          </h3>
          <h4 className='p-2 mx-auto hover:font-bold w-40 text-2xl'>
              {AdvBoD2022.Title}
          </h4>
          <h4 className='p-2 mx-auto hover:font-bold w-40 text-xl'>
              {AdvBoD2022.Company}
          </h4>
          </button>
        ))}
          </div>
          </div>
    )
};

export default function Board(){
    return (
        <>
        <MainBoard/>
        <AdvBoard/>
        </>
    )
};