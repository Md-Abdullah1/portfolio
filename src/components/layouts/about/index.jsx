import { memo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Code, Palette, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 section-fade-in w-full">
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
                  I'm a passionate Fullstack Developer specializing in the MERN
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
                  I thrive on tackling complex challenges and finding innovative
                  solutions that drive results.
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
                  Constantly adapting to new technologies and frameworks to stay
                  ahead in the ever-evolving tech landscape.
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
                  Experienced in working with cross-functional teams to deliver
                  high-quality, performance-driven solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
