import Image from "next/image"

export default function Leaderboard(){
    return (
        <div className="invisible md:visible mx-auto relative shadow-2xl bg-white max-w-5xl mb-5">
              <Image src="/images/ads/ads_A2IM_Leaderboard_1024x300.png" 
              height={300}
              width={1024}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="a2im skyscraper ad"
              className="mx-auto hover:scale-[1.01]" />
            </div>
    )
}