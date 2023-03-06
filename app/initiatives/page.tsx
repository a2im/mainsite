import InitiativeCard from './initiative-card'
import { LargeJoinButtonSegmentLight } from '../../components/segments'

export const metadata = {
  title: 'A2IM - Initiatives',
  description: 'A2IM - Initiatives Founded by independents, for independents, A2IM.',
  openGraph: {
    title: 'A2IM - Initiatives',
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

export default function A2IMInitiatives() {
  return (
    <div>
          <div className="grow shrink content-center">
<h2 className="pb-10 pt-20 grow font-bold align-middle text-center leading-tight dark:text-white">
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
