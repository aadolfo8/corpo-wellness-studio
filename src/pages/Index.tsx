import { Navbar } from "@/components/corpo/Navbar";
import { Hero } from "@/components/corpo/Hero";
import { Services } from "@/components/corpo/Services";
import { About } from "@/components/corpo/About";
import { Method } from "@/components/corpo/Method";
import { LocationMap } from "@/components/corpo/LocationMap";
import { Contact } from "@/components/corpo/Contact";
import { Footer } from "@/components/corpo/Footer";
import { Reveal } from "@/components/corpo/Reveal";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Reveal><Services /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Method /></Reveal>
      <Reveal><LocationMap /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </main>
  );
};

export default Index;
