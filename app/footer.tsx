import Image from "next/image";
import Link from 'next/link'
import React from "react";
import { SocialFollowWhite } from "./SocialFollow";
import AdBanner from "./ad-banner";

export default function Footer() {
  return (
    <footer className="w-full absolute">
    <div className="bg-stone-900 md:py-10 z-1">
      <AdBanner/>
        <div className="liberaFooter py-10 max-w-4xl grid grid-cols-1 md:grid-cols-2 mx-auto justify-center md:gap-9 px-10">
            <Link href="/" className="hover:scale-105">
              <div className="relative w-96 h-64">
              <Image src="/logos/A2IM-logos/A2IM-logo-white.png" 
              className="drop-shadow-2xl" alt='a2im logo'
              fill
              style={{objectFit:"contain"}}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              priority={true}/>
              </div>
            </Link>
            <SocialFollowWhite/>
        </div>
        </div>
        
    </footer>
  );
}
