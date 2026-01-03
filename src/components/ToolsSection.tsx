import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { category: "Desarrollo", items: ["VS Code", "Git", "Docker", "Postman"] },
  { category: "Gestión", items: ["Notion", "Jira", "Trello"] },
  { category: "Comunicación", items: ["Slack", "Meet", "Teams"] },
  { category: "Visualización", items: ["Power BI", "Tableau", "Figma"] },
];

export const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="herramientas" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">— Herramientas</span>
          <h2 className="section-title">
            Stack <span className="gradient-text">Operativo</span>
          </h2>
          <p className="section-subtitle max-w-2xl">
            Las herramientas que uso para mantener la productividad y calidad
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-display font-semibold text-primary mb-4">{group.category}</h3>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
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
