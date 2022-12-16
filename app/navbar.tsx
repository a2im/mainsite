'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

export default function MyNavbar() {
  const ref = useRef();
  const [navbar, setNavbar] = useState(false);
  useOnClickOutside(ref, () => setNavbar(false));
  return (
    <div>
      <nav className="bggradient w-full fixed z-50 shadow-2xl px-5">
        <div className="max-w-5xl justify-between mx-auto items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block">
              <Link href={"/"}>
              <div className="flex justify-center gap-10 grid-cols-2">
              <div className="relative a2imbuttonbox ml-2 w-10">
                <Image
                  src="/logos/A2IM-logos/A2IM-button-white.png"
                  alt="a2im logo button"
                  fill={true}
                  sizes="100vw" />
                </div>
                <div className="mt-1">
                <h2 className="text-2xl text-white font-bold tracking-normal">A2IM</h2>
                </div>
              </div>
              </Link>
              <div className="md:hidden">
                <button
                  className="pr-2 mr-2 pl-2 text-white rounded-md outline-none focus:border-white focus:border"
                  onClick={() => setNavbar(!navbar)}
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
              <ul ref={ref} className="md:flex ">
                <li 
                  className="text-center text-white text-xl uppercase">
                  <Link href="/about-us" onClick={() => setNavbar(false)}>
                  ABOUT
                  </Link>
                </li>
                <li className="text-center text-white text-xl uppercase">
                  <Link href="/about-us/join-a2im" onClick={() => setNavbar(false)}>
                    JOIN
                  </Link>
                </li>
                <li 
                  className="text-center text-white text-xl uppercase">
                  <Link href="/initiatives" onClick={() => setNavbar(false)}>
                    INITIATIVES
                  </Link>
                </li>
                <li 
                  className="text-center text-white text-xl uppercase">
                  <Link href="/news" onClick={() => setNavbar(false)} >
                    NEWS
                  </Link>
                </li>
                <li 
                  className="text-center text-white text-xl uppercase">
                  <Link href="/events" onClick={() => setNavbar(false)}>
                    EVENTS
                  </Link>
                </li>
                <li 
                  className="text-center text-white text-xl uppercase">
                  <Link href="/" onClick={() => setNavbar(false)}>
                    LOG IN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}