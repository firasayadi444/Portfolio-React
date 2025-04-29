
import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Firas Ayadi</h3>
            <p className="text-muted-foreground">Fullstack Student</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/firasayadi444" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/firas-ayadi2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="outline" size="icon" onClick={scrollToTop} aria-label="Scroll to top">
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Firas Ayadi All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
