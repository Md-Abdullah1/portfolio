import { memo, useCallback, useEffect, useState } from "react";
import About from "@/components/layouts/about";
import Contact from "@/components/layouts/contact";
import Education from "@/components/layouts/education";
import Experience from "@/components/layouts/experience";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Hero from "@/components/layouts/hero";
import Projects from "@/components/layouts/projects";
import Skills from "@/components/layouts/skills";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isNavigating, setIsNavigating] = useState(false);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // updating activeSection if not manually navigating
            if (!isNavigating) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section-fade-in");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isNavigating]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      setIsNavigating(true);
      setActiveSection(sectionId);

      const yOffset = -80; // height of your navbar
      const elementTop = element.getBoundingClientRect().top;
      const currentScrollY = window.scrollY;
      const y = elementTop + currentScrollY + yOffset;

      try {
        setTimeout(() => {
          if (Math.abs(window.scrollY - y) > 50) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } catch (error) {
        console.error("Scroll error:", error);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
    } else {
      console.error("Element not found for ID:", sectionId);
    }
  }, []);
  return (
    <div className="min-h-full  text-foreground font-['Roboto']  w-full bg-background">
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
};

export default memo(Home);
