import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { CustomThemeProvider } from './CustomThemeProvider'

export const metadata: Metadata = {
  title: 'Himanshu Jain',
  description: 'Himanshu Jain Portfolio'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <CustomThemeProvider>
          <header>
            <Navbar />
          </header>

          <main>{children}</main>

          <footer>
            <Footer />
          </footer>
        </CustomThemeProvider>
      </body>
    </html>
  )
}
