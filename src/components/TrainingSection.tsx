import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, User, BookOpen, Target } from "lucide-react";

const technologies = [
  "Excel Avanzado", "SQL", "MySQL", "Access", "Power BI",
  "Python", "Programación", "Dibujo Técnico", "Robótica", "Matemática", "Física"
];

const modalities = [
  { icon: User, title: "Individual", description: "Clases 1 a 1 adaptadas a tu ritmo y objetivos" },
  { icon: Users, title: "Grupal", description: "Formación en equipo para empresas u organizaciones" },
];

export const TrainingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capacitacion" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">— Capacitación</span>
          <h2 className="section-title">
            <span className="gradient-text">Enseñanza</span> y Mentoría
          </h2>
          <p className="section-subtitle max-w-2xl">
            Formación técnica con enfoque práctico y personalizado
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Technologies I teach */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="font-display font-semibold text-xl">Tecnologías que Enseño</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Modalities */}
            <div className="space-y-4">
              {modalities.map((mod, index) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <mod.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg">{mod.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{mod.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
          >
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h4 className="font-display font-semibold text-lg mb-2">Enfoque Pedagógico</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Clases presenciales y virtuales, utilizando simuladores, plataformas interactivas y 
                  recursos asincrónicos. Aprendizaje basado en casos prácticos y proyectos reales, 
                  adaptado a niveles inicial, intermedio y avanzado.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
