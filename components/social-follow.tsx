'use client';

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import Link from "next/link";
import { motion } from "framer-motion";

export default function SocialFollow() {
  return (
    <div className="social-container items-center content-center grid grid-cols-5 p-8 gap-8">           
      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link
          href="https://youtu.be/mV5DSttNOPE"
          className={`youtube social text-black dark:text-white`}
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2x"/>
        </Link>
      </motion.button>
      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link
          href="https://www.facebook.com/independentlabels/"
          className={`facebook social text-black dark:text-white`}
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Link>
      </motion.button>
      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link
          href="https://twitter.com/LiberaAwards"
          className={`twitter social text-black dark:text-white`}
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Link>
      </motion.button>
      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link
          href="https://www.instagram.com/LiberaAwards/"
          className={`instagram social text-black dark:text-white`}
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
      </motion.button>
      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link
          href="https://www.linkedin.com/company/a2im-american-association-of-independent-music"
          className={`linkedin social text-black dark:text-white`}
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
      </motion.button>
  </div>
  );
};