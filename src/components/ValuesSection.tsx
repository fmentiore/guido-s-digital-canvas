import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Eye, BookOpen, Target, Brain } from "lucide-react";

const values = [
  { icon: Sparkles, title: "Calidad", description: "Código limpio, soluciones robustas y atención al detalle." },
  { icon: Eye, title: "Claridad", description: "Comunicación transparente y documentación accesible." },
  { icon: BookOpen, title: "Aprendizaje Continuo", description: "Actualización constante en tecnologías y metodologías." },
  { icon: Target, title: "Orientación a Resultados", description: "Foco en generar valor real y medible." },
  { icon: Brain, title: "Pensamiento Crítico", description: "Análisis profundo antes de cada decisión técnica." },
];

export const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="valores" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">— Valores</span>
          <h2 className="section-title">
            Mis <span className="gradient-text">Principios</span>
          </h2>
          <p className="section-subtitle max-w-2xl">
            Los valores que guían mi trabajo y mis relaciones profesionales
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border card-hover group"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
