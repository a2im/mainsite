import Footer from '../footer';
import ContactForm from './contact-form';

export default function Contact() {
  
  return (
    <div>
      <title>A2IM - Contact Us</title>
      <div className="grow shrink content-center">
        <h2 className="pt-20 grow font-bold align-middle text-center leading-tight">
          Contact
          </h2>
      </div>
      <div className="max-w-2xl mx-auto py-20 px-10">
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}
