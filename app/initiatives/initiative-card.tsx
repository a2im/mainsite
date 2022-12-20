import Image from "next/image";
import Link from "next/link";

export default function InitiativeCard(){
  return (
    <div className="max-w-6xl mx-auto text-center pb-10 pt-5">
          <hr className="border-a2imred my-5"></hr>
          <Link href="initiatives/mentor-program">
        <div className="grid grid-cols-0 md:grid-cols-2 mx-auto gap-10 justify-between hover:scale-105 p-10">
          <div className="flex flex-row my-auto">
            <div className="relative a2imbuttonbox h-28 w-28">
              <Image src="/logos/A2IM-logos/A2IM-button-white.png" fill alt="a2im logo" 
              style={{objectFit:"contain"}}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
            </div>
            <div className="relative my-auto max-w-[400px]">
              <h2 className="text-left text-4xl">Mentorship Program</h2>
            </div>
          </div>
          <div className="my-auto max-w-xl">
            <p>
              Connecting industry veterans with aspiring music executives, 
              our mentorship program furthers our mission of community 
              building and educating the independent sector
            </p>
          </div>
        </div>
        </Link>
          <hr className="border-a2imred my-5"></hr>
          <Link href="initiatives/indiescussion">
          <div className="grid grid-cols-0 md:grid-cols-2 mx-auto gap-10 justify-between hover:scale-105 p-10">
          <div className="flex flex-row my-auto">
            <div className="relative a2imbuttonbox h-28 w-28">
              <Image src="/logos/A2IM-logos/A2IM-button-white.png" fill alt="a2im logo" 
              style={{objectFit:"contain"}}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
            </div>
            <div className="relative my-auto">
              <h2 className="text-left text-5xl">Indiescussion</h2>
            </div>
          </div>
          <div className="my-auto max-w-xl">
            <p>
            INDIESCUSSION is an A2IM webinar series, where we 
            invite industry experts to share strategies on coping 
            with current circumstances.
            </p>
          </div>
        </div>
        </Link>
        <hr className="border-a2imred my-5"></hr>
        <Link href="https://a2imartist.xyz">
        <div className="grid grid-cols-0 md:grid-cols-2 mx-auto gap-10  justify-between hover:scale-105 p-10">
          <div className="flex flex-row my-auto">
            <div className="relative a2imbuttonbox h-28 w-28">
              <Image src="/logos/A2IM-logos/A2IM-button-white.png" fill alt="a2im logo" 
              style={{objectFit:"contain"}}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
            </div>
            <div className="relative my-auto">
              <h2 className="text-left text-5xl">A2IM:ARTIST</h2>
            </div>
          </div>
          <div className="my-auto max-w-xl">
            <p>
            A2IM:Artist Was Launched With The Goal Of Helping 
            Independent, Self-Releasing Artists Optimize Their Careers.
            </p>
          </div>
        </div>
        </Link>
        <hr className="border-a2imred my-5"></hr>
        <div className="grid grid-cols-0 md:grid-cols-2 mx-auto gap-10 justify-between hover:scale-105 p-10">
          <div className="flex flex-row my-auto">
            <div className="relative a2imbuttonbox h-28 w-28">
              <Image src="/logos/A2IM-logos/A2IM-button-white.png" fill alt="a2im logo" 
              style={{objectFit:"contain"}}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
            </div>
            <div className="relative my-auto">
              <h2 className="text-left text-5xl">BIMA</h2>
            </div>
          </div>
          <div className="my-auto max-w-xl">
            <p>
            The Black Independent Music Accelerator (BIMA) is a fellowship initiative created by 
            The American Association of Independent Music (A2IM) with the intention of fighting 
            for social and economic justice within the music industry by amplifying independent, 
            Black-owned music businesses.
            </p>
          </div>
        </div>
        <hr className="border-a2imred my-5"></hr>
      </div>
          )
        }