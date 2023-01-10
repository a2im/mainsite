import { BoD2022, AdvBoD2022 } from "../lib/board-data/board-data"

function MainBoard(){
    return (
        <div id="a2imboard" className="mx-auto">
        <div className="flex flex-col md:flex-row mx-auto px-5 pt-10 max-w-6xl">
            <div>
            <h2 className="text-2xl 1/6">Board of Directors</h2>
            <hr className="a2im-border-wrap1 border-transparent mr-0"></hr>
            </div>
        <div className='mt-10 grid grid-cols-0 md:grid-cols-4 gap-5  mb-20'>
        {BoD2022.map(BoD2022 => (
          <button key={BoD2022.id} className="drop-shadow-4xl hover:scale-105 max-w-[200px] max-h-[200px] border-4 mx-auto my-auto">
          <h3 className='text-xl font-medium mb-2 tracking-tighter leading-tight'>
              {BoD2022.Name}
          </h3>
          <h4 className=' mx-auto hover:font-bold text-sm leading-none mb-1'>
              {BoD2022.Title}
          </h4>
          <h4 className='mx-auto hover:font-bold text-lg leading-none'>
              {BoD2022.Company}
          </h4>
          </button>
        ))}
          </div>
          </div>
          </div>
    )
}

function AdvBoard(){
    return (
        <div id="a2imadvboard" className=" mx-auto bg-neutral-900 text-white">
        <div className="flex flex-col md:flex-row mx-auto  px-5 pt-10 max-w-6xl">
            <div>
            <h2 className="1/6 text-2xl">Advisory Board</h2>
            <hr className="a2im-border-wrap1 border-transparent mr-0"></hr>
            </div>
        <div className='mt-10 grid grid-cols-0 md:grid-cols-4 gap-5 p-8 mb-20'>
        {AdvBoD2022.map(AdvBoD2022 => (
          <button key={AdvBoD2022.id} className=" drop-shadow-4xl hover:scale-105 max-w-[200px] max-h-[200px] border-4 mx-auto my-auto">
          <h3 className='text-xl font-medium mb-2 tracking-tighter leading-tight'>
              {AdvBoD2022.Name}
          </h3>
          <h4 className=' mx-auto hover:font-bold text-sm leading-none mb-1'>
              {AdvBoD2022.Title}
          </h4>
          <h4 className='mx-auto hover:font-bold text-lg leading-none'>
              {AdvBoD2022.Company}
          </h4>
          </button>
        ))}
          </div>
          </div>
          </div>
    )
};

export default function Board(){
    return (
        <div className="mx-auto">
        <MainBoard/>
        <AdvBoard/>
        </div>
    )
};