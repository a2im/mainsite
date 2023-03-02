import Image from "next/image"
import { Posts } from "../components/pagination"

export function RecentJobs(){
    return (
        <div className="bg-neutral-900 text-white w-full p-2 rounded-sm hover:scale-[1.01] max-w-[250px]">
            <h4 className="uppercase text-lg">Recent Jobs</h4>
            <hr className="a2im-border-wrap1 border-transparent mx-auto"></hr>
            <ul className="p-2 ">
                <li className="hover:scale-[1.01]">
                <div className="flex flex-row">
                    <div className="w-10 h-10 relative">
                    <Image src="/logos/A2IM-logos/A2IM-button-white.png"
                    alt="a2im button logo"
                    fill
                    style={{objectFit:"contain"}}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                        <h4 className="text-sm">Location</h4><span className="mx-1"><p>|</p></span><h4 className="text-sm"> COMPANY</h4>
                        </div>
                        <h4 className="text-sm uppercase">Job Title</h4>
                    </div>
                </div>
                </li>
                <li className="hover:scale-[1.01]">
                <div className="flex flex-row">
                    <div className="w-10 h-10 relative">
                    <Image src="/logos/A2IM-logos/A2IM-button-white.png"
                    alt="a2im button logo"
                    fill
                    style={{objectFit:"contain"}}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                        <h4 className="text-sm">Location</h4><span className="mx-1"><p>|</p></span><h4 className="text-sm"> COMPANY</h4>
                        </div>
                        <h4 className="text-sm uppercase">Job Title</h4>
                    </div>
                </div>
                </li>
                <li className="hover:scale-[1.01]">
                <div className="flex flex-row">
                    <div className="w-10 h-10 relative">
                    <Image src="/logos/A2IM-logos/A2IM-button-white.png"
                    alt="a2im button logo"
                    fill
                    style={{objectFit:"contain"}}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                        <h4 className="text-sm">Location</h4><span className="mx-1"><p>|</p></span><h4 className="text-sm"> COMPANY</h4>
                        </div>
                        <h4 className="text-sm uppercase">Job Title</h4>
                    </div>
                </div>
                </li>
                <li className="hover:scale-[1.01]">
                <div className="flex flex-row">
                    <div className="w-10 h-10 relative">
                    <Image src="/logos/A2IM-logos/A2IM-button-white.png"
                    alt="a2im button logo"
                    fill
                    style={{objectFit:"contain"}}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                        <h4 className="text-sm">Location</h4><span className="mx-1"><p>|</p></span><h4 className="text-sm"> COMPANY</h4>
                        </div>
                        <h4 className="text-sm uppercase">Job Title</h4>
                    </div>
                </div>
                </li>
                <li className="hover:scale-[1.01]">
                <div className="flex flex-row">
                    <div className="w-10 h-10 relative">
                    <Image src="/logos/A2IM-logos/A2IM-button-white.png"
                    alt="a2im button logo"
                    fill
                    style={{objectFit:"contain"}}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                        <h4 className="text-sm">Location</h4><span className="mx-1"><p>|</p></span><h4 className="text-sm"> COMPANY</h4>
                        </div>
                        <h4 className="text-sm uppercase">Job Title</h4>
                    </div>
                </div>
                </li>
                </ul>
            </div>
    )
}

export function RecentNews(){
    return (
        <div className="bg-neutral-900 text-white w-full p-2 rounded-sm hover:scale-[1.01] max-w-[250px]">
            <h4 className="uppercase text-lg">Recent News</h4>
            <hr className="a2im-border-wrap1 border-transparent mx-auto"></hr>
            <Posts Start={0} Limit={5}/>
            </div>
    )
}