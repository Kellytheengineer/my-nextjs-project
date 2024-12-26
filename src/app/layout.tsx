// Importing global styles and fonts
import './globals.css';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

// Configuring Roboto font with specified weights and subsets
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Defining the props type for the RootLayout component
interface RootLayoutProps {
  children: React.ReactNode;
}

// The RootLayout component to structure the application layout
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col min-h-screen bg-gray-100`}>
        <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
          <div className="container mx-auto px-4 flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-gray-800 text-lg md:text-xl">Home</span>
            </Link>
            <nav className="flex items-center space-x-2 md:space-x-4">
              {['About', 'Projects', 'Podcast', 'CV', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm md:text-lg font-medium text-gray-600 hover:text-gray-800 hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-white text-gray-600 py-4 text-center shadow-inner">
          <div className="container mx-auto px-4 flex flex-col items-center space-y-2">
            <p className="text-sm md:text-base">&copy; 2024 Kelly Princess Shungu. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Kellytheengineer" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/kelly-ann-shungu/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="mailto:kellyshungu@gmail.com">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

