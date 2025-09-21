import { memo } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="py-10 w-full border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col justify-center items-center ">
          <p className="text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-primary font-semibold">Md Abdullah</span>
          </p>
          <span className="text-sm w-fit">Crafted with ❤️ & ☕</span>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="mailto:ahilabdullah111@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Md-Abdullah1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/md-abdullah-29a067260"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default memo(Footer);
