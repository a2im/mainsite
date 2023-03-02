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
              <div className="relative w-10 h-10">
                <Image src={'/logos/A2IM-logos/A2IM-logo.png'} 
                alt="a2im full logo"
                fill
                style={{objectFit:"contain"}}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"/>
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://a2im.org">
              <div className="relative w-10 h-10">
                <Image src={'/logos/A2IM-logos/A2IM-logo-white.png'} 
                alt="a2im full logo"
                fill
                style={{objectFit:"contain"}}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"/>
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://a2im.org">
            <div className="relative w-10 h-10">
                <Image src={'/logos/A2IM-logos/A2IM-button-black.png'} 
                alt="a2im button logo"
                fill
                style={{objectFit:"contain"}}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"/>
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link href="https://a2im.org">
              <div className="relative w-10 h-10">
                <Image src={'/logos/A2IM-logos/A2IM-logo.png'} 
                alt="a2im full logo"
                fill
                style={{objectFit:"contain"}}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"/>
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://a2im.org">
              <div className="relative w-10 h-10">
                <Image src={'/logos/A2IM-logos/A2IM-logo-white.png'} 
                alt="a2im full logo"
                fill
                style={{objectFit:"contain"}}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"/>
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://a2im.org">
            <div className="relative w-10 h-10">
                <Image src={'/logos/A2IM-logos/A2IM-button-black.png'} 
                alt="a2im button logo"
                fill
                style={{objectFit:"contain"}}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"/>
              </div>
            </Link>
          </div>
</Carousel>
    )
}