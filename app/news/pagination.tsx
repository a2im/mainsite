'use client';
import { GET_ALL_POSTS, GET_TOTAL_POSTS } from "../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Posts({ Start }) {
  const router = useRouter()
  const { loading, error, data } = useQuery(GET_ALL_POSTS, { 
    variables: {
      PublicationState: "LIVE",
      Name: "Mainsite",
      Start,
    }});
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
  return (
    <div className="grid grid-cols-0 md:grid-cols-4 max-w-6xl mx-auto gap-10">
       {data.posts.data.map(posts => (
                <div key={posts.id} className="mx-auto p-2 hover:scale-105 shadow-2xl w-64 max-h-96">
                  <div className="relative LiberaBorder2 bg-white mx-auto h-[100] overflow-hidden">
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
  );
}

export function PaginatedItems({ postsPerPage }) {
  const [postsOffset, setPostsOffset] = useState(0);
  const endOffset = postsOffset + postsPerPage;
  console.log(`Loading items from ${postsOffset} to ${endOffset}`);
  const { loading, error, data } = useQuery(GET_TOTAL_POSTS, { 
    variables: {
      PublicationState: "LIVE",
      Name: "Mainsite",
      postsOffset,
    }});
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
  const pageCount = Math.ceil(data.posts.meta.pagination.pageCount / postsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newPage = (event.selected * postsPerPage) % data.posts.meta.pagination.pageCount;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newPage}`
    );
    setPostsOffset(newPage);
  };

  return (
    <div id="container" >
      <Posts Start={postsOffset} />
      <div className="max-w-6xl mx-auto justify-center content-center text-center inline">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={data.posts.meta.pagination.pageCount}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="mx-auto"
      />
      </div>
    </div>
  );
}

