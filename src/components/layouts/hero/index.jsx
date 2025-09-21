import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center hero-bg relative overflow-hidden"
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
          <h1 className="text-5xl md:text-8xl font-bold font-['Orbitron'] mb-6">
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
