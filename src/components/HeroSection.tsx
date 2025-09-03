import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-20 w-32 h-32 rounded-full bg-accent-blue/10 blur-xl"></div>
        <div className="floating-element-reverse absolute top-40 right-32 w-24 h-24 rounded-full bg-accent-purple/15 blur-lg"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-accent-cyan/20 blur-lg"></div>
        <div className="floating-element-reverse absolute top-1/3 right-20 w-16 h-16 rounded-full bg-accent-blue/20 blur-md"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Hello 👋
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                I'm <span className="gradient-text">Shiv Shanker</span>
                <br />
                <span className="gradient-text">Gupta</span>
              </h1>
              <div className="inline-block px-4 py-2 border border-primary/30 rounded-full">
                <span className="text-primary font-semibold text-sm">QA ENGINEER</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              I am a QA Engineer driven by a deep passion for software testing and automation. 
              I believe in building high-quality, bug-free applications that stand the test of time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Eye className="mr-2 h-4 w-4" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/10 transition-all duration-300"
                onClick={() => window.open('https://drive.google.com/file/d/1czvBbIM6dDSru76bNPhlK7-xD_gyruhU/view?usp=sharing', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl scale-110"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-card">
                <img
                  src="https://i.postimg.cc/g2hG2wBS/cropped-circle-image-1.png"
                  alt="Shiv Shanker Gupta - QA Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent-blue floating-element"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 rounded-full bg-accent-purple floating-element-reverse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 rounded-full bg-accent-cyan floating-element"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;