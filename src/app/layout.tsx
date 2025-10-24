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

export const metadata = {
  title: 'Inioluwa - DevRel Engineer & AI Builder',
  description: 'DevRel Engineer & AI Builder with 8 years experience growing ecosystems, building SDKs, and scaling developer adoption worldwide.',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}