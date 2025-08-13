import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              <span className="gradient-text">Shiv Shanker Gupta</span>
            </h3>
            <p className="text-muted-foreground">
              QA Engineer • Test Automation Specialist • Quality Advocate
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                © 2024 Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Shiv Shanker Gupta
              </p>

              {/* Back to Top */}
              <Button
                size="sm"
                variant="outline"
                onClick={scrollToTop}
                className="border-primary/30 hover:bg-primary/10 transition-all duration-300 group"
              >
                Back to Top
                <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center pt-4">
            <p className="text-xs text-muted-foreground">
              Building quality software, one test at a time. Available for freelance QA projects and full-time opportunities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;