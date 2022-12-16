'use client';
import Link from "next/link"
import Image from "next/image";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

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
  
export default function LogoCarousel(){
    return(
        <Carousel responsive={responsive}>
  <div className="relative">
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
    )
}