"use client";

import React, { useId, useState } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const id = useId();
   // States for contact form fields
   const [fullname, setFullname] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
 
   //   Form validation state
   const [errors, setErrors] = useState({});
 
   //   Setting button text on form submission
   const [buttonText, setButtonText] = useState("Send");
 
   // Setting success or failure messages states
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   const [showFailureMessage, setShowFailureMessage] = useState(false);
 
   // Validation check method
   const handleValidation = () => {
     let tempErrors = {};
     let isValid = true;
 
     if (fullname.length <= 0) {
       tempErrors["fullname"] = true;
       isValid = false;
     }
     if (email.length <= 0) {
       tempErrors["email"] = true;
       isValid = false;
     }
     if (subject.length <= 0) {
       tempErrors["subject"] = true;
       isValid = false;
     }
     if (message.length <= 0) {
       tempErrors["message"] = true;
       isValid = false;
     }
 
     setErrors({ ...tempErrors });
     console.log("errors", errors);
     return isValid;
   };
 
   //   Handling form submit
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     let isValidForm = handleValidation();
 
     if (isValidForm) {
      setButtonText("sending");
       const res = await fetch("./api/sendgrid", {
         body: JSON.stringify({
           email: email,
           fullname: fullname,
           subject: subject,
           message: message,
         }),
         headers: {
           "Content-Type": "application/json",
         },
         method: "POST",
       });
 
       const { error } = await res.json();
       if (error) {
         console.log(error);
         setShowSuccessMessage(false);
         setShowFailureMessage(true);
         setButtonText("Send");
         return;
       };
       setShowSuccessMessage(true);
       setShowFailureMessage(false);
       setButtonText("Sent!");
     }
     console.log(fullname, email, subject, message);
   };
  return (
            <form
            className="rounded shadow-4xl flex flex-col p-5 hover:scale-105">
      <h4 className="text-center text-2xl font-bold pb-5">
        SEND US A MESSAGE
        </h4>
      <label 
      htmlFor="fullname" 
      className="text-l">
        Full name
        <span className="text-a2imred dark:text-stone-50">*</span>
        </label>
      <input 
      id={id} 
      type="text" 
      value={fullname} 
      onChange={e => setFullname(e.target.value)} name="fullname" className="bg-transparent border-b py-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-a2imgreen font-light text-stone-300" />
      <label htmlFor="email" className="text-l">E-mail<span className="text-a2imred">*</span></label>
      <input id={id} type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" className="bg-transparent border-b py-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-a2imgreen font-light text-stone-300" />
      <label htmlFor="subject" className="text-l">Subject<span className="text-a2imred">*</span></label>
      <input id={id} type="text" value={subject} onChange={e => setSubject(e.target.value)} name="subject" className="bg-transparent border-b py-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-a2imgreen font-light text-stone-300" />
      <label htmlFor="message" className="text-l">Message<span className="text-a2imred">*</span></label>
      <textarea id={id} value={message} onChange={e => setMessage(e.target.value)} name="message" className="bg-transparent border-b py-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-a2imgreen font-light text-stone-300"></textarea>
      <div className="flex flex-row items-center justify-start">
        <button 
            className="max-h-21 justify-center leading-tight mx-auto mt-10 hover:scale-105 rounded shadow-4xl bggradient"
            onClick={handleSubmit}><h3 className="align-middle text-white text-2xl p-3 truncate font-bold tracking-tighter leading-tight">
            {buttonText}
            </h3>
        </button>
      </div>
      { showFailureMessage === true && (<div>Error! Please try again.  If you continue to encounter problems, please contact <Link href="mailto:support@a2im.org">support@a2im.org</Link></div>) }
   { showSuccessMessage === true && (<h4 className="text-center">Please allow up to 48 hours for us to review your message.  Thanks!</h4>) }
    </form>
  )
}
