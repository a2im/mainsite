'use client';

import { GET_ALL_SPONSORS } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Link from "next/link";
import Image from "next/image";

export function SponsorTier1() {
    const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
      variables: {
        Level: "Tier 1", 
        Title: "2023 Libera Awards"
      }});
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
    return (
        <div className="max-w-4xl relative py-5 flex flex-col md:flex-row mx-auto justify-evenly gap-10">
        {/* Map through the data */}
        {data?.sponsors.data.map(sponsors => (
                <div key={sponsors.id} className="relative hover:scale-105 w-[300px] h-[300px] p4 justify-evenly">
                  <Link href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-[300px] h-[300px] mx-auto justify-evenly">
                  <Image 
                    src={sponsors.attributes.Logo.data.attributes.url}
                    fill={true}
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
                    style={{ objectFit: 'contain', position: 'absolute'}}
                    sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                    />
                    </div>
                    </Link>
                </div>
              )
            )}
        </div>
    );
}

export function SponsorTier2() {
    const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
      variables: {
        Level: "Tier 2", 
        Title: "2023 Libera Awards"
      }});
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
    return (
        <div className="px-10 max-w-4xl relative flex flex-col md:flex-row mx-auto gap-5">
        {/* Map through the data */}
        {data.sponsors.data.map(sponsors => (
                <div key={sponsors.id} className="relative hover:scale-105 p4 w-[300px] h-[300px] grow shrink mx-auto">
                  <Link className="relative" href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[300px] h-[300px] mx-auto justify-evenly">
                  <Image
                    src={sponsors.attributes.Logo.data.attributes.url}
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText}
                    fill={true}
                    style={{ objectFit: 'contain', position: 'absolute'}}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
              </div>
                    </Link>
                </div>
              )
            )}
        </div>
    );
}

export function SponsorTier3() {
    const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
      variables: {
        Level: "Tier 3", 
        Title: "2023 Libera Awards"
      }});
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
    return (
        <div className="max-w-4xl relative pb-20 py-5 flex flex-col md:flex-row gap-20 mx-auto">
        {/* Map through the data */}
        {data?.sponsors?.data.map(sponsors => (
                <div key={sponsors.id} className="mx-auto relative hover:scale-105 w-[128px] h-[128px]">
                  <Link className="relative" href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[128px] h-[128px] mx-auto justify-evenly">
                  <Image
                    src={sponsors.attributes.Logo.data.attributes.url}
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
                    fill={true}
                    style={{ objectFit: 'contain'}}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" 
                    />
                    </div>
                    </Link>
                </div>
              )
            )}
        </div>
    );
}

export default function SponsorFooter () {
  return (
    <div className="relative">
    <div className="relative z-99 flex flex-col mx-auto">
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
      <div className="w-[200px] pt-10">
      <h3>Thanks to our Sponsors:</h3>
      </div>
      <div className="relative p-8">
        <SponsorTier1/>
        <SponsorTier2/>
        <SponsorTier3/>
        </div>
    </div>
    </div>
    </div>
  )
}