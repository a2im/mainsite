import SocialFollow from "../../components/social-follow"

export default function Program() {
  return (
    <div>
          <title>A2IM - Program</title>
          <div className="grow shrink content-center">
<h2 className="pt-20 grow font-bold align-middle text-center leading-tight">
Program
  </h2>
  </div>
          <div className="mx-auto mb-8 py-20"> 
            <div className='flex max-w-4xl mb-10 mx-auto gap-10 justify-center'> 
              <div className='mx-auto pb-10 p-4'>
                <h3 className="mb-6 text-center">
                  COMING SOON 
                </h3>
                <h4 className="text-center">Follow us on social media for the latest updates and subscribe
to the Libera Awards mailing list to hear first about program availability!</h4>
              <div className="max-w-lg pt-20 mx-auto">
              <SocialFollow/>
              </div>
              </div>
              </div>
          </div>
    </div>
  )
}
