import { motion } from "framer-motion";
import { Cloud, Code, Globe, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Computing",
    icon: Cloud,
    color: "primary",
    skills: ["Cloud Fundamentals", "Cloud Architecture Basics", "AWS/Azure Basics", "Cloud Services"],
  },
  {
    title: "Programming",
    icon: Code,
    color: "secondary",
    skills: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "accent",
    skills: ["HTML", "CSS", "React", "Frontend Development"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    color: "primary",
    skills: ["AI Fundamentals", "Machine Learning Basics", "Data Analysis"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "secondary",
    skills: ["GitHub", "Linux", "Version Control", "VS Code"],
  },
];

const colorVariants: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/30",
    text: "text-secondary",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]",
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const variant = colorVariants[category.color];
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group glass rounded-2xl p-6 border ${variant.border} transition-all duration-300 hover:-translate-y-2 ${variant.glow}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${variant.bg} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className={`w-7 h-7 ${variant.text}`} />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className={`px-3 py-1.5 text-sm rounded-lg ${variant.bg} ${variant.text} border ${variant.border} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
