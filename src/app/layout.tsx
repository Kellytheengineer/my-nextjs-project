import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Github, Linkedin, Mail } from "lucide-react"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="sticky top-0 z-40 w-full border-b bg-[#d99ae3]">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <div className="flex gap-6 md:gap-10">
              <Link href="/" className="flex items-center space-x-2">
                <span className="inline-block font-bold text-white text-xl">Home</span>
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-4">
                {['About', 'Projects', 'Podcast','CV', 'Contact'].map((item) => (
                  <Link key={item} href={`/${item.toLowerCase()}`} className="text-lg font-medium text-white hover:underline underline-offset-4">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="border-t border-white bg-[#d99ae3]">
          <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose text-white md:text-left">
                © 2025 Kelly Princess Shungu. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {[ 
                { Icon: Github, href: "https://github.com/Kellytheengineer", name: "GitHub" }, 
                { Icon: Linkedin, href: "https://www.linkedin.com/in/kelly-ann-shungu/", name: "LinkedIn" }, 
                { Icon: Mail, href: "mailto:kellyshungu@gmail.com", name: "Email" }
              ].map(({ Icon, href, name }, index) => (
                <div key={index} className="transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3">
                  <a href={href} className="text-white hover:text-[#f0d4f5]" target="_blank" rel="noopener noreferrer">
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}