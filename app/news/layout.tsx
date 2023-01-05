import MyNavbar from '../navbar';

export const dynamicParams = true
export const revalidate = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  
  return (
    <main>
      <MyNavbar/>
      {children}
    </main>
  )
}
