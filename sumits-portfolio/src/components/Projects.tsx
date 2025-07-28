import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Smartphone, Globe, Bot, Utensils } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Skill Connect",
      description: "An on-demand home services app with easy booking, verified professionals, secure payments, and real-time tracking.",
      technologies: ["React Native", "Mobile Development"],
      status: "Accomplished",
      icon: Smartphone,
      features: ["Easy Booking", "Verified Professionals", "Secure Payments", "Real-time Tracking"]
    },
    {
      title: "AI Chat Bot",
      description: "A real-time Question and Answering Chat Bot powered by Google Gemini API for intelligent conversations.",
      technologies: ["HTML", "CSS", "JavaScript", "Google Gemini API"],
      status: "Accomplished", 
      icon: Bot,
      features: ["Real-time Chat", "AI Powered", "Google Gemini Integration"]
    },
    {
      title: "Restaurant Search App",
      description: "Android app using Yelp API with search functionality to find restaurant details and pictures by area and budget.",
      technologies: ["React Native", "Yelp API"],
      status: "Accomplished",
      icon: Utensils,
      features: ["Yelp API Integration", "Budget-based Search", "Location Services"]
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website built with React and Vite, featuring smooth animations using Framer Motion.",
      technologies: ["React", "Vite", "Framer Motion"],
      status: "Accomplished",
      icon: Globe,
      features: ["Responsive Design", "Smooth Animations", "Modern UI"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border-border bg-card/70 backdrop-blur-sm overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-primary/10 text-primary hover:bg-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="flex-1 group-hover:shadow-lg transition-all duration-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;