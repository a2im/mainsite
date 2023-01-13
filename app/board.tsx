'use client';

import { GET_ALL_STAFF } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Image from "next/image";

export function MainBoard() {
    const { loading, error, data } = useQuery(GET_ALL_STAFF, { 
      variables: {
        Relation: "Board of Directors",
      }});
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
    return (
        <div id="a2imboard" className="mx-auto">
        <div className="flex flex-col md:flex-row mx-auto px-5 pt-10 max-w-6xl">
            <div>
            <h2 className="text-2xl 1/6">Board of Directors</h2>
            <hr className="a2im-border-wrap1 border-transparent mr-0"></hr>
            </div>
        <div className='mt-10 grid grid-cols-0 md:grid-cols-4 gap-5  mb-20'>
        {data?.staffs.data.map(staffs => (
          <button key={staffs.id} className="drop-shadow-4xl hover:scale-105 max-w-[200px] max-h-[200px] mx-auto my-auto">
          <Image 
          src={staffs?.attributes?.Headshot?.data?.attributes?.url} 
          alt={staffs?.attributes?.Headshot?.data?.attributes?.alternativeText}
          width={staffs?.attributes?.Headshot?.data?.attributes?.width}
          height={staffs?.attributes?.Headshot?.data?.attributes?.height}
          />
          </button>
        ))}
          </div>
          </div>
          </div>
    );
}

export function AdvBoard() {
    const { loading, error, data } = useQuery(GET_ALL_STAFF, { 
      variables: {
        Relation: "Advisory Board",
      }});
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
    return (
        <div id="a2imadvboard" className="mx-auto bg-neutral-900">
        <div className="flex flex-col md:flex-row mx-auto px-5 pt-10 max-w-6xl">
            <div>
            <h2 className="text-2xl 1/6 text-white">Advisory Board</h2>
            <hr className="a2im-border-wrap1 border-transparent mr-0"></hr>
            </div>
        <div className='mt-10 grid grid-cols-0 md:grid-cols-4 gap-5  mb-20'>
        {data?.staffs.data.map(staffs => (
          <button key={staffs.id} className="drop-shadow-4xl hover:scale-105 max-w-[200px] max-h-[200px] mx-auto my-auto">
          <Image 
          src={staffs?.attributes?.Headshot?.data?.attributes?.url} 
          alt={staffs?.attributes?.Headshot?.data?.attributes?.alternativeText}
          width={staffs?.attributes?.Headshot?.data?.attributes?.width}
          height={staffs?.attributes?.Headshot?.data?.attributes?.height}
          />
          </button>
        ))}
          </div>
          </div>
          </div>
    );
}

export default function Board(){
    return (
        <div className="mx-auto">
        <MainBoard/>
        <AdvBoard/>
        </div>
    )
};