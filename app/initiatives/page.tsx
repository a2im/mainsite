import Footer from '../footer'
import InitiativeCard from './initiative-card'
import { LargeJoinButtonSegmentLight } from '../segments'

export default function A2IMInitiatives() {
  return (
    <div>
          <title>A2IM - Initiatives</title>
          <div className="grow shrink content-center">
<h2 className="pb-10 pt-20 grow font-bold align-middle text-center leading-tight">
  A2IM Initiatives
  </h2>
  </div>
  <div className="bg-neutral-900 text-white">
          <InitiativeCard/>
          </div>
          <LargeJoinButtonSegmentLight/>
    </div>
  )
}
