import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Download,
  Code,
  Palette,
  Zap,
  Users,
  Clock,
  Target,
  ChevronDown,
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

  const skills = {
    programming: [
      "C",
      "C++",
      "Python",
      "SQL",
      "JavaScript",
      "TypeScript",
      "JAVA",
    ],
    frontend: [
      "React.js",
      "Redux Toolkit",
      "Next.js",
      "React Native",
      "HTML5",
      "CSS3",
      "Tailwind",
      "Bootstrap",
      "Ant Design",
      "GSAP",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "GraphQL",
      "JWT",
      "JSON",
    ],
    tools: ["Git/GitHub", "API Integration", "Cursor", "Prompt Engineering"],
    strengths: [
      "Problem-Solving",
      "Quick Learner",
      "Team Player",
      "Time Management",
    ],
  };

  const projects = [
    {
      title: "BUILDER SUITE",
      description:
        "Driving the Builder Project by developing scalable, reusable components and managing complex state for seamless feature integration. Optimized API interactions, enhancing data flow and user engagement by 40%.",
      tech: ["React.js", "GSAP", "SCSS", "Lodash"],
      impact: "40% increase in user engagement",
    },
    {
      title: "TASKIFY",
      description:
        "Developed a Task Management System using Next.js and MERN stack, featuring secure role-based authentication, real-time updates, and optimized MongoDB queries.",
      tech: ["Next.js", "MongoDB", "Node.js", "Express.js"],
      impact: "40% improvement in task efficiency",
    },
    {
      title: "HRMS",
      description:
        "Contributed to an HRMS application, improving employee tracking and management efficiency through optimized workflows and automation.",
      tech: ["React.js", "Node.js", "MongoDB"],
      impact: "30% efficiency improvement",
    },
    {
      title: "POS APPLICATION",
      description:
        "Developed a POS application using React Native, improving transaction efficiency and enhancing customer engagement through optimized UI/UX.",
      tech: ["React Native", "API Integration"],
      impact: "30% transaction efficiency boost",
    },
  ];

  const experience = [
    {
      company: "Huemn Interactive Pvt.Ltd",
      position: "Front End Developer",
      period: "August 2024 - Present",
      description:
        "Developed a No-Code website and proposal builder, enhancing user efficiency by 40%. Implemented Drag-and-Drop functionality with React.js, integrated GSAP animations for a 30% boost in engagement.",
      achievements: [
        "40% user efficiency increase",
        "30% engagement boost",
        "20% load time reduction",
        "25% content creation speed improvement",
      ],
    },
    {
      company: "PTR Technologies",
      position: "Front End Developer",
      period: "May 2023 - July 2024",
      description:
        "Engineered and optimized HRMS & POS applications, increasing system efficiency by 30% and automating workflows, reducing manual effort by 40%.",
      achievements: [
        "30% system efficiency increase",
        "40% manual effort reduction",
        "25% API response time improvement",
      ],
    },
  ];

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
      {/* Navigation */}

      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-background/70"></div>

        {/* Floating 3D Element
        <div className="absolute top-20 right-20 w-32 h-32 floating-animation opacity-30">
          <img src={threeDElement} alt="3D Element" className="w-full h-full rotating-3d" />
        </div> */}

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold font-['Orbitron'] mb-6">
              <span className="text-gradient">Md Abdullah</span>
            </h1>
            <div className="text-2xl md:text-4xl mb-8 h-16">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="typing-animation font-['Orbitron']"
              >
                Frontend Developer | Full Stack Developer | React Developer
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-xl md:text-2xl mb-12 text-white max-w-3xl mx-auto"
            >
              Crafting immersive digital experiences with React.js, GSAP
              animations, and cutting-edge web technologies
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="glow-effect pulse-glow font-['Orbitron']"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="neon-border font-['Orbitron']"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-primary" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-fade-in">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="neon-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a passionate Frontend Developer specializing in the MERN
                    stack with expertise in React.js and animation technologies.
                    With a strong foundation in computer science and hands-on
                    experience in building scalable web applications, I bring
                    ideas to life through code and creativity.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    My journey in web development has been driven by a love for
                    creating engaging user experiences and solving complex
                    problems. I specialize in building responsive, animated, and
                    performance-optimized applications that not only look great
                    but also deliver exceptional functionality.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      <span>Clean Code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-primary" />
                      <span>Creative Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      <span>Performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span>Team Player</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="skill-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Problem Solver</h3>
                  </div>
                  <p>
                    I thrive on tackling complex challenges and finding
                    innovative solutions that drive results.
                  </p>
                </CardContent>
              </Card>

              <Card className="skill-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Quick Learner</h3>
                  </div>
                  <p>
                    Constantly adapting to new technologies and frameworks to
                    stay ahead in the ever-evolving tech landscape.
                  </p>
                </CardContent>
              </Card>

              <Card className="skill-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Collaborative</h3>
                  </div>
                  <p>
                    Experienced in working with cross-functional teams to
                    deliver high-quality, performance-driven solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/20 section-fade-in">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-6 text-gradient">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-12">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold font-['Orbitron'] mb-6 capitalize text-primary">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="skill-card w-full justify-center py-3 text-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 section-fade-in">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-6 text-gradient">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="project-card h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-['Orbitron'] text-primary">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-accent font-semibold">
                      {project.impact}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="neon-border"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full neon-border">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-card/20 section-fade-in">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-6 text-gradient">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="timeline-item mb-12"
              >
                <Card className="neon-border bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-['Orbitron'] text-primary">
                      {exp.position}
                    </CardTitle>
                    <CardDescription className="text-xl text-accent">
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
