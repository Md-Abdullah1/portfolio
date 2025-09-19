import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
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
import Education from "./components/layouts/education";
import Contact from "./components/layouts/contact";

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
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />

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
