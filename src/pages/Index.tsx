import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
