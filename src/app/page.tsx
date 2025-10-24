import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 bg-[#0d0d0d] text-white">
      <Hero />
      <Tabs />
      {/* <Projects /> */}
      <Footer />
    </main>
  );
}
