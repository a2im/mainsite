import AboutUS from './about-us'
import A2IMStaff from '../../components/staff'


export default function About() {
  return (
    <div className="mx-auto justify-center">
          <title>A2IM - About Us</title>
          <meta
          name="description"
          content="Founded by independents, for independents, A2IM."
          key="desc"
        />
          <AboutUS/>
          <A2IMStaff/>
    </div>
  )
}
