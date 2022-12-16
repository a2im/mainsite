import Link from "next/link";
import Image from "next/legacy/image";
import { PostRelationResponseCollection, PostEntityResponseCollection } from "../../../lib/gql/types";
import Footer from '../../footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default async function MyPost({params,}: { params: { 
  slug : String,
 }}) {

const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/posts?populate[0]=coverImage&filters[slug][$eq]=${params.slug}`);
const posts: PostRelationResponseCollection = await res.json()

  return <div className="pt-16 bg-stone-50 pb-20">
    <div className="max-w-5xl mx-auto text-4xl ">
<Link href="/news">
    <FontAwesomeIcon icon="arrow-left-long" className="ml-16 hover:scale-105"/>
</Link>
</div>
  <div className="mx-auto Borderswap5 max-w-5xl p-10 gap-5 mb-20">
  {posts?.data.map(posts => (
            <div key={posts.id} className="mx-auto p-20 LiberaBorder2 bg-white text-black">
             <div className="flex flex-row justify-content-evenly">
              <Link href={`/news/${posts?.attributes?.slug}`}><h3 className="max-w-xl p-10 hover:scale-105">{posts.attributes?.Title}</h3></Link>
              <div className="relative w-1/2">
              <Image 
                src={posts.attributes?.coverImage?.data?.attributes?.url}
                layout="fill"
                objectFit="contain"
                alt={posts.attributes?.coverImage?.data?.attributes?.alternativeText}
                className="mx-auto hover:scale-105"
                /> 
                </div>
                
                </div>
                <div className="p-10" dangerouslySetInnerHTML={{__html: `${posts?.attributes?.Body}`}}>
                </div>
            </div>
  )
  )}
        </div>
        <Footer />
    </div>
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/posts?populate=*`);
  const data: PostEntityResponseCollection = await res.json();
  return data?.data?.map((data) => ({
    slug: data.attributes.slug,
    id: data.id,
    Title: data.attributes.Title,
    url: data.attributes.coverImage.data.attributes.url,
    height: data.attributes.coverImage.data.attributes.height,
    width: data.attributes.coverImage.data.attributes.width,
    alternativeText: data.attributes.coverImage.data.attributes.alternativeText,
    Excerpt: data.attributes.Excerpt,
    Body: data.attributes.Body,
  }))
}
