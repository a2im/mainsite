import Image from "next/image"

export default function Leaderboard(){
    return (
        <div className="invisible md:visible mx-auto relative shadow-4xl bg-white max-w-5xl py-10 pt-20 mb-5">
              <Image src="/images/ads/ads_A2IM_Leaderboard_728x90.png" 
              height={90}
              width={728}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="a2im skyscraper ad"
              className="mx-auto" />
            </div>
    )
}