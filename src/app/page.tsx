import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BecomeGranimal from "@/components/BecomeGranimal";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BecomeGranimal />
        <Testimonials />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
