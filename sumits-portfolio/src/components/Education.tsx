import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      duration: "2021 – 2025",
      status: "C.G.P.A.: 7.65",
      type: "undergraduate"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "C.B.S.E. Board",
      duration: "2021",
      status: "Aggregate: 80.2%",
      type: "secondary"
    },
    {
      degree: "Senior Secondary Certificate", 
      institution: "C.B.S.E. Board",
      duration: "2019",
      status: "Aggregate: 65.6%",
      type: "secondary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-border bg-card/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={edu.type === "undergraduate" ? "default" : "secondary"}
                    className="ml-2 shrink-0"
                  >
                    {edu.type === "undergraduate" ? "Current" : "Completed"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <span className="font-semibold text-primary">{edu.status}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;