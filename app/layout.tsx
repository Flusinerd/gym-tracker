import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav, { NavLink } from '../components/ui/nav';
import './globals.css';

const links: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Workouts', href: '/workouts' },
  { name: 'Settings', href: '/settings'}
];

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gym-Tracker',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Nav links={links}>
          {children}
        </Nav>
      </body>
    </html>
  )
}
