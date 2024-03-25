import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}