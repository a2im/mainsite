import Image from "next/image";
import Link from 'next/link'
import React from "react";
import { SocialFollowWhite } from "./SocialFollow";
import AdBanner from "./ad-banner";
import ContactForm from "./contact/contact-form";

export default function Footer() {
  return (
    <footer className="w-full absolute">
      <div className="bg-stone-900 md:py-10 z-1">
        <AdBanner/>
        <div className="flex flex-col-reverse md:flex-row mx-auto justify-center content-center max-w-6xl">
          <div className="relative grid grid-cols-0 max-w-4xl mx-auto justify-center md:gap-9 py-20 px-10 md:p-10">
              <Link href="/" className="hover:scale-105">
                <div className="relative w-64 h-32 md:w-96 md:h-64">
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
          <div className="text-white mx-auto justify-center">
            <ContactForm/>
          </div>
        </div>
      </div>
    </footer>
  );
}
