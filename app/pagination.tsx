'use client';
import { GET_ALL_POSTS, GET_TOTAL_POSTS } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Router } from "next/router";

export function Posts({ Start, Limit }) {
  const router = useRouter()
  const { loading, error, data } = useQuery(GET_ALL_POSTS, { 
    variables: {
      PublicationState: "LIVE",
      Name: "Mainsite",
      Start,
      Limit,
    }});
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
  return (
    <div className="grid grid-cols-1 max-w-6xl mx-auto gap-10">
       {data.posts.data.map(posts => (
                <div key={posts.id} className="flex flex-row my-auto p-1 hover:scale-[1.01] max-w-[768px] shadow-2xl max-h-96 items-centercontent-center gap-3 a2im-border-wrap1 bg-white rounded-sm">
                  <div className="relative mx-auto w-1/4 h-[120px] overflow-hidden">
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
                    <div className="w-3/4 content-center items-center bg-white dark:bg-neutral-800 dark:text-white p-2 ">
                      <div className="max-h-[140px] ">
                        <Link href={`/${posts.attributes.slug}`} 
                          onClick={() => router.push(`/${posts.attributes.slug}`)}>
                            <h3 className="text-sm text-ellipsis  ...">{posts.attributes?.Title}</h3>
                         </Link>
                      </div>
                      <div className=" overflow-hidden">
                        <p className="text-ellipsis whitespace-normal ...">
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
      <Posts Start={postsOffset} Limit={20}/>
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
        className="mx-auto flex flex-row gap-3 py-20 text-lg font-bold uppercase dark:text-white active:text-a2imgreen"
      />
      </div>
    </div>
  );
}

