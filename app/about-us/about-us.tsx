'use client';

import React from "react"
import Image from "next/legacy/image";
import Link from "next/link";
import { ButtonInternal } from "../button";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Staff from "./staff";
import Board from "./board";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 728 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 728, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

export default function AboutUS () {
    return (
      <>
      <AnimatePresence>
          <div className="max-w-6xl mx-auto">
          <motion.div
        initial= {{
            opacity:0,
            x:300,
            y:500,
            scale: "20%",
              }}
        whileInView={{
            opacity: 1,
            x: 300,
            y:160,
            scale: ["105%", "90%", "110%", "90%"],
            transition:{ 
              delay: 0, 
              duration: 1,
              when: "afterChildren",
              ease: "anticipate", 
            }}}
          viewport={{ once: false, amount: 0.6 }}
          className="w-32">
                    <motion.div
        key="two.grow"
        initial= {{
            scale: "100%",
              }}
        animate={{
            rotateX: [360, 180, 360],
            scale: ["90%", "70%", "100%", "70%", "100%", "90%"],
            transition:{
              ease: "anticipate",
              duration: 8,
              repeat: Infinity,
              delay: 0,
          }
            }}
            whileTap={{scale: 0.9}}
          className="-ml-64 w-32 -mt-32">
<Image
  src="/images/sparkle-red.png"
  width={100}
  height={100}
  objectFit={'contain'}
  alt="sparkle image"
  sizes="100vw"
  style={{
    width: "100%",
    height: "auto"
  }}></Image>
        </motion.div>
        </motion.div>
            <div className="z-10 flex flex-col-reverse md:flex-row md:mt-10 items-center md:justify-around mx-auto gap-10 p-5">
              <div className="flex-initial relative px-20 md:py-20 items-center max-w-xl">
                <h2> ABOUT A2IM</h2>
                <hr className="border-iwred my-5"></hr>
                <h4>The American Association of Independent Music (A2IM) is a 501(c)(6) not-for-profit trade organization that serves as a central voice for a diverse community of over 600 independently owned record labels operating within the United States. A2IM  represents their interests in the marketplace, in the media, on Capitol Hill, and as part of the global music community.</h4>
                
<ButtonInternal href='/tickets'>LEARN MORE</ButtonInternal>
              </div>
              
              <div className="flex-initial w-1/2 m-10 max-w-xl">
                <Image
                  src="/images/bg-mixer.webp"
                  alt='indie week opening reception'
                  width={300}
                  height={300}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain"
                  }} />
              </div>
            </div>
          </div>
          <h4 className="mx-auto text-center pb-10 max-w-5xl">A2IM Is The Collective Voice Of Independent Music. Our Mission Is To Promote Growth, Awareness, And Opportunities For Independent Music Through Advocacy, Education And Community.</h4>
        </AnimatePresence>
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto">
      <motion.div
      key="two"
      initial= {{
          opacity:0,
          x:200,
          y:300,
          scale: "20%",
            }}
      whileInView={{
          opacity:1,
          x: 400,
          y: 150,
          scale: ["105%", "80%", "90%", "105%"],
          transition:{ 
            delay: 1, 
            duration: 1,
            when: "afterChildren",
            ease: "anticipate", 
          }}}
        viewport={{ once: false, amount: 0.8 }}
        className="w-32 -mt-32 invisible md:visible">
                  <motion.div
      key="two.grow"
      initial= {{
          scale: "100%",
            }}
      animate={{
          rotateX: [360, 180, 360],
          scale: ["105%", "70%", "80%", "100%", "105%"],
          transition:{
            ease: "anticipate",
            duration: 5,
            repeat: Infinity,
            delay: 0,
        }
          }}
          whileTap={{scale: 0.9}}
        className="w-32">
<Image
src="/images/sparkle-red.png"
width={100}
height={100}
objectFit={'contain'}
alt="sparkle shape"
sizes="100vw"
style={{
  width: "100%",
  height: "auto",
  objectFit: "contain"
}}></Image>
      </motion.div>
      </motion.div>
        <div className="flex flex-col md:flex-row -mt-10 md:justify-around items-center mx-auto gap-10 p-5">
          <div className="flex-initial m-10 w-[400px]">
            <Image
              src="/images/bg-classroom.jpg"
              alt='indie week meeting room'
              width={500}
              height={500}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain"
              }} />
          </div>
          <div className="flex-initial relative max-w-2xl p-20 text-right">
            <h2>OUR MEMBERS</h2>
