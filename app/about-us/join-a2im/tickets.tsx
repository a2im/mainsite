"use client";
import Image from "next/image"
import { motion } from "framer-motion"
import { ButtonInternal } from "../../button"

export default function MyTickets(){
    return (
        <>
        <div className="max-w-6xl mx-auto text-center">
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
alt="sparkle image"
sizes="100vw"
style={{
  width: "100%",
  height: "auto",
  objectFit: "contain"
}}></Image>
      </motion.div>
      </motion.div>
          <div className="z-10 flex flex-col md:flex-row md:mt-10 items-center md:justify-around mx-auto gap-10 p-5">
            <div className="flex-initial relative px-20 md:py-20 max-w-xl">
              <h2 className="text-4xl"> Get tickets and accommodations early to save more!</h2>
              <hr className="border-iwred my-5"></hr>
              <h4>
          We’re excited to host A2IM Indie Week in the heart of Manhattan at the sleek Crowne Plaza Hotel. Stay at the Indie Week HQ for discounted rooms, easy access to the conference site, and to make the most of our after hours events.
          </h4>
<ButtonInternal href='/tickets'>LEARN MORE</ButtonInternal>
            </div>
            <ul className="list-inside mx-auto iwborder px-8 py-10 list-disc">
              <h3>Ticket Pricing Timeline</h3>
              
            <li className="text-3xl py-10">
            Example Date 1
            </li>
            <li className="text-3xl py-10">
            Example Date 2
            </li>
            <li className="text-3xl py-10">
            Example Date 3
            </li>
          </ul>
      </div>
        </div>
        </>
    )
}