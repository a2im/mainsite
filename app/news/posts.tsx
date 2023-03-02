'use client';
import {useRouter} from "next/navigation";
import { GET_ALL_POSTS } from "../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Link from "next/link";
import Image from "next/image";
import Loading from "../loading";


export function PostsList({currentPage}) {
  const router = useRouter()
  const { loading, error, data } = useQuery(GET_ALL_POSTS, { 
    variables: {
      PublicationState: "LIVE",
      Name: "Mainsite",
      Page: {currentPage}
    }});
    if (loading) return (<Loading start={0} end={20}/>);
    if (error) return <p>Error</p>
    return (
      <div className="mb-20">
      <div className="relative animate-pulse grid grid-cols-1 mx-auto p-10 gap-10 z-0 max-w-6xl">
       {/* Map through the data */}
       {data.posts.data.map(posts => (
                <div key={posts.id} className="mx-auto p-2 hover:scale-105 shadow-2xl w-64 max-h-96">
                  <div className="relative bg-white mx-auto h-[100] overflow-hidden">
                  <Image 
                    src={posts.attributes.coverImage.data.attributes.url}
                    fill
                    style={{objectFit: "cover"}}
                    alt={posts.attributes.coverImage.data.attributes.alternativeText} 
                    className="mx-auto object-center"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    />
                    </div>
                    <div className="">
                      <div className="max-h-[140px]">
                    <Link href={`/news/${posts.attributes.slug}`} 
                    onClick={() => router.push(`/news/${posts.attributes.slug}`)}>
                      <h3 className="text-lg text-ellipsis overflow-hidden ...">{posts.attributes?.Title}</h3>
                    </Link>
                    </div>
                    <p className="text-ellipsis overflow-hidden ...">
                    {posts.attributes?.Excerpt}
                    </p>
                    </div>
                </div>
              )
            )}
            </div>
        </div>
    );
}

