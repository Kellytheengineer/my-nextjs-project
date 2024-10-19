import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-40 w-full border-b bg-[#d99ae3]">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <div className="flex gap-6 md:gap-10">
              <Link href="/" className="flex items-center space-x-2">
                <span className="inline-block font-bold text-white">Kelly Princess Shungu</span>
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-1">
                {['About', 'Projects', 'Podcast', 'Contact'].map((item) => (
                  <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium text-white hover:underline underline-offset-4">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}