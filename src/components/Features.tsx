import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileText, Smartphone, HardDrive, Award, Globe } from "lucide-react";
import platformsImage from "@/assets/platforms-icon.jpg";
import certificateImage from "@/assets/certificate-security.jpg";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "NIST SP 800-88 compliant data destruction with multi-pass overwrite patterns for maximum security.",
      highlight: "99.99% secure"
    },
    {
      icon: Globe,
      title: "Cross-Platform Support",
      description: "Works seamlessly across Windows, Linux, and Android devices with unified interface and experience.",
      highlight: "3 platforms"
    },
    {
      icon: FileText,
      title: "Tamper-Proof Certificates",
      description: "Generate digitally signed wipe certificates in PDF and JSON formats for compliance and verification.",
      highlight: "Legally binding"
    },
    {
      icon: HardDrive,
      title: "Complete Data Elimination",
      description: "Securely erases all data including hidden areas like HPA/DCO sectors and SSD wear-leveling zones.",
      highlight: "100% coverage"
    },
    {
      icon: Smartphone,
      title: "One-Click Operation",
      description: "Intuitive interface designed for general public use with simple one-click secure wiping process.",
      highlight: "User friendly"
    },
    {
      icon: Award,
      title: "Third-Party Verification",
      description: "Enable independent verification of wipe status with blockchain-based proof of destruction.",
      highlight: "Verified trust"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade <span className="gradient-text">Security Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for IT professionals, trusted by enterprises, designed for everyone.
            Our comprehensive solution ensures complete data destruction with full compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-professional hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6">
              Trusted by <span className="gradient-text">1000+ Organizations</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              From government agencies to Fortune 500 companies, SecureWipe Pro is the 
              industry standard for secure data destruction and IT asset recycling compliance.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                <div className="text-sm text-muted-foreground">Devices Wiped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <img 
              src={platformsImage} 
              alt="Cross-platform compatibility"
              className="rounded-xl shadow-professional hover-lift"
            />
            <img 
              src={certificateImage} 
              alt="Security certificates"
              className="rounded-xl shadow-professional hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;