import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TestTube, 
  Code, 
  Shield, 
  Smartphone, 
  BarChart, 
  Users,
  CheckCircle,
  Clock
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <TestTube className="h-8 w-8" />,
      title: 'Manual Testing',
      description: 'Comprehensive manual testing services including functional, usability, and exploratory testing to ensure your application meets quality standards.',
      features: ['Test Case Design', 'Bug Reporting', 'User Experience Testing', 'Documentation'],
      color: 'primary',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Test Automation',
      description: 'Automated testing frameworks using Selenium WebDriver, TestNG, and other modern tools to accelerate your testing cycles.',
      features: ['Framework Development', 'CI/CD Integration', 'Cross-browser Testing', 'Regression Automation'],
      color: 'accent-purple',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security Testing',
      description: 'Security vulnerability assessments and penetration testing to identify and mitigate potential security risks.',
      features: ['Vulnerability Scanning', 'Authentication Testing', 'Data Validation', 'Security Compliance'],
      color: 'accent-cyan',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Testing',
      description: 'Comprehensive mobile application testing across different devices, platforms, and operating systems.',
      features: ['Device Compatibility', 'Performance Testing', 'Usability Testing', 'App Store Guidelines'],
      color: 'green-500',
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Performance Testing',
      description: 'Load, stress, and performance testing to ensure your application can handle expected user loads.',
      features: ['Load Testing', 'Stress Testing', 'Performance Monitoring', 'Optimization Reports'],
      color: 'orange-500',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'QA Consulting',
      description: 'Strategic QA consulting to help establish testing processes, methodologies, and best practices for your team.',
      features: ['Process Improvement', 'Team Training', 'Tool Selection', 'Quality Strategy'],
      color: 'purple-500',
    },
  ];

  const workingProcess = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Understanding your project requirements and testing objectives',
    },
    {
      step: '02',
      title: 'Test Planning',
      description: 'Creating comprehensive test plans and strategies',
    },
    {
      step: '03',
      title: 'Test Execution',
      description: 'Executing manual and automated tests systematically',
    },
    {
      step: '04',
      title: 'Reporting & Review',
      description: 'Detailed reporting with recommendations for improvement',
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            QA <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive quality assurance services to ensure your software meets the highest standards
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 group hover:-translate-y-2"
            >
              <CardHeader>
                <div className={`p-3 rounded-lg bg-${service.color}/10 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${service.color}`}>
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Working Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              My <span className="gradient-text-accent">Working Process</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A systematic approach to ensure comprehensive testing coverage and quality delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingProcess.map((process, index) => (
              <Card 
                key={process.step}
                className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 text-center group"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg mx-auto group-hover:scale-110 transition-transform duration-300">
                      {process.step}
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Me */}
        <Card className="bg-card/30 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text-accent">Why Choose My QA Services?</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">Fast Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Quick turnaround times without compromising on quality
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="p-3 rounded-lg bg-accent-purple/10 w-fit mx-auto">
                  <Shield className="h-6 w-6 text-accent-purple" />
                </div>
                <h4 className="font-semibold">Quality Assurance</h4>
                <p className="text-sm text-muted-foreground">
                  Meticulous attention to detail and comprehensive testing approach
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="p-3 rounded-lg bg-accent-cyan/10 w-fit mx-auto">
                  <Users className="h-6 w-6 text-accent-cyan" />
                </div>
                <h4 className="font-semibold">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Strong communication and collaborative working approach
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;