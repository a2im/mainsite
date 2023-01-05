'use client';
import { GET_ALL_POSTS, GET_TOTAL_POSTS } from "../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Router } from "next/router";

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
                  <div className="relative bg-white mx-auto h-[140] overflow-hidden">
                  <Image 
                    src={posts.attributes.coverImage.data.attributes.url}
                    fill
                    style={{objectFit: "contain"}}
                    alt={posts.attributes.coverImage.data.attributes.alternativeText} 
                    className="mx-auto object-center"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    />
                    </div>
                    <div className="">
                      <div className="max-h-[140px]">
                    <Link href={`/${posts.attributes.slug}`} 
                    onClick={() => router.push(`/${posts.attributes.slug}`)}>
                      <h3 className="text-sm text-ellipsis ...">{posts.attributes?.Title}</h3>
                    </Link>
                    </div>
                    <div className="static h-[100px] overflow-hidden">
                    <p className="text-ellipsis whitespace-normal shadow-xl ...">
                    {posts.attributes?.Excerpt}
                    </p>
                    </div>
                    </div>
                </div>
              )
            )}
    </div>
  );
}

export function PaginatedItems({ postsPerPage }) {
  const router = useRouter()
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
  const pageCount = data.posts.meta.pagination.pageCount;

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newPage = event.selected * postsPerPage;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newPage}`
    );
    setPostsOffset(newPage);
  };

  return (
    <div id="container" >
      <Posts Start={postsOffset} />
      <div className="flex flex-row max-w-6xl mx-auto justify-center content-center text-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeLinkClassName="text-a2imgreen"
        className="mx-auto flex flex-row gap-3 py-20 text-lg font-bold uppercase active:text-a2imgreen"
        onClick={() => router.forward()}
      />
      </div>
    </div>
  );
}

