import Image from "next/image";
import { ButtonInternal } from "./button"


export function Intro() {
  return (
    <>
  <div className="max-w-2xl flex flex-col justify-center gap-0 md:mx-auto relative mb-20">
    <div className="mx-auto relative w-[300px]">

            </div>
            <div className="mx-auto relative w-[300px]">

            </div>
  </div>
        </>
  )
}

export function Intro2() {
  return (
<div className="pt-10">      
  <div className=" max-w-5xl grid gap-8 md:grid-cols-2 md:mx-auto p-5 py-15">
        <div 
          className="w-[400px] mx-auto">

        </div>
        <div
          className="px-8 md:px-20 mx-auto">
<h2 className="grow align-middle mb-9 max-w-2xl">
Celebrate the Independent Community</h2>
  <h4 className="align-middle max-w-xl">Hosted by the American Association of Independent Music, the Libera Awards is an annual awards ceremony that honours both independent musicians as well as the teams that support them.</h4>
        </div>

  </div>
  <div className="justify-center bg-neutral-900 mx-auto">
        <ButtonInternal href="/about-us">LEARN MORE</ButtonInternal>
        </div>
  </div>
  )
}

export function Intro3() {
  return (
    <div className="pb-20 max-w-5xl mx-auto">
<div className="pt-10 gap-10 p-8 md:mt-20">
      <div className="px-8 md:px-20 justify-center mx-auto center-content">
<h2 className="mb-9 md:mt-10 font-bold leading-tight drop-shadow-2xl">
Join us in New York City & Online</h2>
  <h4 className="max-w-xl drop-shadow-2xl">Historically held in New York City, the Libera Awards went virtual in 2020 in response to the pandemic. Moving forward with a hybrid format, we return to our in-person ceremony in NYC, and virtual ceremony
exclusively on YouTube.</h4>
        </div>
  </div>
  <ButtonInternal href="/events">GET TICKETS</ButtonInternal>
  </div>
  )
}

export default function MyIntro () {
  return (
    <div className="pt-20">
          <Intro />
          <div className="py-8 md:hidden" />
          <Intro2 />
          <div className="py-8 md:hidden" />
          <Intro3 />
        </div>
  )
}