import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const roles = ["Frontend", "Full Stack", "React"];
const Hero = ({ scrollToSection }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000); // every 4s
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center hero-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-background/70"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold font-['Orbitron'] mb-6">
            <span className="text-gradient">Md Abdullah</span>
          </h1>
          <div className="text-2xl md:text-4xl mb-8 h-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="typing-animation hidden md:inline-block font-['Orbitron']"
            >
              Frontend Developer | Full Stack Developer | React Developer
            </motion.p>

            {/* Mobile (only animated role + "Developer") */}
            <motion.p
              key={index}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "linear" }}
              className="typing-animation block md:hidden font-['Orbitron']"
            >
              {roles[index]} Developer
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
              className="glow-effect pulse-glow font-['Orbitron'] cursor-pointer"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="neon-border font-['Orbitron'] cursor-pointer"
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
  );
};

export default memo(Hero);
