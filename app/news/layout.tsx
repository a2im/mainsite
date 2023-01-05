import MyNavbar from '../navbar';

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

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
