import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";

const achievements = [
  {
    title: "Top 35 Finalist – MP Police CyberShield Hackathon 2025",
    description: "Selected among the top 35 teams in a state-level cybersecurity hackathon organized with MP Police, recognizing innovation, teamwork, and problem-solving skills in digital security.",
    icon: Trophy,
    color: "primary",
    highlight: true,
  },
  {
    title: "Tech Contributor – GirlScript Summer of Code 2025",
    description: "Selected as a contributor for GSSoC 2025, contributing to open-source projects and collaborating with developers worldwide.",
    icon: Award,
    color: "secondary",
    highlight: false,
  },
  {
    title: "National Hackathon Participation",
    description: "Active participant in multiple national-level hackathons, building innovative solutions and gaining hands-on experience in rapid prototyping.",
    icon: Star,
    color: "accent",
    highlight: false,
  },
];

const colorVariants: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
    glow: "shadow-[0_0_40px_hsl(var(--primary)/0.2)]",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/30",
    text: "text-secondary",
    glow: "shadow-[0_0_40px_hsl(var(--secondary)/0.2)]",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
    glow: "shadow-[0_0_40px_hsl(var(--accent)/0.2)]",
  },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const variant = colorVariants[achievement.color];
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                  achievement.highlight ? variant.glow : ""
                } hover:${variant.glow}`}
              >
                {/* Highlight badge */}
                {achievement.highlight && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full"
                  >
                    Featured
                  </motion.div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${variant.bg} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className={`w-7 h-7 ${variant.text}`} />
                  </motion.div>
                </div>

                <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {achievement.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, hsl(var(--${achievement.color}) / 0.1), transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Image placeholder section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Medal className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-display font-semibold">Certificates & Recognition</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-[4/3] rounded-xl bg-muted/30 border border-border/30 flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors"
              >
                <span className="text-muted-foreground text-sm">Add Image</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
