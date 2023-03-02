import React from "react"
import Image from "next/image";
import { ButtonInternal, ButtonExternal } from "../button";
import { MissionStatement, IndieStatement, PolicyStatement } from "../../components/segments";

function About1 () {
    return (
      <div className="mx-auto p-5 pt-10">
          <div className="flex flex-col max-w-4xl mx-auto px-8">
          <h2 className="text-2xl dark:text-white"> ABOUT A2IM</h2>
          <hr className="a2im-border-wrap2 border-transparent"></hr>
            <div className="pt-3 z-10 flex flex-col md:flex-row items-center md:justify-around mx-auto gap-10">
              <div className="flex-initial relative items-center max-w-sm">
                <p>The American Association of Independent Music (A2IM) is a 501(c)(6)
                   not-for-profit trade organization that serves as a central voice 
                   for a diverse community of over 600 independently owned record labels 
                   operating within the United States. A2IM  represents their interests 
                   in the marketplace, in the media, on Capitol Hill, and as part of the 
                   global music community.
                </p>
              <ButtonInternal href='/about-us/join-a2im'>JOIN NOW</ButtonInternal>
              </div>
              <div className="relative w-1/2 h-full">
                <Image
                  src="/images/bg-mixer.png"
                  alt='indie week opening reception'
                  height={768}
                  width={768}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw" />
              </div>
            </div>
          </div>
          </div>
          )};

function About2 () {
      return (
        <div className="mx-auto p-5 pt-10">
        <div className="flex flex-col max-w-4xl mx-auto px-8">
        <h2 className="text-2xl"> OUR MEMBERS</h2>
        <hr className="a2im-border-wrap3 border-transparent"></hr>
            <div className="pt-3 z-10 flex flex-col md:flex-row items-center md:justify-around mx-auto gap-10">
              <div className="flex-initial relative items-center max-w-sm">
                <p>
                  A2IM’s diverse community includes music labels of all sizes 
                  and staffing levels across the United States, from Hawaii to Florida, 
                  representing musical genres as diverse as our membership, 
                  including bluegrass, blues, children’s, classical, comedy, country, 
                  dance/electronic, gospel, folk, Hawaiian, jazz, hip-hop, Latin, metal, 
                  new age, pop, R&B, reggae, roots, soca/caribbean, traditional American, 
                  world, and more. 
                  </p>
                <ButtonInternal href='/about-us/join-a2im'>JOIN NOW</ButtonInternal>
              </div>
              <div className="relative w-1/2 h-full">
                <Image
                  src="/images/bg-classroom.png"
                  alt='indie week meeting room'
                  height={768}
                  width={768}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw" />
              </div>
            </div>
          </div>
          </div>
      )}



function About3 () {
      return ( 
    <div className="mx-auto p-5 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-6xl flex flex-col md:flex-row md:justify-around items-center mx-auto gap-10">
          <div className="relative w-1/2 h-full">
            <Image
              src="/images/bg-community.png"
              alt='a2im community photo'
              height={768}
              width={768}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
          </div>
          <div className="relative max-w-lg p-5">
            <h2 className="text-2xl">OUR COMMUNITY</h2>
            <hr className="a2im-border-wrap1 border-transparent mr-0"></hr>
            <ul className="mx-auto ">
              <li className="text-xl">
              xxx Record Labels represented
              </li>
              <li className="text-xl">
              xxx Independent Artists represented
              </li>
              <li className="text-xl">
              xxx other Independent Music Businesses represented
              </li>
            </ul>
            
<ButtonExternal href='https://membership.a2im.org/memberdirectory/FindStartsWith?term=%23%21'>COMMUNITY</ButtonExternal>
          </div>
        </div>
      </div>
    </div>
      )}

export default function AboutUS (){
  return (
    <>
    <About1/>
    <MissionStatement/>
    <About2/>
    <IndieStatement/>
    <About3/>
    <PolicyStatement/>
    </>
  )
}