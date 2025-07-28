import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe, Smartphone, Cpu, Server } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5"></div>
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sumit Tiwari
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground">
              Full Stack Developer
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Kanpur, U.P., India</span>
            </div>
          </div>
          
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Passionate about launching my career in technology with a focus on programming, 
            software development, and web technologies. Committed to delivering impactful 
            results while continuously expanding my skill set.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/sumit-tiwari-710362252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </a>
            <a
              href="/Sumit_Tiwari_7408533840.pdf"
              download
              className="inline-block w-full"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 w-full h-full"
              >
                Download CV
              </Button>
            </a>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="mailto:tsumit859@gmail.com" 
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
            </a>
            <a 
              href="tel:+917408533840" 
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:scale-110 group"
            >
              <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
            </a>
            <a 
              href="https://linkedin.com/in/sumit-tiwari-710362252" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
            </a>
            <a 
              href="https://github.com/tsumit02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end animate-slide-in-right">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Floating Language Icons */}
            <div className="absolute -top-8 -left-8 p-3 bg-primary/20 rounded-full backdrop-blur-sm animate-float">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -top-4 -right-12 p-3 bg-accent/20 rounded-full backdrop-blur-sm animate-float" style={{animationDelay: '0.5s'}}>
              <Database className="w-6 h-6 text-accent" />
            </div>
            <div className="absolute top-1/4 -left-12 p-3 bg-primary/20 rounded-full backdrop-blur-sm animate-float" style={{animationDelay: '1s'}}>
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute top-1/3 -right-8 p-3 bg-accent/20 rounded-full backdrop-blur-sm animate-float" style={{animationDelay: '1.5s'}}>
              <Smartphone className="w-6 h-6 text-accent" />
            </div>
            <div className="absolute bottom-1/4 -left-8 p-3 bg-primary/20 rounded-full backdrop-blur-sm animate-float" style={{animationDelay: '2s'}}>
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -right-12 p-3 bg-accent/20 rounded-full backdrop-blur-sm animate-float" style={{animationDelay: '2.5s'}}>
              <Server className="w-6 h-6 text-accent" />
            </div>
            
            {/* Blue Border Glow Effect */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/30 blur-sm animate-glow-pulse"></div>
            <div className="absolute inset-0 rounded-full border-2 border-primary"></div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-glow-pulse"></div>
            
            {/* Profile Image */}
            <img 
              src="/profile/5eb786b8-3d43-4366-a16e-28e98db4c071.png" 
              alt="Sumit Tiwari" 
              className="relative w-full h-full object-cover rounded-full shadow-2xl animate-float border-4 border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;