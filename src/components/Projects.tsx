import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "CodeZenith Website",
    description: "A modern, responsive website for a coding community platform featuring clean UI and interactive elements.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    color: "primary",
  },
  {
    title: "E-Commerce Simple Website",
    description: "A streamlined e-commerce solution with product listings, cart functionality, and checkout flow.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "secondary",
  },
  {
    title: "Wellness HMS",
    description: "Hospital Management System focused on wellness services with patient tracking and appointment scheduling.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "accent",
  },
  {
    title: "Demo HMS",
    description: "A demonstration healthcare management system showcasing core hospital operations and patient care workflows.",
    tech: ["Python", "Flask", "PostgreSQL"],
    color: "primary",
  },
  {
    title: "Wellnest Project",
    description: "A comprehensive wellness platform integrating health tracking, nutrition planning, and fitness management.",
    tech: ["React", "Express", "MySQL"],
    color: "secondary",
  },
];

const colorVariants: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
    glow: "hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/30",
    text: "text-secondary",
    glow: "hover:shadow-[0_0_40px_hsl(var(--secondary)/0.2)]",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
    glow: "hover:shadow-[0_0_40px_hsl(var(--accent)/0.2)]",
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const variant = colorVariants[project.color];

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative glass rounded-2xl overflow-hidden transition-all duration-500 ${variant.glow}`}
              >
                {/* Card content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${variant.bg} flex items-center justify-center`}>
                      <Folder className={`w-6 h-6 ${variant.text}`} />
                    </div>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-muted/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  style={{
                    background: `radial-gradient(circle at 50% 0%, hsl(var(--${project.color}) / 0.1), transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
