import Image from "next/image"

export function RecentJobs(){
    return (
        <div className="bg-stone-900 text-white w-full p-2 rounded-sm hover:scale-[1.01]">
            <h4>Latest Jobs</h4>
            <hr></hr>
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