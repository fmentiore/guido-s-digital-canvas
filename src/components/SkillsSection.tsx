import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Lenguajes",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Librerías",
    skills: ["React.js", "Node.js", "Spring Boot", "Express", "Pandas", "Matplotlib"],
  },
  {
    title: "Datos & BI",
    skills: ["Power BI", "Tableau", "Excel/VBA", "PostgreSQL", "MySQL", "Forecasting (ARIMA)"],
  },
  {
    title: "DevOps & Herramientas",
    skills: ["Git", "CI/CD", "Docker", "VS Code", "Jira", "Notion"],
  },
  {
    title: "Soft Skills",
    skills: ["Análisis", "Documentación", "Comunicación", "Mentoría", "Resolución de problemas"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">— Stack Técnico</span>
          <h2 className="section-title">
            <span className="gradient-text">Conocimientos</span> y Tecnologías
          </h2>
          <p className="section-subtitle max-w-2xl">
            Herramientas y habilidades que utilizo día a día
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
