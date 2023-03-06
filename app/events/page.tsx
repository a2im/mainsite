import EventsCard from './events-card'
import { LargeJoinButtonSegmentLight } from '../../components/segments'

export const metadata = {
  title: 'A2IM - Events',
  description: 'A2IM - Events Founded by independents, for independents, A2IM.',
  openGraph: {
    title: 'A2IM - Events',
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

export default function Events() {
  return (
    <>
          <div className="grow shrink content-center bg-white dark:bg-neutral-800 dark:text-white">
<h2 className="pt-20 pb-10 grow font-bold align-middle text-center leading-tight">
  A2IM Events
  </h2>
  </div>
  <div className="bg-neutral-900 text-white">
  <EventsCard/>
  </div>
  <LargeJoinButtonSegmentLight/>
    </>
  )
}
