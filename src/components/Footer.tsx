import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <div>
            <p className="gradient-text font-display font-bold text-lg">
              Pranav Kale Jain
            </p>
            <p className="text-sm text-muted-foreground">
              Aspiring Cloud computing Engineer • Cloud Enthusiast
            </p>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built by Pranav in {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
