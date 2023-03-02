import { ButtonInternal, ButtonExternal } from "../app/button";
import Link from "next/link";
import Image from "next/image";

export function JoinButtonSegment () {
    return (
        <div className="p-5 bg-neutral-900 text-white">
        <div className="flex mx-auto justify-center gap-3">
        <ButtonExternal href='https://membership.a2im.org/member-application'>JOIN NOW</ButtonExternal>
        </div>
        </div>
)}

export function LargeJoinButtonSegmentDark () {
    return (
        <div className="p-5 bg-neutral-900 text-white mx-auto">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-xl">ARE YOU READY TO JOIN OUR COMMUNITY?</h3>
            <div className="grid grid-cols-0 md:grid-cols-2 mx-auto justify-center">
        <ButtonExternal href='https://membership.a2im.org/member-application'>JOIN NOW</ButtonExternal>
        <ButtonExternal href='https://membership.a2im.org/memberdirectory/FindStartsWith?term=%23%21'>COMMUNITY</ButtonExternal>
        </div>
        </div>
        </div>
)}

export function LargeJoinButtonSegmentLight () {
    return (
        <div className="p-5 bg-stone-50 dark:bg-stone-800 dark:text-white text-black mx-auto">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-xl">ARE YOU READY TO JOIN OUR COMMUNITY?</h3>
        <div className="grid grid-cols-0 md:grid-cols-2 mx-auto justify-center">
        <ButtonExternal href='https://membership.a2im.org/member-application'>JOIN NOW</ButtonExternal>
        <ButtonExternal href='https://membership.a2im.org/memberdirectory/FindStartsWith?term=%23%21'>COMMUNITY</ButtonExternal>
        </div>
        </div>
        </div>
)}

export function MissionStatement () {
    return (
            <div className="relative p-10 bg-neutral-900 text-white">
            <div className="flex flex-col mx-auto justify-center">
                <div className="flex flex-row mx-auto">
                    <div className="relative w-12 h-12 hover:scale-105 invisible md:visible">
                    <Image
                    src="/logos/A2IM-logos/A2IM-button-white.png"
                    alt="a2im logo button"
                    fill
                    style={{objectFit:"contain"}}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    />
                    </div>
            <h2 className="text-center pb-5">MISSION STATEMENT:</h2>
            </div>
            <h4 className="mx-auto text-center max-w-5xl">
            A2IM Is The Collective Voice Of Independent Music. <br></br>
            Our Mission Is To Promote Growth, Awareness, 
            And Opportunities For Independent Music Through 
            Advocacy, Education And Community.
            </h4>
            </div>
            </div>
    )}
    
export function IndieStatement () {
    return ( 
        <div className="p-10 bg-neutral-900 text-white">
        <h4 className="mx-auto text-center pb-10 max-w-5xl text-lg">“Independent” doesn’t refer to a specific genre of music, nor does it mean lesser-known artists: A2IM member labels have issued music releases by artists including Taylor Swift, Mumford & Sons, The Lumineers, Adele, Alabama Shakes, Arcade Fire, Run the Jewels, Bon Iver, and many others.</h4>
        </div>
        )}

export function PolicyStatement () {
    return ( 
    <div className="p-10 bg-neutral-900 text-white">
        <h4 className="mx-auto text-center pb-5 max-w-5xl text-lg">
            As an organization, A2IM is committed to protecting 
            the value of independent musical contributions and 
            influence on a policy level.</h4>
        </div>
    );}