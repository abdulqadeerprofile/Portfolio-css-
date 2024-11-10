// app/layout.js
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modern Portfolio',
  description: 'Personal portfolio showcasing my work and skills',
}

export default function RootLayout({ children }:{children: any}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar">
          <div className="nav-content">
            <Link href="/" className="logo">
              AQ
            </Link>
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}