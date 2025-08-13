import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const testingTools = [
    { name: 'Selenium WebDriver', level: 85 },
    { name: 'JUnit/TestNG', level: 80 },
    { name: 'Postman', level: 90 },
    { name: 'JIRA', level: 85 },
    { name: 'Git/GitHub', level: 75 },
    { name: 'Maven', level: 70 },
  ];

  const programmingLanguages = [
    { name: 'Java', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'HTML/CSS', level: 85 },
  ];

  const methodologies = [
    'Agile Testing',
    'Test-Driven Development',
    'Behavior-Driven Development',
    'Continuous Integration',
    'Risk-Based Testing',
    'Exploratory Testing',
    'Regression Testing',
    'Performance Testing',
  ];

  const databases = [
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Oracle Database',
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in manual testing and automation tools
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Testing Tools */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Testing Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {testingTools.map((tool) => (
                <div key={tool.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{tool.name}</span>
                    <span className="text-sm text-muted-foreground">{tool.level}%</span>
                  </div>
                  <Progress value={tool.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Programming Languages */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-purple"></div>
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {programmingLanguages.map((language) => (
                <div key={language.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{language.name}</span>
                    <span className="text-sm text-muted-foreground">{language.level}%</span>
                  </div>
                  <Progress value={language.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Testing Methodologies */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-cyan"></div>
                Testing Methodologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {methodologies.map((methodology) => (
                  <Badge 
                    key={methodology} 
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  >
                    {methodology}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Databases */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Databases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {databases.map((database) => (
                  <Badge 
                    key={database} 
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 transition-colors duration-300"
                  >
                    {database}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications & Learning */}
        <div className="mt-12 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text-accent">Continuous Learning</h3>
              <p className="text-muted-foreground mb-6">
                I'm committed to staying current with the latest testing frameworks, tools, and best practices. 
                Currently expanding my knowledge in cloud testing platforms and AI-assisted testing.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  ISTQB Foundation Level (In Progress)
                </Badge>
                <Badge variant="secondary" className="bg-accent-purple/10 text-accent-purple border-accent-purple/20">
                  Selenium Certified
                </Badge>
                <Badge variant="secondary" className="bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20">
                  Agile Testing Practitioner
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;