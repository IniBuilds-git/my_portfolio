import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

// Set NEXT_PUBLIC_SITE_URL in the deployment env to your real domain so that
// Open Graph / canonical URLs resolve to absolute links.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://inioluwaalake.com'

const title = 'Inioluwa Alake — Software & AI Engineer'
const description =
  'Software Engineer with 3+ years of experience designing APIs, architecting secure data systems, and deploying high-availability infrastructure — and an active AI Engineer.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s — Inioluwa Alake',
  },
  description,
  keywords: [
    'Inioluwa Alake',
    'Software Engineer',
    'Backend Engineer',
    'AI Engineer',
    'Laravel',
    'Full Stack',
  ],
  authors: [{ name: 'Inioluwa Alake' }],
  creator: 'Inioluwa Alake',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Inioluwa Alake',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

interface RootLayoutProps {
  children: ReactNode
}

// Runs before paint to apply the saved theme (default: dark), avoiding a flash.
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t !== 'light' && t !== 'dark') t = 'dark';
    var c = document.documentElement.classList;
    c.remove('light', 'dark');
    c.add(t);
  } catch (e) {}
})();
`

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}