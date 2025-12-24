import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Anti-India Campaign Detection System",
    description:
      "A data-driven system designed to detect and analyze coordinated anti-India campaigns on social media platforms. Focuses on identifying misinformation patterns, harmful narratives, and suspicious activity using data monitoring and analytical techniques.",
    tech: ["Python", "Data Analysis", "Machine Learning"],
    color: "primary",
  },
  {
    title: "Aarogya Saarthi",
    description:
      "A mobile-first web platform engineered to close the critical health information gap in rural India. Addresses low literacy levels and language barriers by delivering simplified, accessible, and reliable health information through a user-friendly interface.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "secondary",
  },
  {
    title: "Paper Swiper",
    description:
      "An AI & Computer Science research discovery platform with a Tinder-style swipe interface. Automatically fetches new research papers daily at midnight (IST), filters English papers with 15+ pages using 40+ AI/CS keywords, and provides direct links to full papers. Built with cloud-based storage for scalable paper management.",
    tech: [
      "React",
      "MongoDB Atlas",
      "REST APIs",
      "Cloud Database",
      "Automation",
    ],
    color: "accent",
  },
  {
    title: "CodeZenith Website",
    description:
      "A modern, responsive website for a coding community platform featuring clean UI, interactive elements, and seamless user experience with focus on frontend best practices.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    color: "primary",
  },
  {
    title: "E-Commerce Website",
    description:
      "A streamlined e-commerce solution demonstrating web development fundamentals with product listings, cart functionality, and a clean checkout flow.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "secondary",
  },
  {
    title: "Wellness HMS",
    description:
      "A comprehensive Hospital Management System focused on wellness services with patient tracking, appointment scheduling, and streamlined healthcare workflows.",
    tech: ["React", "Express", "MySQL"],
    color: "accent",
  },
];

const colorVariants: Record<
  string,
  { bg: string; border: string; text: string; glow: string }
> = {
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
        {/* Heading */}
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

        {/* Project Cards */}
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
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${variant.bg} flex items-center justify-center`}
                    >
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

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
