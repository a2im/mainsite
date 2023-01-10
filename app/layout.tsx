import MyHead from './head';
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
      <body className="min-h-screen z-0 light:bg-neutral-50 dark:bg-neutral-600 mx-auto">
        <Providers>
          <main className="mx-auto">
            {children}
          </main>          
          <Footer/>
          <MyModal/>
        </Providers>
      </body>
    </html>
  )
}
