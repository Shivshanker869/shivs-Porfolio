import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, TestTube, Bug, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Platform Testing',
      description: 'Comprehensive testing suite for a full-featured e-commerce application including user registration, product catalog, shopping cart, and payment processing.',
      technologies: ['Selenium WebDriver', 'TestNG', 'Java', 'Maven', 'Jenkins'],
      features: [
        'Automated UI testing for all user journeys',
        'API testing for backend services',
        'Cross-browser compatibility testing',
        'Performance testing with JMeter',
      ],
      status: 'Completed',
      type: 'Automation Testing',
      icon: <TestTube className="h-5 w-5" />,
    },
    {
      title: 'Banking Application QA',
      description: 'End-to-end testing of a secure banking application with focus on transaction processing, account management, and security validations.',
      technologies: ['Postman', 'SQL', 'JIRA', 'Selenium', 'Security Testing'],
      features: [
        'Manual testing of critical banking workflows',
        'Security vulnerability assessment',
        'Database validation testing',
        'Regression test suite maintenance',
      ],
      status: 'Completed',
      type: 'Manual & Security Testing',
      icon: <Bug className="h-5 w-5" />,
    },
    {
      title: 'Mobile App Testing Framework',
      description: 'Created automated testing framework for React Native mobile application with focus on user experience and performance.',
      technologies: ['Appium', 'JavaScript', 'Node.js', 'Cypress', 'BrowserStack'],
      features: [
        'Mobile automation test scripts',
        'Device compatibility testing',
        'Performance monitoring integration',
        'CI/CD pipeline integration',
      ],
      status: 'In Progress',
      type: 'Mobile Automation',
      icon: <Zap className="h-5 w-5" />,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise through real-world testing projects and automation frameworks
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${
                            project.status === 'Completed' 
                              ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                              : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                          }`}
                        >
                          {project.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-primary/30">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-primary/30 hover:bg-primary/10">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-sm">Key Testing Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text-accent">More Projects Coming Soon!</h3>
              <p className="text-muted-foreground mb-6">
                I'm continuously working on new testing projects and expanding my automation framework expertise. 
                Stay tuned for more comprehensive testing solutions and innovative QA approaches.
              </p>
              <Button className="bg-gradient-primary hover:opacity-90">
                View All Projects on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;