<hr className="border-iwred my-5"></hr>
            <ul className="mx-auto pb-8">
              <li className="text-2xl">
              A2IM’s diverse community includes music labels of all sizes and staffing levels across the United States, from Hawaii to Florida, representing musical genres as diverse as our membership, including bluegrass, blues, children’s, classical, comedy, country, dance/electronic, gospel, folk, Hawaiian, jazz, hip-hop, Latin, metal, new age, pop, R&B, reggae, roots, soca/caribbean, traditional American, world, and more. 
              </li>
              <li className="text-2xl">
              “Independent” doesn’t refer to a specific genre of music, nor does it mean lesser-known artists: A2IM member labels have issued music releases by artists including Taylor Swift, Mumford & Sons, The Lumineers, Adele, Alabama Shakes, Arcade Fire, Run the Jewels, Bon Iver, and many others.
              </li>
              <li className="text-2xl">
              28 Countries Represented
              </li>
            </ul>
            <Carousel responsive={responsive}>
  <div>
    <Link href="https://a2im.org">
<Image src={'/logos/A2IM-logos/A2IM-logo.png'} width={768} height={324} alt="a2im full logo"/>
</Link>
</div>
<div>
<Link href="https://a2im.org">
<Image src={'/logos/A2IM-logos/A2IM-logo-white.png'} width={768} height={324} alt="a2im full logo"/>
</Link>
</div>
<div>
<Link href="https://a2im.org">
<Image src={'/logos/A2IM-logos/A2IM-button-black.png'} width={1200} height={1200} alt="a2im button logo"/>
</Link>
</div>
<div>
<Link href="https://a2im.org">
<Image src={'/logos/A2IM-logos/A2IM-button-white.png'} width={1200} height={1200} alt="a2im button logo white"/>
</Link>
</div>
<div>
<Link href="https://a2im.org">
<Image src={'/logos/A2IM-logos/A2IM-logo.png'} width={768} height={324} alt="a2im full logo"/>
</Link>
</div>
<div>
<Link href="https://a2im.org">
<Image src={'/logos/A2IM-logos/A2IM-logo-white.png'} width={768} height={324} alt="a2im full logo"/>
</Link>
</div>
<div>
<Link href="https://a2im.org">
<Image src={'/logos/A2IM-logos/A2IM-button-black.png'} width={1200} height={1200} alt="a2im button logo"/>
</Link>
</div>
<div>
<Link href="https://a2im.org">
<Image src={'/logos/A2IM-logos/A2IM-button-white.png'} width={1200} height={1200} alt="a2im button logo white"/>
</Link>
</div>
<div>
<Link href="https://a2im.org">
<Image src={'/logos/A2IM-logos/A2IM-button-white.png'} width={1200} height={1200} alt="a2im button logo white"/>
</Link>
</div>
<div>
<Link href="https://a2im.org">
<Image src={'/logos/A2IM-logos/A2IM-button-white.png'} width={1200} height={1200} alt="a2im button logo white"/>
</Link>
</div>
<div>
<Link href="https://a2im.org">
<Image src={'/logos/A2IM-logos/A2IM-button-white.png'} width={1200} height={1200} alt="a2im button logo white"/>
</Link>
</div>
</Carousel>
<ButtonInternal href='/tickets'>PAST PROGRAMMING</ButtonInternal>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto pb-64 ">
    <h2>ABOUT A2IM</h2>
    <hr className="border-iwred my-5"></hr>
    <h4>The American Association of Independent Music (A2IM) is a 501(c)(6) not-for-profit trade organization that serves as a central voice for a diverse community of over 600 independently owned record labels operating within the United States. A2IM  represents their interests in the marketplace, in the media, on Capitol Hill, and as part of the global music community.

As an organization, A2IM is committed to protecting the value of independent musical contributions and influence on a policy level.
</h4>
</div>
<Board/>
<Staff/>
    </>
  );
}