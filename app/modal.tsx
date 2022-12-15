'use client';

import React from "react"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";


export default function MyModal (){
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    useOnClickOutside(ref, () => setModalOpen(false));
    const dropIn = {
        hidden: {
            x: -320,
            y: 100,
            opacity: 0,
        },
        visible: {
            x: -360,
            y: -510,
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 40,
                stiffness: 300,
            }
        },
        exit: {
            y:"-100vh",
            opacity: 0,
        },
    };

    return (
        <>
            <div className="flex fixed bottom-5 right-5">
            {isModalOpen ? (
                <AnimatePresence>
                <motion.div
                ref={ref}
                onClick={(e) => e.stopPropagation()}
                className="fixed iwborder p-5 modalinfo w-96"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                    <div className="grid grid-cols-0 p-5 relative">
<h3 className="text-white text-xl font-bold">INDIE WEEK INFO</h3>
<p className="text-white">
A2IM Indie Week is a four-day international conference and networking event aimed at maximizing the global impact of Independent music. Featuring keynotes, panels, exclusive networking sessions, and more, Indie Week has historically drawn an attendance of over 1200 participants from over 30 countries.

 
<br></br><br></br>
In response to COVID-19, we took Indie Week online in 2020 and 2021. We returned to an in-person Indie Week in 2022 and will return in 2023! For those still uncertain about travel, a virtual option will also be available.


</p></div>
                </motion.div>
                </AnimatePresence> ) : (
                <motion.button 
                whileTap={{scale: 0.95}}
                className="save-button"
                onClick={() => (setModalOpen(true))}>
                <Image
                className="shadow-2xl"
                src="/logos/A2IM-logos/A2IM-button-white.png"
                alt="a2im button"
                width={75}
                height={75}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} />
            </motion.button>
                )}
            </div>
     </>
    );
    }

    function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
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
          [ref, handler]
        );
      }
      



