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

  const scrollToSection = useCallback(() => {
    (sectionId) => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    };
  }, []);
  return (
    <div className="min-h-full  text-foreground font-['Roboto']  w-full bg-amber-500">
      {/* Header */}
      {/* <Header activeSection={activeSection} scrollToSection={scrollToSection} /> */}

      {/* Hero Section */}
      {/* <Hero scrollToSection={scrollToSection} /> */}

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
