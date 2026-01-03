import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Zap, Users } from "lucide-react";

const highlights = [
  { icon: Lightbulb, text: "Pensamiento analítico y orientado a datos" },
  { icon: Target, text: "Soluciones escalables y automatizadas" },
  { icon: Zap, text: "Código limpio con principios SOLID" },
  { icon: Users, text: "Capacitación técnica personalizada" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="perfil" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">— Sobre Mí</span>
          <h2 className="section-title">
            Mi <span className="gradient-text">Perfil</span> Profesional
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Left - Description */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Profesional integral en tecnología con un perfil híbrido que combina el análisis de datos 
                con el desarrollo full stack. Mi enfoque está en crear soluciones digitales que no solo 
                funcionan, sino que están fundamentadas en datos y diseñadas para escalar.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En desarrollo, trabajo con <span className="text-foreground font-medium">React, Node.js, PostgreSQL y MySQL</span>, 
                aplicando principios SOLID, patrones de diseño y prácticas de código limpio. 
                En el área de datos, domino herramientas como <span className="text-foreground font-medium">Power BI, Tableau, 
                Python (pandas, matplotlib, seaborn)</span> y Excel avanzado con VBA.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Tengo experiencia implementando modelos de forecasting como ARIMA y análisis estacional, 
                con evaluación del rendimiento mediante métricas como MAE y RMSE. Combino esta 
                experiencia técnica con una pasión por la enseñanza y la mentoría.
              </p>
            </div>

            {/* Right - Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
