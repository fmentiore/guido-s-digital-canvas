import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Wrench, CheckCircle, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Análisis",
    description: "Entender el problema, los objetivos y el contexto del proyecto.",
  },
  {
    icon: Lightbulb,
    title: "Diseño",
    description: "Definir la arquitectura, tecnologías y enfoque de la solución.",
  },
  {
    icon: Wrench,
    title: "Implementación",
    description: "Desarrollo iterativo con entregas incrementales y código limpio.",
  },
  {
    icon: CheckCircle,
    title: "Validación",
    description: "Testing, revisión de calidad y feedback del cliente.",
  },
  {
    icon: RefreshCw,
    title: "Iteración",
    description: "Mejora continua basada en resultados y nuevas necesidades.",
  },
];

export const MethodologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metodologia" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">— Metodología</span>
          <h2 className="section-title">
            Cómo <span className="gradient-text">Trabajo</span>
          </h2>
          <p className="section-subtitle max-w-2xl">
            Un enfoque estructurado que genera confianza y resultados
          </p>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-secondary font-mono text-sm mb-2">0{index + 1}</span>
                  <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
