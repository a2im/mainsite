import Intro from './intro'
import Sidebar from '../components/sidebar';
import { HomeLeaderboard } from '../components/leaderboard';
import { Posts } from '../components/pagination';
import { Suspense } from 'react';
import Loading from './loading';
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

export const dynamic = 'force-dynamic'

export default async function Home() {
  const session = await getServerSession(authOptions)
    return (
      <>
    <div className="relative">
      <title>A2IM - Home</title>
      <meta
          name="description"
          content="Founded by independents, for independents, A2IM."
          key="desc"
        />
      <div className="py-8"></div>
      <HomeLeaderboard/>
      <div className="flex flex-col-0 md:flex-col-2 mx-auto max-w-5xl gap-4">
            <div className="mx-auto max-w-3xl">
          <Intro/>
          <Suspense fallback={<Loading start={0} end={10}/>}>
          <Posts Start={0} Limit={10}/>
          </Suspense>
          </div>
            <Sidebar/>
    </div>
    </div>
    </>
  )
}