import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Heart, GraduationCap, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about quality assurance and driven by continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 gradient-text-accent">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated QA Engineer with a strong foundation in both manual testing and test automation. 
                My journey began with a passion for ensuring software quality and has evolved into expertise in 
                creating robust testing frameworks using modern tools like Selenium.
              </p>
              <br />
              <p className="text-muted-foreground leading-relaxed">
                I believe that quality assurance is not just about finding bugs, but about understanding the 
                user experience and ensuring that every application delivers value and reliability to its users.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects Tested</div>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="grid gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Mission</h4>
                    <p className="text-muted-foreground text-sm">
                      To deliver bug-free, high-quality software that exceeds user expectations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-accent-purple/10">
                    <Heart className="h-6 w-6 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Passion</h4>
                    <p className="text-muted-foreground text-sm">
                      Continuous learning and staying updated with latest QA methodologies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-accent-cyan/10">
                    <GraduationCap className="h-6 w-6 text-accent-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Education</h4>
                    <p className="text-sm font-medium text-foreground">SDET (Software Development Engineer in Testing)</p>
                    <p className="text-sm text-muted-foreground">Masai School</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Comprehensive training in manual testing, automation frameworks, and modern QA practices
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <Briefcase className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Current Status</h4>
                    <div className="space-y-1">
                      <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                        Actively Seeking QA Opportunities
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        Fresher - Ready to Start
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Eager to apply my skills in a dynamic team environment and contribute to delivering exceptional software quality
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;