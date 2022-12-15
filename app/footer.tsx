import Image from "next/legacy/image";
import Link from 'next/link'
import React from "react";
import { SocialFollowWhite } from "./SocialFollow";
import AdBanner from "./ad-banner";
import SponsorFooter from "./sponsors";

export default function Footer() {
  return (
    <footer className="w-full absolute">
    <div className="bg-stone-900 md:py-10 z-1">
      <AdBanner/>
        <div className="liberaFooter py-10 max-w-4xl grid grid-cols-1 md:grid-cols-2 mx-auto justify-center md:gap-9 px-10">
            <Link href="https://liberaawards.com">
              <Image src="/logos/A2IM-logo-white.png" alt='a2im logo' height={458} width={1024} priority={true}/>
            </Link>
            <SocialFollowWhite/>
        </div>
        </div>
        
    </footer>
  );
}
