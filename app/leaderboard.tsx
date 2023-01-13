import Image from "next/image"

export default function Leaderboard(){
    return (
        <div className="p-5 md:p-0 mx-auto relative md:shadow-xl max-w-5xl h-auto mb-5">
              <Image src="/images/ads/ads_A2IM_Leaderboard_1024x300.png" 
              height={300}
              width={1024}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="a2im ad"
              className="hover:scale-[1.01]" />
            </div>
    )
}

export function HomeLeaderboard(){
    return (
        <div className="mx-auto flex flex-row pt-10 max-w-5xl content-center items-center pb-16 justify-center">      
        <div 
          className="w-1/2 relative h-full mx-auto">
            <Image src="/logos/A2IM-logos/A2IM-logo-black.png" alt="a2im logo"
            height={179}
            width={400}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            className="dark:invert"
            />
        </div>
        <div
          className="px-8 md:px-20 mx-auto">
              <h3 className="text-2xl grow align-middle max-w-2xl">
              THE COLLECTIVE VOICE OF INDEPENDENT MUSIC</h3>
        </div>
  </div>
    )
}