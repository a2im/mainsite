import Link from "next/link";
import Image from "next/image";
import { PostRelationResponseCollection, PostEntityResponseCollection } from "../../lib/gql/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export async function generateMetadata({ params, searchParams }) {
  const posts = await getPosts(params.slug)
  return { 
    title: posts.attributes?.Title,
    description: 'Founded by independents, for independents, A2IM.',
      openGraph: {
        title: `A2IM - ${posts?.attributes?.Title}`,
        url: 'https://a2im.org',
        images: [
          {
            url: '/logos/A2IM-logos/A2IM-logo.png',
            width: 800,
            height: 600,
          },
        ],
  },
  robots: {
    index: true,
  } };
}

async function getPosts(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/posts?populate[0]=coverImage&filters[slug][$eq]=${slug}`, { next: { revalidate: 60 }});
  return res.json();
}

export default async function MyPost({params,}: { params: { 
  slug : String,
 }}) {
const posts: PostRelationResponseCollection = await getPosts(params.slug)
  return (
  <>
  <div className=" dark:bg-neutral-600 pb-20">
    <div className="max-w-5xl mx-auto text-4xl ">
<Link href={"/news"}>
    <FontAwesomeIcon icon="arrow-left" className="ml-10 hover:scale-105 pb-5"/>
</Link>
</div>
  <div className="mx-auto a2im-border-wrap1 max-w-5xl p-3 gap-5 mb-20 shadow-4xl rounded-sm">
  {posts?.data.map(posts => (
            <div key={posts.id} className="mx-auto bg-neutral-50 text-black dark:bg-neutral-800 dark:text-white">
             <div className="flex flex-row justify-content-evenly">
              <Link href={`/${posts?.attributes?.slug}`}><h3 className="max-w-xl p-5 hover:scale-105">{posts.attributes?.Title}</h3></Link>
              <div className="relative w-[300px] h-[250px]">
              <Image 
                src={posts.attributes?.coverImage?.data?.attributes?.url}
                fill
                alt={posts.attributes?.coverImage?.data?.attributes?.alternativeText}
                className="mx-auto hover:scale-105"
                style={{objectFit:"contain"}}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                /> 
                </div>
                
                </div>
                <div className="p-10" dangerouslySetInnerHTML={{__html: `${posts?.attributes?.Body}`}}>
                </div>
            </div>
  )
  )}
        </div>
    </div>
    </>
  )
}
