import { Inter } from 'next/font/google'
import './page.scss'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cart Flip',
  description: 'Generated by Vimal Badoniya & Priyanka Bawana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} myclass`}>{children}</body>
    </html>
  )
}
