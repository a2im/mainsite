import Footer from '../footer'
import EventsCard from './events-card'
import { LargeJoinButtonSegmentLight } from '../segments'

export default function Events() {
  return (
    <>
          <title>A2IM - Events</title>
          <div className="grow shrink content-center">
<h2 className="pt-20 pb-10 grow font-bold align-middle text-center leading-tight">
  Events
  </h2>
  </div>
  <div className="bg-neutral-900 text-white">
  <EventsCard/>
  </div>
  <LargeJoinButtonSegmentLight/>
          <Footer/>
    </>
  )
}
