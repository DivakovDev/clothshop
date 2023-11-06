import { Footer, NavigationBar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Luxury Heaven Store',
  description: 'Created to be your cloth advisor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
