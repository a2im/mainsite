import './globals.css'
import { Providers } from '../components/providers';
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import AuthContext from '../components/next-auth-provider';
import MyNavbar from '../components/nav'
import LoginButton from '../components/login'
import Chatbot from '@/components/chatbot';
import MyModal from '../components/modal'
import Footer from './footer';

import React from 'react';

config.autoAddCss = false
library.add(fas)

export const runtime = 'nodejs'

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/interchanges`, { next: { revalidate: 60 }});
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}, pageProps: { session }) { 

const interchanges = await getData();

  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
        <head/>
      <body className="min-h-screen">
      <AuthContext>
      <Providers> 
      <MyNavbar><LoginButton/></MyNavbar>
    <MyModal><Chatbot interchanges={interchanges}></Chatbot></MyModal>
        {children}
        <Footer/>
      </Providers>
      </AuthContext>
      </body>
    </html>
  )
}
