import ContactForm from '../../components/contact-form';

export default function Contact() {
  
  return (
    <div>
      <title>A2IM - Contact Us</title>
      <meta
          name="description"
          content="Founded by independents, for independents, A2IM."
          key="desc"
        />
      <div className="grow shrink content-center">
        <h2 className="pt-20 grow font-bold align-middle text-center leading-tight dark:text-white">
          Contact
          </h2>
      </div>
      <div className="max-w-2xl mx-auto py-20 px-10">
        <ContactForm/>
      </div>
    </div>
  )
}
