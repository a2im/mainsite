import EventsCard from './events-card'
import { LargeJoinButtonSegmentLight } from '../../components/segments'

export default function Events() {
  return (
    <>
          <title>A2IM - Events</title>
          <meta
          name="description"
          content="Founded by independents, for independents, A2IM."
          key="desc"
        />
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
