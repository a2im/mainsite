import MyNavbar from '../navbar';


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
