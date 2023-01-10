import { PaginatedItems } from './pagination'
import Footer from '../footer'

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
          <PaginatedItems postsPerPage={20} />
          </div>
    </div>
  )
}

