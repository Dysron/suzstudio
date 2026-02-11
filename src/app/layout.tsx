import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Suz's Studio - Videography & Live Content Capture",
  description: 'Suzzy Ndiforchu - A Los Angeles native creating in Washington, DC. Specializing in live content capture, bringing moments to life in real time.',
  keywords: ['videography', 'live content', 'DC videographer', 'event coverage', 'Instagram stories', 'TikTok content'],
  openGraph: {
    title: "Suz's Studio",
    description: 'Videography and Live Content Capture',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
