import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useMemo } from "react";

const Projects = () => {
  const projectsData = useMemo(
    () => [
      {
        title: "BUILDER SUITE",
        description:
          "Driving the Builder Project by developing scalable, reusable components and managing complex state for seamless feature integration. Optimized API interactions, enhancing data flow and user engagement by 40%.",
        tech: ["React.js", "GSAP", "SCSS", "Lodash"],
        impact: "40% increase in user engagement",
        link: "https://www.ve.ai",
      },
      {
        title: "TASKIFY",
        description:
          "Developed a Task Management System using Next.js and MERN stack, featuring secure role-based authentication, real-time updates, and optimized MongoDB queries.",
        tech: ["Next.js", "MongoDB", "Node.js", "Express.js"],
        impact: "40% improvement in task efficiency",
        link: "https://github.com/Md-Abdullah1/taskify",
      },
      {
        title: "HRMS",
        description:
          "Contributed to an HRMS application, improving employee tracking and management efficiency through optimized workflows and automation.",
        tech: ["React.js", "Node.js", "MongoDB"],
        impact: "30% efficiency improvement",
        link: "https://github.com/Md-Abdullah1/appkube-hrms-ui",
      },
      {
        title: "POS APPLICATION",
        description:
          "Developed a POS application using React Native, improving transaction efficiency and enhancing customer engagement through optimized UI/UX.",
        tech: ["React Native", "API Integration"],
        impact: "30% transaction efficiency boost",
        link: "https://github.com/Md-Abdullah1/appkube-pos-app",
      },
    ],
    []
  );
  return (
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
          {projectsData.map((project, index) => (
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
                  <a
                    href={project?.link}
                    target="_blank"
                    rel="noopener noreferer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full neon-border cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
