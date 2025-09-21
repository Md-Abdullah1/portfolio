import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Experience = () => {
  const experienceData = useMemo(
    () => [
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
    ],
    []
  );
  return (
    <section id="experience" className="py-20 bg-card/20 section-fade-in w-full">
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
          {experienceData.map((exp, index) => (
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
  );
};

export default memo(Experience);
