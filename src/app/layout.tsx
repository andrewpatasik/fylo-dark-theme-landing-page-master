import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ weight: ['400','700'], subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Fylo',
  description: 'Fylo landing page with dark theme and features grid. Challenge by Frontend Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
