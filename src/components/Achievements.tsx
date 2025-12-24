import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";

const achievements = [
  {
    title: "Top 35 Finalist – MP Police CyberShield Hackathon 2025",
    description:
      "Selected among the top 35 teams in a state-level cybersecurity hackathon organized with MP Police, recognizing innovation, teamwork, and problem-solving skills in digital security.",
    icon: Trophy,
    color: "primary",
    highlight: true,
  },
  {
    title: "Tech Contributor – GirlScript Summer of Code 2025",
    description:
      "Selected as a contributor for GSSoC 2025, contributing to open-source projects and collaborating with developers worldwide.",
    icon: Award,
    color: "secondary",
    highlight: false,
  },
  {
    title: "National Hackathon Participation",
    description:
      "Active participant in multiple national-level hackathons, building innovative solutions and gaining hands-on experience in rapid prototyping.",
    icon: Star,
    color: "accent",
    highlight: false,
  },
];

const colorVariants: Record<
  string,
  { bg: string; text: string; glow: string }
> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    glow: "shadow-[0_0_40px_hsl(var(--primary)/0.25)]",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    glow: "shadow-[0_0_40px_hsl(var(--secondary)/0.25)]",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    glow: "shadow-[0_0_40px_hsl(var(--accent)/0.25)]",
  },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6">
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
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            const variant = colorVariants[item.color];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 ${variant.glow}`}
              >
                {item.highlight && (
                  <span className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}

                <div
                  className={`w-14 h-14 rounded-xl ${variant.bg} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-7 h-7 ${variant.text}`} />
                </div>

                <h3 className="text-lg font-display font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
