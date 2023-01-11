import { PaginatedItems } from '../pagination'
import Loading from './loading'
import { Suspense } from 'react'

export default function News() {
  return (
    <div>
          <title>A2IM - NEWS</title>
          <div className="relative grow shrink content-center">
<h2 className="py-10 grow font-bold align-middle text-center leading-tight dark:text-white">
  NEWS
  </h2>
  </div>
      <div id='container'>
        <Suspense fallback={<Loading start={0} end={20}/>}>
          <PaginatedItems postsPerPage={20} />
          </Suspense>
          </div>
    </div>
  )
}

