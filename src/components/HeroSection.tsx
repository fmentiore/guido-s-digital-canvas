import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Database, BarChart3, GraduationCap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const techBadges = [
  { icon: Code2, label: "React", position: "top-[15%] right-[5%]" },
  { icon: Database, label: "SQL", position: "top-[35%] right-[-5%]" },
  { icon: BarChart3, label: "Power BI", position: "bottom-[30%] right-[0%]" },
  { icon: GraduationCap, label: "Mentor", position: "bottom-[10%] right-[15%]" },
];

export const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-medium mb-4 tracking-wide">
              — Bienvenido
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Hola, soy{" "}
              <span className="gradient-text">Guido</span>
              <br />
              D'Aloisio
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              Profesional integral en tecnología con perfil híbrido como{" "}
              <span className="text-foreground font-medium">Analista de Datos</span> y{" "}
              <span className="text-foreground font-medium">Desarrollador Full Stack</span>,
              orientado a la creación de soluciones digitales eficientes, automatizadas y centradas en datos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6 h-12">
                <a href="#contacto">Contáctame</a>
              </Button>
              <Button asChild variant="outline" className="h-12 px-6 border-border hover:bg-muted">
                <a href="#perfil">Conocer más</a>
              </Button>
            </div>
          </motion.div>

          {/* Right content - Photo with ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full border-[6px] border-primary animate-pulse-glow" 
                style={{ 
                  width: "calc(100% + 40px)", 
                  height: "calc(100% + 40px)",
                  top: "-20px",
                  left: "-20px"
                }}
              />
              {/* Photo container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card">
                <img
                  src={profilePhoto}
                  alt="Guido D'Aloisio"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating tech badges */}
              {techBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`absolute ${badge.position} animate-float`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                    <badge.icon className="w-6 h-6 text-primary" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#perfil" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
