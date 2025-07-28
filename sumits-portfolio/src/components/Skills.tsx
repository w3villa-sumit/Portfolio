import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Code, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: [
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "SQL", level: 80 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Tools & Applications",
      icon: Wrench,
      skills: [
        { name: "VS Code", level: 95 },
        { name: "GitHub", level: 90 },
        { name: "PowerBI", level: 75 },
        { name: "ExpoGo", level: 80 }
      ]
    },
    {
      title: "Interpersonal Skills",
      icon: Users,
      skills: [
        { name: "Leadership", level: 85 },
        { name: "Problem-Solving", level: 90 },
        { name: "Active Listening", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and soft skills
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={categoryIndex}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] border-border bg-card/50 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 w-fit mb-4 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;