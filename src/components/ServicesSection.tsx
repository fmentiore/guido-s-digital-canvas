import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, BarChart, MessageSquare, Users, BookOpen } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Desarrollo de Aplicaciones Web",
    forWhom: "Empresas y emprendedores",
    benefit: "Aplicaciones a medida que digitalizan y optimizan procesos de negocio.",
  },
  {
    icon: BarChart,
    title: "Dashboards y Análisis de Datos",
    forWhom: "Equipos de gestión y operaciones",
    benefit: "Visualizaciones interactivas que transforman datos en decisiones informadas.",
  },
  {
    icon: MessageSquare,
    title: "Consultoría Técnica",
    forWhom: "Equipos de desarrollo y startups",
    benefit: "Asesoramiento en arquitectura, mejores prácticas y optimización de sistemas.",
  },
  {
    icon: Users,
    title: "Capacitación In-Company",
    forWhom: "Empresas y equipos",
    benefit: "Formación grupal adaptada a las necesidades específicas de tu organización.",
  },
  {
    icon: BookOpen,
    title: "Mentorías 1 a 1",
    forWhom: "Profesionales y estudiantes",
    benefit: "Acompañamiento personalizado para acelerar tu crecimiento técnico.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">— Servicios</span>
          <h2 className="section-title">
            ¿Qué <span className="gradient-text">Ofrezco</span>?
          </h2>
          <p className="section-subtitle max-w-2xl">
            Soluciones adaptadas a diferentes necesidades y contextos
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">Para: {service.forWhom}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
