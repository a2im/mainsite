import MyNavbar from '../navbar';
import Image from 'next/image';
import Sidebar from '../sidebar';
import Leaderboard from '../leaderboard';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 

  return (
    <>
      <MyNavbar/>
      <div className="py-8"></div>
      <Leaderboard/>
      <div className="flex flex-col-0 md:flex-col-2 mx-auto max-w-5xl gap-4">
            <div className="mx-auto max-w-3xl bg-white md:shadow-2xl">
            {children}
            </div>
            <Sidebar/>
      </div>
    </>
  )
}
