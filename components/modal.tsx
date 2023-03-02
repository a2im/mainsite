'use client';
import { useOnClickOutside } from 'usehooks-ts'
import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import Image from 'next/image';

export default function MyModal ({children}){
    const Modalref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const handleClickOutside = () => {
      setModalOpen(false)
    }
    const handleClickInside = () => {
      setModalOpen(true)
    }
    useOnClickOutside(Modalref, handleClickOutside)
    const dropIn = {
        hidden: {
            opacity: 0,
        },
        visible: {
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
            <div className="max-h-2xl z-10 flex fixed bottom-5 right-5 w-20 h-20 rounded-3xl bg-gradient-radial from-black via-transparent to-transparent">
            {isModalOpen ? (
                <motion.div
                ref={Modalref}
                onClick={(e) => e.stopPropagation()}
                className="fixed w-96 shadow-2xl bottom-16 md:right-16 right-7 rounded-lg overflow-hidden"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                    {children}
                </motion.div>
                 ) : (
                <button 
                onClick={handleClickInside}>
                <div className="w-20 h-20">
                <Image
                src="/logos/A2IM-logos/A2IM-button-white.png"
                alt="a2im button"
                width={75}
                height={75}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} />
                </div>
            </button>
                )}
            </div>
     </>
    );
    }