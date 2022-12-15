"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ButtonExternal } from "../button";

export default function InitiativeCard(){
  return (


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
          className="-ml-64 w-32">
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
        <h2 className="text-4xl"> Crowne Plaza Times Square</h2>
                <hr className="border-iwred my-5"></hr>
        <div className="flex flex-col-reverse md:flex-row">
                <div className="flex flex-col">
            <div className="justify-center items-center text-center my-auto mx-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.058312196947!2d-73.98725238459359!3d40.760742179326584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258567367bf3f%3A0x94b2c1c08294f791!2sCrowne%20Plaza%20Times%20Square%20Manhattan%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sus!4v1669928501346!5m2!1sen!2sus" width="600" height="450" loading="lazy" className="display-1 mx-auto"></iframe>
      </div>
              </div>
              <div className="my-auto">
              <ul className="list-inside mx-auto px-10">
              <h4>Special rates for conference attendees are available now. Reserve your room today to maximize your A2IM Indie Week experience. Spaces are limited!</h4>
              <li className="text-3xl">
                <div className="">
              Crowne Plaza 
              One King Bed 
              $309 +tax
              <ButtonExternal href="https://a2im.org" >Book Now!</ButtonExternal>
              </div>
              </li>
              <li className="text-3xl">
                <div className="">
              Crowne Plaza 
              Two Queen Beds
              $329 +tax
              <ButtonExternal href="https://a2im.org">Book Now!</ButtonExternal>
              </div>
              </li>
            </ul>
            </div>
            </div>
                <hr className="border-iwred my-5"></hr>
        </div>
          )
        }