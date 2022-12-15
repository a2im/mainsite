import Footer from '../footer'
import InitiativeCard from './initiative-card'

export default function Hotels() {
  return (
    <div>
          <title>A2IM - Initiatives</title>
          <div className="grow shrink content-center">
<h2 className="pt-20 grow font-bold align-middle text-center leading-tight">
  Initiatives
  </h2>
  </div>
          <InitiativeCard/>
          <Footer/>
    </div>
  )
}
