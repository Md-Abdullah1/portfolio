import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card/20 section-fade-in">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] mb-6 text-gradient">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create
            something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card className="neon-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-['Orbitron'] text-primary mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <a
                        href="mailto:ahilabdullah111@gmail.com"
                        className="hover:underline"
                      >
                        ahilabdullah111@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-primary" />
                      <a href="tel:+919505934716" className="hover:underline">
                        9505934716
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Github className="w-6 h-6 text-primary" />
                      <a
                        href="https://github.com/Md-Abdullah1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Md-Abdullah
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Linkedin className="w-6 h-6 text-primary" />
                      <a
                        href="https://linkedin.com/in/md-abdullah-29a067260"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        md-abdullah
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button className="flex-1 glow-effect">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:ahilabdullah111@gmail.com">Send Email</a>
                </Button>
                <Button variant="outline" className="flex-1 neon-border">
                  <Download className="w-4 h-4 mr-2" />
                  <a
                    href="/public/Md-Abdulah-RESUME.pdf"
                    download="Md_Abdullah_Resume.pdf"
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="neon-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-['Orbitron'] text-primary mb-6">
                    Let's Connect
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm always excited to discuss new opportunities, innovative
                    projects, and potential collaborations. Whether you have a
                    project in mind or just want to connect, feel free to reach
                    out!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <span>Available for freelance projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <span>Open to full-time opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <span>Interested in collaboration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
