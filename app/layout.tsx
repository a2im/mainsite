import './globals.css'
import { Providers } from '../components/providers';
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import MyNavbar from '../components/nav'
import LoginButton from '../components/login'
import Chatbot from '@/components/chatbot';
import MyModal from '../components/modal'
import Sidebar from '../components/sidebar';
import Footer from './footer';
import React from 'react'
import { HomeLeaderboard } from '../components/leaderboard';
import Script from 'next/script';

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
export const metadata = {
  title: {
    default: 'A2IM',
    template: '%s | A2IM',
  },
  icons: {
    icon: [
      { url: '/favicon/A2IM-button-32x32-light.png', media:'(prefers-color-scheme: dark)', sizes: '32x32'},
      { url: '/favicon/A2IM-button-32x32-dark.png', media:'(prefers-color-scheme: light)', sizes: '32x32'}, 
      { url: '/favicon/A2IM-button-16x16-light.png', media:'(prefers-color-scheme: dark)', sizes: '16x16'},
      { url: '/favicon/A2IM-button-16x16-dark.png', media:'(prefers-color-scheme: light)', sizes: '16x16'}, 
      { url: '/favicon/a2im-favicon-light.ico', media:'(prefers-color-scheme: dark)'},
      { url: '/favicon/a2im-favicon-dark.ico', media:'(prefers-color-scheme: light)'}, 
      new URL('/favicon/A2IM-button-32x32-light.png', 'https://a2im.org')],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'apple-touch-icon',
        url: '/favicon/apple-touch-icon-light.png',
        sizes: '180x180',
        media: '(prefers-color-scheme: dark)'
      },
      {
        rel: 'apple-touch-icon',
        url: '/favicon/apple-touch-icon-dark.png',
        sizes: '180x180',
        media: '(prefers-color-scheme: light)'
      },
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  manifest: '/favicon/site.webmanifest',
  }
export default async function RootLayout({children}: {children: React.ReactNode}) { 


const interchanges = await getData();

  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script 
      id="google-analytics" 
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html:
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `
      }}></Script>
      <body className="min-h-screen">
      <Providers> 
      <MyNavbar><LoginButton/></MyNavbar>
    <MyModal><Chatbot interchanges={interchanges}></Chatbot></MyModal>
    <HomeLeaderboard/>
    <div className="flex flex-col-0 md:flex-col-2 mx-auto max-w-7xl gap-5">
          {children}
          <Sidebar/>
        </div>
        <Footer/>
      </Providers>
      </body>
    </html>
  )
}
