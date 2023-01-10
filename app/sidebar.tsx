import Image from "next/image"
import { RecentJobs } from "./recents"

export default function Sidebar(){
    return (
        <div className="flex flex-col gap-5 invisible md:visible md:w-1/3 mx-auto md:h-full relative items-center bg-transparent">
            <Image src="/images/ads/ads_A2IM_Fat Skyscraper_240x400.png" 
              height={400}
              width={240}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="a2im skyscraper ad"
              className="shadow-2xl hover:scale-[1.01]"
               />
            <RecentJobs/>
            <Image src="/images/ads/ads_A2IM_Square_250x250.png" 
              height={250}
              width={250}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="a2im square ad"
              className="shadow-2xl hover:scale-[1.01]"
               />
            <Image src="/images/ads/ads_A2IM_Half Banner_234x60.png" 
              height={60}
              width={234}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="a2im half banner ad"
              className="shadow-2xl hover:scale-[1.01]"
               />
            <Image src="/images/ads/ads_A2IM_Half Banner_234x60.png" 
              height={60}
              width={234}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="a2im half banner ad"
              className="shadow-2xl hover:scale-[1.01]"
               />
            <Image src="/images/ads/ads_A2IM_Half Banner_234x60.png" 
              height={60}
              width={234}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="a2im half banner ad"
              className="shadow-2xl hover:scale-[1.01]"
               />
            <Image src="/images/ads/ads_A2IM_Half Banner_234x60.png" 
              height={60}
              width={234}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="a2im half banner ad"
              className="shadow-2xl hover:scale-[1.01]"
               />
            </div>
    )
}