import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play, FileCheck, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Download & Boot",
      description: "Download SecureWipe Pro ISO or install the application. Boot from USB for offline wiping or run directly on your system.",
      details: ["Bootable ISO/USB creation", "Cross-platform installer", "Offline operation support"]
    },
    {
      number: "02", 
      icon: Play,
      title: "One-Click Wipe",
      description: "Select target devices and initiate secure wiping with our intuitive interface. Choose from multiple security levels.",
      details: ["Automatic device detection", "Custom wipe patterns", "Real-time progress tracking"]
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Generate Certificate",
      description: "Receive tamper-proof wipe certificates in PDF and JSON formats with digital signatures for compliance.",
      details: ["Legally binding certificates", "Blockchain verification", "Multiple export formats"]
    },
    {
      number: "04",
      icon: Shield,
      title: "Verify & Comply",
      description: "Third-party verification ensures complete data destruction. Full NIST SP 800-88 compliance reporting.",
      details: ["Independent verification", "Compliance reporting", "Audit trail generation"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How <span className="gradient-text">SecureWipe Pro</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four simple steps to ensure complete, compliant, and verifiable data destruction 
            across all your IT assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-professional hover-lift group h-full">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  
                  <ul className="text-sm space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-muted-foreground">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-professional border border-primary/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of organizations already using SecureWipe Pro for secure, 
              compliant IT asset recycling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                <Download className="w-5 h-5 mr-2" />
                Download Free Trial
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;