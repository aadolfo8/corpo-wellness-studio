import { Navbar } from "@/components/corpo/Navbar";
import { Hero } from "@/components/corpo/Hero";
import { Services } from "@/components/corpo/Services";
import { About } from "@/components/corpo/About";
import { Method } from "@/components/corpo/Method";
import { Contact } from "@/components/corpo/Contact";
import { Footer } from "@/components/corpo/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Method />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
