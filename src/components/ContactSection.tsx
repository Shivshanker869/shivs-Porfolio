import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageCircle 
} from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'shiv.shanker.qa@gmail.com',
      href: 'mailto:shiv.shanker.qa@gmail.com',
      color: 'primary',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 9876543210',
      href: 'tel:+919876543210',
      color: 'accent-purple',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
      color: 'accent-cyan',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shivshanker',
      color: 'text-blue-500',
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/shivshanker',
      color: 'text-gray-400',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next QA project? Let's discuss how I can help ensure your software quality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Send Message</h3>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name" 
                      className="mt-1 bg-background/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="mt-1 bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?" 
                    className="mt-1 bg-background/50"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project requirements..." 
                    rows={6}
                    className="mt-1 bg-background/50"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300 group"
                    >
                      <div className={`p-3 rounded-lg bg-${contact.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`text-${contact.color}`}>
                          {contact.icon}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{contact.label}</div>
                        <div className="text-muted-foreground text-sm">{contact.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary hover:scale-110 transition-all duration-300 group"
                    >
                      <div className={social.color}>
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Connect with me on professional networks and check out my work on GitHub.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary/10 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Ready to Start a Project?</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  I'm currently available for new QA projects and would love to discuss your testing needs. 
                  Let's build something amazing together!
                </p>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;