import { motion } from "framer-motion";
import { Briefcase, Users, Palette, Camera, Cloud } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    organization: "CertiFLEX",
    type: "Part-time",
    description: "Building responsive web interfaces and improving user experience for a certificate management platform.",
    icon: Briefcase,
    color: "primary",
  },
  {
    role: "Finance & Sponsorship Team",
    organization: "E-Cell, VIT Bhopal",
    type: "Club",
    description: "Managing sponsorships and financial planning for entrepreneurship events and initiatives.",
    icon: Users,
    color: "secondary",
  },
  {
    role: "Design Core Member",
    organization: "UX Club, VIT Bhopal",
    type: "Club",
    description: "Creating user-centered designs and contributing to UI/UX projects for various club initiatives.",
    icon: Palette,
    color: "accent",
  },
  {
    role: "Design Core Member",
    organization: "iCreate VITB",
    type: "Club",
    description: "Designing creative content and visual assets for events and social media campaigns.",
    icon: Camera,
    color: "primary",
  },
  {
    role: "Social Media & Design Team",
    organization: "CloudZone Club",
    type: "Club",
    description: "Managing social media presence and creating engaging content about cloud technologies.",
    icon: Cloud,
    color: "secondary",
  },
];

const colorVariants: Record<string, { bg: string; border: string; text: string; line: string }> = {
  primary: {
    bg: "bg-primary/20",
    border: "border-primary/40",
    text: "text-primary",
    line: "from-primary",
  },
  secondary: {
    bg: "bg-secondary/20",
    border: "border-secondary/40",
    text: "text-secondary",
    line: "from-secondary",
  },
  accent: {
    bg: "bg-accent/20",
    border: "border-accent/40",
    text: "text-accent",
    line: "from-accent",
  },
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const variant = colorVariants[exp.color];
              const Icon = exp.icon;

              return (
                <motion.div
                  key={`${exp.role}-${exp.organization}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`hidden md:flex w-16 h-16 rounded-full ${variant.bg} border-2 ${variant.border} items-center justify-center flex-shrink-0 z-10`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className={`w-7 h-7 ${variant.text}`} />
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    className="flex-1 glass rounded-2xl p-6 card-hover"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className={`md:hidden w-10 h-10 rounded-lg ${variant.bg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${variant.text}`} />
                      </div>
                      <h3 className="text-xl font-display font-semibold">{exp.role}</h3>
                      <span className={`px-3 py-1 text-xs rounded-full ${variant.bg} ${variant.text} border ${variant.border}`}>
                        {exp.type}
                      </span>
                    </div>
                    <p className={`${variant.text} font-medium mb-3`}>{exp.organization}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
