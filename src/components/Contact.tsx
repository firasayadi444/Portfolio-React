
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
    
    // In a real application, you would use EmailJS or a similar service:
    // emailjs.send('service_id', 'template_id', formData, 'user_id')
    //   .then(() => {
    //     setLoading(false);
    //     toast({...});
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     toast({
    //       title: "Error sending message",
    //       description: "Please try again or contact me directly via email.",
    //       variant: "destructive",
    //     });
    //     console.error(error);
    //   });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Contact Me</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
          Have a project or opportunity in mind? Get in touch and let's discuss how we can work together.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>Sending...</>
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
          
          <div className="flex flex-col justify-between animate-fade-in">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a href="mailto:firas.ayadi2020@gmail.com" className="hover:text-primary">
                    firas.ayadi2020@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-3 text-primary" />
                    <a 
                      href="https://github.com/firasayadi444" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      github.com/firasayadi444
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-primary" />
                    <a 
                      href="https://www.linkedin.com/in/firas-ayadi2/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      linkedin.com/in/yourusername
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Book a Meeting</h3>
                <p className="mb-4">
                  Prefer to schedule a call? Book a time slot that works for you.
                </p>
                <Button asChild className="w-full">
                  <a 
                    href="https://calendly.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Schedule a Meeting
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
