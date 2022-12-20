import React from "react"
import Image from "next/image";
import MemberBenefits from "./member-benefits";
import { ButtonInternal, ButtonExternal } from "./button";
import { PolicyStatement, JoinButtonSegment, LargeJoinButtonSegment  } from "./segments";

function Join1 () {
    return (
      <div className="mx-auto">
          <div className="max-w-6xl mx-auto px-5">
            <div className="z-10 flex flex-col-reverse md:flex-row items-center md:justify-around mx-auto gap-10">
              <div className="flex-initial relative md:py-20 items-center max-w-xl">
                <h4>Since 2005, when A2IM formed, our sector has grown from a market share
                   of under 25% to 37.32%. This significant increase illustrates the 
                   leadership role our sector has held over the last decade through our core objectives
                </h4>

              </div>
              <div className="flex-initial w-1/2 m-10 max-w-xl">
                <Image
                  src="/images/red-arrow.png"
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
          </div>
          )};

function BenefitList () {
      return (
          <div className="mx-auto px-5 py-20">
            <h2 className="text-center pb-10">Member Benefits</h2>
            <div className="mx-auto max-w-6xl">
              <MemberBenefits/>
            </div>
          </div>
      )}

function Join3 () {
      return ( 
    <div className="mx-auto pt-5">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-6xl flex flex-col-reverse md:flex-row-reverse md:justify-around items-center mx-auto gap-10">
          <div className="relative m-10 w-[400px] h-[400px]">
            <Image
              src="/images/bg-community.webp"
              alt='a2im community photo'
              fill={true}
              sizes="100vw"
              style={{
                objectFit: "contain"
              }} />
          </div>
          <div className="relative max-w-lg">
            <h2>BEING AN A2IM MEMBER</h2>
<hr className="border-a2impurple my-5"></hr>
            <p>
            A2IM is a 100% dues-supported organization. We recognize the 
            entrepreneurial spirit of our members and the need to do what’s 
            in each individual business’s best interests.
            No A2IM member gives up an ounce of their Independence. 
            <br></br>
            <br></br>
            Our organization embraces various operations and business practices; 
            A2IM never negotiates deals on your behalf. Instead, we foster a 
            climate of respect towards Independent businesses, and strive 
            for equity for all content creators.
            </p>
          </div>
        </div>
      </div>
    </div>
      )}


export default function JoinUS (){
  return (
    <>
    <Join1/>
    <JoinButtonSegment/>
    <BenefitList/>
    <LargeJoinButtonSegment/>
    <Join3/>
    </>
  )
}