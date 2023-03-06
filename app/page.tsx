import Intro from './intro'
import { Posts } from '../components/pagination';
import { Suspense } from 'react';
import Loading from './loading';
import ScrollNav from '@/components/scroll-nav';

export const dynamic = 'force-dynamic'

export const metadata = {
  description: 'Founded by independents, for independents, A2IM.',
  openGraph: {
    title: 'A2IM - Home',
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
  }
}

export default async function Home() {
  
    return (
      <>
    <div className="relative">
            <div className="mx-auto flex flex-row gap-5">
            <ScrollNav/>
            <div>
          <Intro/>
          <Suspense fallback={<Loading start={0} end={10}/>}>
          <Posts Start={0} Limit={10}/>
          </Suspense>
          </div>
          </div>
    </div>
    </>
  )
}