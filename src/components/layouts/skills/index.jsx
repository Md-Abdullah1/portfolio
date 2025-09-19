import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillsData = useMemo(
    () => ({
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
        "Api Intergration",
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
      tools: ["Git/GitHub", "VS-Code", "Cursor", "Prompt Engineering"],
      strengths: [
        "Problem-Solving",
        "Quick Learner",
        "Team Player",
        "Time Management",
      ],
    }),
    []
  );
  return (
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
          {Object.entries(skillsData).map(([category, skillList], index) => (
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
  );
};

export default memo(Skills);
