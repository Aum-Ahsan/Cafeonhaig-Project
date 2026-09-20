import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import MenuSection from "@/components/Menu";
import ImageBanner from "@/components/ImageBanner";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-dark">
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <MenuSection />
      <ImageBanner />
      <Gallery />
      <Reviews />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}
