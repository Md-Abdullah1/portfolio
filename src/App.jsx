import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import "./App.css";
import Header from "./components/layouts/header";
import Hero from "./components/layouts/hero";
import About from "./components/layouts/about";
import Skills from "./components/layouts/skills";
import Projects from "./components/layouts/projects";
import Experience from "./components/layouts/experience";

// import threeDElement from './assets/3d_element.png';

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section-fade-in");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

 

  const education = [
    {
      institution: "Jawaharlal Nehru Technological University Hyderabad",
      degree: "Bachelor of Technology in CSE",
      period: "2021 - 2024",
      grade: "74%",
    },
    {
      institution: "State Board of Technical Education and Training",
      degree: "Diploma in Computer Engineering",
      period: "2018 - 2021",
      grade: "76%",
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-['Roboto']">
      {/* Header */}

      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience/>

      {/* Education Section */}
      <section id="education" className="py-20 section-fade-in">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-6 text-gradient">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="skill-card h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-['Orbitron'] text-primary">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-accent">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        {edu.period}
                      </span>
                      <Badge variant="outline" className="neon-border">
                        {edu.grade}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/20 section-fade-in">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-6 text-gradient">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create
              something amazing together.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <Card className="neon-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-['Orbitron'] text-primary mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-primary" />
                        <span>ahilabdullah111@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-primary" />
                        <span>9505934716</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Github className="w-6 h-6 text-primary" />
                        <span>Md-Abdullah1</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Linkedin className="w-6 h-6 text-primary" />
                        <span>md-abdullah-29a067260</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button className="flex-1 glow-effect">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="flex-1 neon-border">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="neon-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-['Orbitron'] text-primary mb-6">
                      Let's Connect
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      I'm always excited to discuss new opportunities,
                      innovative projects, and potential collaborations. Whether
                      you have a project in mind or just want to connect, feel
                      free to reach out!
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <span>Available for freelance projects</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <span>Open to full-time opportunities</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <span>Interested in collaboration</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Md Abdullah. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
