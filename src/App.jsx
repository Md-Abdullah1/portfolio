import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/layouts/header";
import Hero from "./components/layouts/hero";
import About from "./components/layouts/about";
import Skills from "./components/layouts/skills";
import Projects from "./components/layouts/projects";
import Experience from "./components/layouts/experience";
import Education from "./components/layouts/education";
import Contact from "./components/layouts/contact";
import Footer from "./components/layouts/footer";

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
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
