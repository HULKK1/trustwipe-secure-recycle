import { Button } from "@/components/ui/button";
import { Shield, Download, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                NIST SP 800-88 Compliant
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Secure Data Wiping for{" "}
              <span className="gradient-text">Trustworthy IT</span>{" "}
              Asset Recycling
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional-grade data destruction across Windows, Linux, and Android platforms. 
              Generate tamper-proof certificates and ensure complete data elimination with 
              military-grade security standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                <Download className="w-5 h-5 mr-2" />
                Download SecureWipe Pro
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                View Live Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Cross-platform support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Offline bootable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Certified secure</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up lg:justify-self-end">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Secure data wiping interface"
                className="rounded-2xl shadow-professional hover-lift animate-float w-full max-w-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-professional border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Secure wipe in progress...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;