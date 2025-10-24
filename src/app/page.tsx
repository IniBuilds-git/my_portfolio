import Hero from '@/components/Hero'
import Tabs from '@/components/Tabs' // NEW: Replaced individual components
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Tabs /> 
      <Footer />
    </main>
  )
}