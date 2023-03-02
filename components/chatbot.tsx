'use client';
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function Chatbot({interchanges}) {
  const { data: session } = useSession()
  const [userQuestion, setUserQuestion] = useState('')
  const [allow, setAllow] = useState(false)
  const [interchange, setInterchange] = useState([])
  
  useEffect(() => {
      const initialBotTyping = async (setInterchange, setAllow) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      let initial = true
      setInterchange([{owner: false, text: ''}])
      setAllow(true)
      setInterchange([{
      owner: false,
      text: tranformInterchanges(interchanges, initial)
   }])
      };
    initialBotTyping(setInterchange, setAllow);
    scrollDown()  
   }, [interchanges])
   const handleSubmit = async (e) => {
    e.preventDefault()
    if(!userQuestion || !allow) return
    const uQ = userQuestion
    const newInterchange = [...interchange, {
      owner: true,
      text: userQuestion
    }]
    setInterchange(newInterchange)
    setUserQuestion('')
    setAllow(false)
    getBotAnswer(interchanges, setInterchange,  uQ, newInterchange, setAllow)
    scrollDown()
  }
  return (
<div className="flex flex-col font-mono items-center justify-center z-80">
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col bg-neutral-200 dark:bg-neutral-800 overflow-auto p-2 w-full" style={{ height: "80vh"}}>
            {interchange.map((chat,i) => (
              chat.owner ? 
              <div key={i} className = "user flex flex-row my-2 w-full p-2">
              <span className = "w-2/3"></span>
              <span className = "w-1/3 bg-neutral-100 dark:bg-neutral-800 p-2 rounded">
                <div className="flex-col">
                  <h2 className="text-xs text-neutral-400 dark:text-a2imblue">{session.user.name}</h2>
                  <ReactMarkdown className="bottext dark:text-white" remarkPlugins={[remarkGfm]}>{chat.text}</ReactMarkdown>
                </div>
               
              </span>
            </div>
             :   
              <div key={i} className = "bot bg-neutral-100 dark:bg-neutral-800 w-3/4  p-2 rounded">
                <div className="flex flex-col relative">
                <h2 className="text-xs animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">A2IM Assistant</h2>
                <ReactMarkdown className="bottext dark:text-white" remarkPlugins={[remarkGfm]}>{chat.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            <div id="scrollTo"></div>
            </div>
            <footer className = "flex flex-row justify-between items-center p-1 h-5/6  w-full bg-black">
            <div className = "flex flex-row justify-between  bg-white w-full">
              <input className = " bg-gray-200 w-2/3 p-2 " placeholder="Type a message" value={userQuestion} onChange={ (e) => { setUserQuestion(e.target.value)}}/>
              <button className = " bg-black p-2 ml-2 w-1/3  text-white" type="submit"> Send</button>
            </div>
            </footer>
          </form>
        </div>
  )
}

const createMarkup = (text) => {
  return {__html: text};
}

export const tranformInterchanges = (interchanges, initial = false) => { 
  let initialText = initial ? `
  Welcome to A2IM's Knowledge-Base, glad to have you here 🥰
  
  Tell me what you would like to know:

  `: ''
  interchanges.data.map((e, i) => {
      initialText += 
      `${(i)}. ${e.attributes.question}
      `
  })
  return initialText
}

export const searchInterchange = (interchanges, question) => {
  let result = interchanges.data.find(e => e.attributes.question.toLowerCase().includes(question.toLowerCase()))
  console.log(result?.attributes?.answer)
  if(result?.attributes?.answer === undefined ) 
  return`
  Cant seem to understand your question, please try again 😔

  
  Here are the options again:

  ${tranformInterchanges(interchanges)}
  `
  else return result?.attributes?.answer
};

export const showBotTyping = async (setInterchange, prevState, setAllow) => {
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 700));
  setInterchange([...prevState, {
    owner: false,
    text: 'A2IM Assistant is typing.'
  }])
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 700));
  setInterchange([...prevState, {
    owner: false,
    text: 'A2IM Assistant is typing..'
  }])
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 700));
  setInterchange([...prevState, {
    owner: false,
    text: 'A2IM Assistant is typing...'
  }])
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 700));
  setAllow(true)
  scrollDown()
}


export const getBotAnswer = async (interchanges, setInterchange, question, prevState, setAllow) => {
  await showBotTyping(setInterchange, prevState, setAllow)
  scrollDown()
  setInterchange([...prevState, {
    owner: false,
    text: searchInterchange(interchanges,question)
  }])
  scrollDown()
}

const scrollDown = () => {
  document.getElementById('scrollTo').scrollIntoView({ behavior: "smooth", block: "end"});
}