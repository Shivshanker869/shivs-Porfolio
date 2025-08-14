import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageCircle,
  Loader2 
} from 'lucide-react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_443c0y8';
  const EMAILJS_TEMPLATE_ID = 'template_10ov41d';
  const EMAILJS_PUBLIC_KEY = 'd2UqayHW-l7bpBgRG';

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'gopalgupta9639@gmail.com',
      href: 'mailto:gopalgupta9639@gmail.com',
      color: 'primary',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '9125963958',
      href: 'tel:+919125963958',
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
      href: 'https://www.linkedin.com/in/shivshankergupta/',
      color: 'text-blue-500',
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/shivshanker',
      color: 'text-gray-400',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message,
          to_name: 'Shiv Shanker Gupta',
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name" 
                      className="mt-1 bg-background/50"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      className="mt-1 bg-background/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?" 
                    className="mt-1 bg-background/50"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project requirements..." 
                    rows={6}
                    className="mt-1 bg-background/50"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
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