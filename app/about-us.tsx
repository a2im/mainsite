import React from "react"
import Image from "next/image";
import { ButtonInternal, ButtonExternal } from "./button";
import { MissionStatement, IndieStatement, PolicyStatement } from "./segments";

function About1 () {
    return (
      <div className="pt-20 md:pt-0 mx-auto">
          <div className="max-w-6xl mx-auto px-5">
            <div className="z-10 flex flex-col md:flex-row items-center md:justify-around mx-auto gap-10">
              <div className="flex-initial relative md:py-20 items-center max-w-xl">
                <h2> ABOUT A2IM</h2>
                <hr className="border-a2impurple my-5"></hr>
                <h4>The American Association of Independent Music (A2IM) is a 501(c)(6)
                   not-for-profit trade organization that serves as a central voice 
                   for a diverse community of over 600 independently owned record labels 
                   operating within the United States. A2IM  represents their interests 
                   in the marketplace, in the media, on Capitol Hill, and as part of the 
                   global music community.
                </h4>
              <ButtonInternal href='/about-us/join-a2im'>JOIN NOW</ButtonInternal>
              </div>
              <div className="relative w-96 h-96 m-10">
                <Image
                  src="/images/bg-mixer.webp"
                  alt='indie week opening reception'
                  fill
                  style={{objectFit:"contain"}}
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
          <div className="mx-auto px-5 ">
            <div className="z-10 flex flex-col-reverse md:flex-row items-center md:justify-around mx-auto gap-10 max-w-6xl">
              <div className="flex-initial relative md:py-20 items-center max-w-xl">
                <h2>OUR MEMBERS</h2>
                <hr className="border-a2impurple my-5"></hr>
                <h4>
                  A2IM’s diverse community includes music labels of all sizes 
                  and staffing levels across the United States, from Hawaii to Florida, 
                  representing musical genres as diverse as our membership, 
                  including bluegrass, blues, children’s, classical, comedy, country, 
                  dance/electronic, gospel, folk, Hawaiian, jazz, hip-hop, Latin, metal, 
                  new age, pop, R&B, reggae, roots, soca/caribbean, traditional American, 
                  world, and more. 
                </h4>
                <ButtonInternal href='/about-us/join-a2im'>JOIN NOW</ButtonInternal>
              </div>
              <div className="relative w-96 h-96 m-10">
                <Image
                  src="/images/bg-classroom.jpg"
                  alt='indie week meeting room'
                  fill
                  style={{objectFit:"contain"}}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw" />
              </div>
            </div>
          </div>
      )}



function About3 () {
      return ( 
    <div className="mx-auto pt-5">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-6xl flex flex-col md:flex-row md:justify-around items-center mx-auto gap-10">
          <div className="relative m-10 w-[400px] h-[400px]">
            <Image
              src="/images/bg-community.webp"
              alt='a2im community photo'
              fill
              style={{objectFit:"contain"}}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
          </div>
          <div className="relative text-right max-w-lg p-5">
            <h2>OUR COMMUNITY</h2>
<hr className="border-a2impurple my-5"></hr>
            <ul className="mx-auto pb-8 ">
              <li className="text-2xl">
              xxx Record Labels represented
              </li>
              <li className="text-2xl">
              xxx Independent Artists represented
              </li>
              <li className="text-2xl">
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