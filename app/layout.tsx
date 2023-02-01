import MyHead from './head';
import App from './App';
import './globals.css'
import MyModal from "./modal"
import Footer from './footer';
import { Providers } from './providers';
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
library.add(fas)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 

  return (
    <html lang="en">
        <MyHead/>
      <body className="min-h-screen z-0 bg-neutral-50 text-black dark:bg-neutral-600 dark:text-white mx-auto">
        <Providers>
          <App>{children}</App>          
          <Footer/>
          <MyModal/>
        </Providers>
      </body>
    </html>
  )
}
