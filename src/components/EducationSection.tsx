import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    period: "2020 – Actualidad",
    title: "Técnico Superior en Informática Aplicada",
    institution: "Instituto Nacional Superior del Profesorado Técnico",
    type: "Terciario",
  },
  {
    period: "2024",
    title: "Diplomatura en Programación Web Full Stack con React Js",
    institution: "UTN",
    type: "Diplomatura",
  },
  {
    period: "2023",
    title: "Desarrollo en React Js",
    institution: "UTN",
    type: "Curso",
  },
  {
    period: "2014 – 2019",
    title: "Técnico en Electrónica",
    institution: "Escuela Técnica Ing. Luis Augusto Huergo",
    type: "Secundario",
  },
];

const certifications = [
  {
    title: "Fundamentos profesionales del análisis de datos",
    institution: "Microsoft",
    year: "2025",
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="formacion" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">— Formación</span>
          <h2 className="section-title">
            <span className="gradient-text">Educación</span> y Certificaciones
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {/* Main Education */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="font-display font-semibold text-xl">Formación Académica</h3>
              </div>
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border card-hover"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {item.type}
                    </span>
                    <span className="text-muted-foreground text-sm">{item.period}</span>
                  </div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.institution}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-secondary" />
                <h3 className="font-display font-semibold text-xl">Certificaciones</h3>
              </div>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-secondary/30 hover:border-secondary/50 transition-colors"
                >
                  <span className="text-secondary text-sm font-mono">{cert.year}</span>
                  <h4 className="font-semibold mt-2 mb-1">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm">{cert.institution}</p>
                </motion.div>
              ))}

              {/* Additional */}
              <div className="mt-6 p-5 rounded-xl bg-muted/50 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-medium">Formación Adicional</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Taller de Robótica y Automatización en RobotGroup (2010-2014)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
