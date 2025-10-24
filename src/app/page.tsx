import Hero from "@/components/Hero";
import Tabs from "@/components/Tabs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Tabs />
      <Footer />
    </main>
  );
}