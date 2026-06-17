import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Tabs from '@/components/Tabs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Hero />
        <Tabs />
        <Footer />
      </main>
    </>
  )
}
