import { motion } from "framer-motion";
import { Users, Code2, Rocket, Globe } from "lucide-react";

const communityItems = [
  {
    title: "National Hackathon Participant",
    description: "Active participation in national-level hackathons, developing innovative solutions under time constraints and collaborating with diverse teams.",
    icon: Rocket,
    color: "primary",
  },
  {
    title: "GirlScript Summer of Code 2025",
    description: "Selected as Tech Contributor for GSSoC 2025, contributing to open-source projects and engaging with the global developer community.",
    icon: Code2,
    color: "secondary",
  },
  {
    title: "College Tech Communities",
    description: "Active involvement in VIT Bhopal tech clubs including E-Cell, UX Club, iCreate, and CloudZone, contributing to design, events, and community growth.",
    icon: Users,
    color: "accent",
  },
  {
    title: "Open Source Contributor",
    description: "Contributing to open-source projects, learning collaborative development practices, and building connections in the global developer ecosystem.",
    icon: Globe,
    color: "primary",
  },
];

const colorVariants: Record<string, { bg: string; border: string; text: string }> = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/30",
    text: "text-secondary",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
  },
};

const Community = () => {
  return (
    <section id="community" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Community & <span className="gradient-text">Participation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {communityItems.map((item, index) => {
            const variant = colorVariants[item.color];
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${variant.bg} flex items-center justify-center shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className={`w-7 h-7 ${variant.text}`} />
                  </motion.div>

                  <div>
                    <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Animated bottom border */}
                <div className="relative mt-4 h-px w-full overflow-hidden">
                  <div className={`absolute inset-0 ${variant.bg}`} />
                  <motion.div
                    className={`absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent ${variant.text.replace('text-', 'via-')} to-transparent opacity-0 group-hover:opacity-100`}
                    animate={{ x: ["-100%", "400%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats or highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Passionate about building, learning, and growing with the tech community
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Tech Communities</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">Multiple</p>
              <p className="text-sm text-muted-foreground">Hackathons</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">GSSoC'25</p>
              <p className="text-sm text-muted-foreground">Contributor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
