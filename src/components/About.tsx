
import React from 'react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const skills = [
    { category: "Programming", items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"] },
    { category: "Web Development", items: ["React.js", "Angular", "Node.js", "Django", "Express"] },
    { category: "DevOps & Tools", items: ["Docker", "Kubernetes", "Jenkins", "Git", "Postman"] },
    { category: "Frameworks", items: ["Django", "Flask", "Spring Boot", "Express.js"] },
    { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
    { category: "AI/ML", items: ["Stable Diffusion", "Image Generation", "AI Integration"] },
  ];
  
  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Intermediate (B2)" },
    { name: "English", level: "Intermediate (B2)" },
  ];
  
  const education = [
    "TekUp University - Bachelor's in Software Engineering (Expected: 2025)",
    "Higher Institute of Technological Studies of Jendouba - Applied License in Industrial Electricity (2019)"
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-lg">
                  I'm a final-year Software Engineering student with hands-on experience in full-stack development 
                  and AI integration. I specialize in building secure, responsive web applications with expertise 
                  in JavaScript frameworks and backend technologies.
                </p>
                <p className="text-lg">
                  I have a keen interest in cybersecurity automation and AI-powered systems, with experience in 
                  implementing various projects from employee management systems to AI-powered image generation platforms.
                </p>
              </CardContent>
            </Card>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skillGroup) => (
                  <Card key={skillGroup.category} className="overflow-hidden">
                    <div className="bg-primary px-4 py-2">
                      <h4 className="text-primary-foreground font-medium">{skillGroup.category}</h4>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span key={skill} className="tech-badge">{skill}</span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    {languages.map((language) => (
                      <div key={language.name} className="flex justify-between items-center">
                        <span>{language.name}</span>
                        <span className="text-muted-foreground">{language.level}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <Card>
                  <CardContent className="p-4">
                    <ul className="space-y-2">
                      {education.map((edu) => (
                        <li key={edu} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-accent"></div>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
