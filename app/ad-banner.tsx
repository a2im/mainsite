'use client';

import { GET_ALL_ADS } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Link from "next/link"
import Image from "next/image"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


export default function AdBanner(){
  const { loading, error, data } = useQuery(GET_ALL_ADS, { 
    variables: {
      isActive: true,
      Name: "Libera Awards"
    }});
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    
return(
<div className="mx-auto justify-center items-center">
<Carousel
  swipeable={false}
  draggable={false}
  responsive={responsive}
  ssr={true}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all 2"
  transitionDuration={2000}
  arrows={false}
  showDots={false}
>
        {/* Map through the data */}
        {data.ads.data.map(ads => (
                <div key={ads.id} className="mx-auto">
                  <Link href={ads.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={ads.attributes.Asset.data.attributes.url}
                    height={ads.attributes.Asset.data.attributes.height} 
                    width={ads.attributes.Asset.data.attributes.width} 
                    alt={ads.attributes.Asset.data.attributes.alternativeText} 
                    className="mx-auto"
                    />
                    </Link>
                </div>
                
              )
            )}
            </Carousel>;
        </div>
)
} 