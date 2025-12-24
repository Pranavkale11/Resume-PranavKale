import { motion } from "framer-motion";
import { Award, Cloud, Network, Cpu, Code, Brain } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025",
    subtitle: "AI Foundations Associate",
    issuer: "Oracle",
    icon: Cloud,
    color: "primary",
  },
  {
    title: "Bits and Bytes of Computer Networking",
    subtitle: "Professional Certificate",
    issuer: "Google",
    icon: Network,
    color: "secondary",
  },
  {
    title: "Introduction to Internet of Things",
    subtitle: "Course Completion",
    issuer: "NPTEL",
    icon: Cpu,
    color: "accent",
  },
  {
    title: "Python Coder",
    subtitle: "Verified Certificate",
    issuer: "Kaggle",
    icon: Code,
    color: "primary",
  },
  {
    title: "AI Foundation Course",
    subtitle: "Professional Certificate",
    issuer: "Jio Institute",
    icon: Brain,
    color: "secondary",
  },
];

const colorVariants: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
    badge: "bg-primary/20 text-primary",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/30",
    text: "text-secondary",
    badge: "bg-secondary/20 text-secondary",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
    badge: "bg-accent/20 text-accent",
  },
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const variant = colorVariants[cert.color];
            const Icon = cert.icon;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`glass rounded-2xl p-6 border ${variant.border} transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--${cert.color})/0.15)]`}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${variant.bg} flex items-center justify-center flex-shrink-0`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className={`w-7 h-7 ${variant.text}`} />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold leading-tight mb-1 line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{cert.subtitle}</p>
                    <div className="flex items-center gap-2">
                      <Award className={`w-4 h-4 ${variant.text}`} />
                      <span className={`text-sm font-medium ${variant.badge} px-2 py-0.5 rounded-md`}>
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
