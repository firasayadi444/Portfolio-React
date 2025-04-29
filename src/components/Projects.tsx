import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
  image: string;
  details: {
    problem: string;
    role: string;
    challenges: string;
    tools: string[];
    architecture?: string;
  };
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Image Generation Web App",
      shortDesc: "Web application using Django and Stable Diffusion for text-to-image generation",
      tags: ["Django", "Angular", "AI", "REST API", "Python"],
      github: "https://github.com/firasayadi444/ai-image-gen",
      image: "/placeholder.svg",
      details: {
        problem: "Creating an accessible platform for AI-powered image generation from text descriptions.",
        role: "Full-stack developer responsible for integrating Django backend with Angular frontend and AI model.",
        challenges: "Implementing efficient prompt processing and optimizing AI model integration for performance.",
        tools: ["Django", "Angular", "Stable Diffusion", "REST API", "PostgreSQL"]
      }
    },
    {
      id: 2,
      title: "Employee Management System",
      shortDesc: "Full-stack employee management system with authentication and leave management",
      tags: ["React.js", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/firasayadi444/emp-management",
      liveDemo: "https://emp-management-demo.example.com",
      image: "/placeholder.svg",
      details: {
        problem: "Streamlining employee management processes including attendance and leave management.",
        role: "Lead developer for both frontend and backend implementation.",
        challenges: "Implementing secure authentication and real-time updates for leave requests.",
        tools: ["React.js", "Node.js", "Express", "MongoDB", "JWT Authentication"]
      }
    },
    {
      id: 3,
      title: "Stadium Booking System",
      shortDesc: "Platform for booking stadium facilities based on player count and location",
      tags: ["Spring Boot", "Angular", "MySQL", "REST API"],
      github: "https://github.com/firasayadi444/Reservation_Stadium_spring",
      image: "/Resrvstad.png",
      details: {
        problem: "Creating an efficient booking system for stadium facilities with real-time availability.",
        role: "Full-stack developer implementing both frontend and backend components.",
        challenges: "Managing concurrent bookings and implementing a fair reservation system.",
        tools: ["Spring Boot", "Angular", "MySQL", "REST API", "Spring Security"]
      }
    },
    {
      id: 4,
      title: "Ophelia - Home Task Management",
      shortDesc: "Android app for managing family tasks and responsibilities",
      tags: ["Android", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/firasayadi444/ophelia-app",
      liveDemo: "https://play.google.com/store/apps/details?id=com.ophelia",
      image: "/placeholder.svg",
      details: {
        problem: "Simplifying home task management and coordination among family members.",
        role: "Lead mobile app developer and backend architect.",
        challenges: "Creating an intuitive UI/UX and implementing real-time task updates.",
        tools: ["Android Studio", "Node.js", "MongoDB", "Express", "Socket.io"]
      }
    }
  ];

  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
          A showcase of my key projects spanning DevOps, cloud infrastructure, and full-stack development.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={filter === null ? "default" : "outline"}
            onClick={() => setFilter(null)}
            className="mb-2"
          >
            All
          </Button>
          
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              onClick={() => setFilter(tag)}
              className="mb-2"
            >
              {tag}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden animate-fade-in-up">
              <div className="aspect-video bg-muted/50 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.shortDesc}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                  
                  {project.liveDemo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" /> Live
                      </a>
                    </Button>
                  )}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm">Details</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>{project.shortDesc}</DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4 mt-4">
                      <div>
                        <h4 className="font-semibold mb-1">Problem</h4>
                        <p>{project.details.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-1">My Role</h4>
                        <p>{project.details.role}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-1">Challenges & Solutions</h4>
                        <p>{project.details.challenges}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-1">Tools Used</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.details.tools.map(tool => (
                            <span key={tool} className="tech-badge">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {project.details.architecture && (
                        <div>
                          <h4 className="font-semibold mb-1">Architecture</h4>
                          <p>{project.details.architecture}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-6">
                      {project.github && (
                        <Button variant="outline" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> View Code
                          </a>
                        </Button>
                      )}
                      
                      {project.liveDemo && (
                        <Button asChild>
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
