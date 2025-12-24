import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 card-hover"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Who I Am</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Computer Science undergraduate at VIT Bhopal with a strong interest in cloud computing and frontend development. I enjoy building practical, scalable web solutions and exploring how modern cloud platforms and web technologies work together in real-world applications.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Actively learning, experimenting, and participating in hackathons and tech communities while building a strong foundation in cloud-driven systems.
            </p>

            <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Chhatrapati Sambhajinagar, Maharashtra, India</span>
            </div>
          </motion.div>

          {/* Career Goal Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 card-hover"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Career Direction</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Focused on strengthening my expertise in cloud computing and frontend development while building real-world, scalable, and user-centric applications.
            </p>

            {/* Animated divider */}
            <div className="relative h-px w-full my-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <motion.div
                className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-primary to-secondary blur-sm"
                animate={{ x: ["-100%", "500%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl bg-primary/10">
                <p className="text-3xl font-bold text-primary">Cloud</p>
                <p className="text-sm text-muted-foreground">Computing</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/10">
                <p className="text-3xl font-bold text-secondary">Frontend</p>
                <p className="text-sm text-muted-foreground">Development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
