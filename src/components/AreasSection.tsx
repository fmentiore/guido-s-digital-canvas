import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BarChart3, Cog, GraduationCap } from "lucide-react";

const areas = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    subtitle: "Full Stack",
    description: "Aplicaciones web escalables con React, Node.js, Spring Boot. Interfaces intuitivas y APIs robustas.",
  },
  {
    icon: BarChart3,
    title: "Análisis de Datos",
    subtitle: "Visualización & BI",
    description: "Dashboards interactivos, análisis predictivo y reportes ejecutivos con Power BI, Tableau y Python.",
  },
  {
    icon: Cog,
    title: "Automatización",
    subtitle: "Procesos & Flujos",
    description: "Optimización de procesos mediante scripts, pipelines de datos y automatización de tareas repetitivas.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación",
    subtitle: "Mentoría Técnica",
    description: "Formación personalizada en programación, análisis de datos y herramientas de productividad.",
  },
];

export const AreasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="areas" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">— Áreas de Trabajo</span>
          <h2 className="section-title">
            ¿Qué <span className="gradient-text">Problemas</span> Resuelvo?
          </h2>
          <p className="section-subtitle max-w-2xl">
            Combinando desarrollo y datos para crear soluciones integrales
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{area.title}</h3>
                <span className="text-primary text-sm font-medium">{area.subtitle}</span>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
