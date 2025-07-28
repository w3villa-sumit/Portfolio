import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional internship and hands-on learning experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-border bg-card/70 backdrop-blur-sm animate-fade-in-up">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                      Web Development Intern
                    </CardTitle>
                    <p className="text-xl font-semibold text-accent">W3villa Technologies</p>
                  </div>
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  Current
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>March - May 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Remote</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gaining comprehensive hands-on experience in modern web development practices,
                working with cutting-edge technologies and contributing to real-world projects.
              </p>
              
              <div>
                <h4 className="font-semibold text-lg mb-4 text-foreground">Key Responsibilities & Learning:</h4>
                <ul className="space-y-3">
                  {[
                    "Building and maintaining websites and web applications using modern frameworks",
                    "Coding, debugging, testing, and implementing new features with best practices",
                    "Working extensively with front-end technologies including HTML, CSS, JavaScript, and React",
                    "Gaining exposure to back-end development including databases and server-side languages",
                    "Learning web design principles, UI/UX design, and responsive design methodologies"
                  ].map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                      <span className="leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Technologies & Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React", "Databases", "UI/UX Design", "Responsive Design"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;