
import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import TypedText from './TypedText';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center hero-gradient section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start space-y-8 max-w-3xl animate-fade-in">
          <div>
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Firas Ayadi
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              <span className="mr-2">I'm a</span>
              <TypedText
                texts={[
                  "Software Engineering Student",
                  "Full-Stack Developer",
                  "AI Developer"
                ]}
              />
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground">
            Software engineering student with hands-on experience in full-stack development and AI integration. 
            Passionate about building secure web applications and AI-powered solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="#projects" className="flex items-center gap-2">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/firasayadi444" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/firas-ayadi2" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
