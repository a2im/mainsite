'use client';
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link';
import Image from "next/image";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function MyNavbar({children}) {
  const router = useRouter()
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const handleClickOutside = () => {
    setNavbar(false)
  }
  const handleClickInside = () => {
    setNavbar(!navbar)
  }
  
  useOnClickOutside(Navref, handleClickOutside)
  return (
    <>
      <nav className="bg-neutral-900 w-full fixed z-50 shadow-2xl px-5">
        <div className="max-w-5xl justify-between mx-auto items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block">
              <Link href={"/"}>
              <div className="flex justify-center gap-10 grid-cols-2">
              <div className="relative ml-2 w-10 h-10">
                <Image
                  src="/logos/A2IM-logos/A2IM-button-white.png"
                  alt="a2im logo button"
                  fill
                  style={{objectFit:"contain"}}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  priority
                  className="hover:scale-105" />
                </div>
                <div className="mt-1">
                <h2 className="text-2xl text-white font-bold tracking-normal hover:scale-105">A2IM</h2>
                </div>
              </div>
              </Link>
              <div className="md:hidden">
                <button
                  className="pr-2 mr-2 pl-2 text-white rounded-md outline-none focus:border-white focus:border"
                  onClick={handleClickInside}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-center md:block ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul ref={Navref} className="
              md:lvl1 
              md:flex 
              ">
                <li 
                className="
                py-2
                md:py-0
                text-center
                md:text-left 
                text-white 
                text-l 
                uppercase 
                px-2 
                md:hover:-mb-11
                hover:pb-10
                hover:scale-105 
                hover:bg-neutral-900
                rounded
                ">
                  <Link href="/about-us" onClick={() => setNavbar(false)}>
                  ABOUT
                  </Link>
                  <ul className="
                  mx-auto
                  md:-ml-4 
                  md:lvl2 
                  py-3 
                  pt-2 
                  pb-4 
                  bg-stone-800
                  md:bg-neutral-900 
                  my-auto 
                  p-8 
                  w-64 
                  rounded-br 
                  rounded-bl 
                  rounded-tr
                  shadow-4xl
                  ">   
                  <li className="
                    text-center
                    md:text-left 
                    text-white 
                    text-l
                    uppercase 
                    hover:scale-105 
                    w-full
                    py-2
                    ">
                      <Link href="/about-us" onClick={() => setNavbar(false)}>
                        ABOUT US
                      </Link>
                    </li>
                    <hr className="a2im-border-wrap1 border-transparent mx-auto"></hr>
                    <li className="
                    text-center
                    md:text-left 
                    text-white 
                    text-l
                    uppercase 
                    hover:scale-105 
                    w-full
                    py-2
                    ">
                      <Link href="/about-us/join-a2im" onClick={() => setNavbar(false)}>
                        JOIN
                      </Link>
                    </li>
                    <hr className="a2im-border-wrap3 border-transparent mx-auto"></hr>
                    <li className="
                    text-center
                    md:text-left 
                    text-white 
                    text-l
                    uppercase 
                    hover:scale-105 
                    w-full
                    py-2
                    ">
                      <Link href="/about-us#a2imboard" prefetch={false} passHref onClick={() => setNavbar(false)} replace>
                      Board of Directors
                      </Link>
                      </li>
                      <hr className="a2im-border-wrap4 border-transparent mx-auto"></hr>
                      <li className="
                    text-center
                    md:text-left 
                    text-white 
                    text-l
                    uppercase 
                    hover:scale-105 
                    w-full
                    py-2
                    ">
                      <Link href="/about-us#a2imstaff" prefetch={false} passHref onClick={() => setNavbar(false)} replace>
                      Our Staff
                      </Link>
                      </li>
                  </ul>
                </li>
                <hr className="md:hidden a2im-border-wrap3 border-transparent mx-auto"></hr>
                <li 
                  className="
                  py-2
                  md:py-0
                  text-center
                  md:text-left  
                  text-white 
                  text-l 
                  uppercase 
                  px-2 
                  md:hover:-mb-11
                  hover:pb-10
                  hover:scale-105 
                  hover:bg-neutral-900
                  rounded
                  ">
                  <Link href="/initiatives" onClick={() => setNavbar(false)}>
                    INITIATIVES
                  </Link>
                  <ul className="
                  mx-auto
                  md:-ml-4 
                  md:lvl2 
                  py-3 
                  pt-2 
                  pb-4 
                  bg-stone-800
                  md:bg-neutral-900 
                  my-auto 
                  p-8 
                  w-64 
                  rounded-br 
                  rounded-bl 
                  rounded-tr
                  shadow-4xl
                  ">
                      <li className="
                      text-center
                      md:text-left 
                      mx-auto
                      text-white 
                      uppercase 
                      hover:scale-105 
                      w-full
                      py-2
                      ">
                        <Link href="/initiatives/indiescussion" onClick={() => setNavbar(false)}>
                          Indiescussion
                        </Link>
                      </li>
                      <hr className="a2im-border-wrap1 border-transparent mx-auto"></hr>
                      <li className="
                      text-center
                      md:text-left 
                      mx-auto
                      text-white 
                      uppercase 
                      hover:scale-105 
                      w-full
                      py-2
                      ">
                        <Link href="/initiatives/mentor-program" onClick={() => setNavbar(false)}>
                          Mentor Program
                        </Link>
                      </li>
                      <hr className="a2im-border-wrap4 border-transparent mx-auto"></hr>
                      <li className="
                      text-center
                      md:text-left 
                      mx-auto
                      text-white 
                      uppercase 
                      hover:scale-105 
                      w-full
                      py-2
                      ">
                        <Link href="https://a2imartist.xyz" onClick={() => setNavbar(false)}>
                          A2IM:Artist
                        </Link>
                        <hr className="a2im-border-wrap2 border-transparent mx-auto"></hr>
                      </li>
                      <li className="
                      text-center
                      md:text-left
                      mx-auto
                      text-white 
                      uppercase 
                      hover:scale-105 
                      w-full
                      py-2
                      ">
                        <Link href="https://a2imbima.xyz" onClick={() => setNavbar(false)}>
                          BIMA
                        </Link>
                      </li>
                    </ul>
                </li>
                <hr className="md:hidden a2im-border-wrap1 border-transparent mx-auto"></hr>
                <li 
                  className="
                  py-2
                  md:py-0
                  text-center
                  md:text-left 
                text-white 
                  text-l 
                  uppercase 
                  px-2 
                  hover:scale-105
                  ">
                  <Link href="/news" onClick={() => setNavbar(false)} >
                    NEWS
                  </Link>
                </li>
                <hr className="md:hidden a2im-border-wrap3 border-transparent mx-auto"></hr>
                <li className="
                  py-2
                  md:py-0
                  text-center
                  md:text-left
                  text-white 
                  text-l 
                  uppercase 
                  px-2 
                  md:hover:-mb-11
                  hover:pb-10
                  hover:scale-105 
                  hover:bg-neutral-900
                  rounded
                  ">
                  <Link href="/events" onClick={() => setNavbar(false)}>
                    EVENTS
                  </Link>
                  <ul className="
                  mx-auto
                  md:-ml-4 
                  md:lvl2 
                  py-3 
                  pt-2 
                  pb-4 
                  bg-stone-800
                  md:bg-neutral-900 
                  my-auto 
                  p-8 
                  w-64 
                  rounded-br 
                  rounded-bl 
                  rounded-tr
                  shadow-4xl
                  ">
                    <li className="
                    text-center
                    md:text-left
                    mx-auto
                    text-white 
                    uppercase 
                    hover:scale-105 
                    w-full
                    py-2
                    ">
                      <Link href="https://indieweek.xyz" onClick={() => setNavbar(false)}>
                        Indieweek
                      </Link>
                      </li>
                      <hr className="a2im-border-wrap1 border-transparent mx-auto"></hr>
                      <li className="
                    text-center
                    md:text-left
                    text-white 
                    uppercase 
                    hover:scale-105 
                    w-full
                    py-2
                    ">
                      <Link href="https://liberaawards.com" onClick={() => setNavbar(false)}>
                        Libera Awards
                      </Link>
                      </li>
                      <hr className="a2im-border-wrap4 border-transparent mx-auto"></hr>
                      <li className="
                    text-center
                    md:text-left
                    text-white 
                    uppercase 
                    hover:scale-105 
                    w-full
                    py-2
                    ">
                      <Link href="/events/lgd" onClick={() => setNavbar(false)}>
                        Let&apos;s Get Digital
                      </Link>
                      </li>
                      <hr className="a2im-border-wrap2 border-transparent mx-auto"></hr>
                      <li className="
                    text-center
                    md:text-left
                    text-white 
                    uppercase 
                    hover:scale-105 
                    w-full
                    py-2
                    ">
                      <Link href="/events/panam" onClick={() => setNavbar(false)}>
                        Pan-Am
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div> 
            {children}
          </div>
        </div>
      </nav>
      </>
  );
}
