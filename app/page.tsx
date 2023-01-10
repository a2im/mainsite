import Intro from './intro'
import MyNavbar from './navbar'
import Sidebar from './sidebar';
import { HomeLeaderboard } from './leaderboard';
import { Posts } from './pagination';

export default function Home() {
  return (
    <div >
      <title>A2IM - Home</title>
      <MyNavbar/>
      <div className="py-8"></div>
      <HomeLeaderboard/>
      <div className="flex flex-col-0 md:flex-col-2 mx-auto max-w-5xl gap-4">
            <div className="mx-auto max-w-3xl">
          <Intro/>
          <Posts Start={0} Limit={10}/>
          </div>
            <Sidebar/>
    </div>
    </div>
  )
}