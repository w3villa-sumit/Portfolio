import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities and collaborate on exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:bg-card/70 transition-colors duration-300">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:tsumit859@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      tsumit859@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:bg-card/70 transition-colors duration-300">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+917408533840" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 7408533840
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:bg-card/70 transition-colors duration-300">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Kanpur, U.P., India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/sumit-tiwari-710362252" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="https://github.com/tsumit02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-border bg-card/70 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?" 
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or inquiry..." 
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button className="w-full group-hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;