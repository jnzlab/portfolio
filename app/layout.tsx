import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jameel Ahmad',
  description: 'Full Stack Web Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
