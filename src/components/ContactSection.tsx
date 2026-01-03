import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary font-medium mb-4 block">— Contacto</span>
          <h2 className="section-title">
            ¿Trabajamos <span className="gradient-text">Juntos</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Estoy disponible para proyectos de desarrollo, análisis de datos, 
            consultoría técnica y capacitaciones. ¡Escribime!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2">
              <a href="mailto:daloisio.guido.esteban@gmail.com">
                <Mail className="w-5 h-5" />
                Enviar Email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-border hover:bg-muted">
              <a href="https://www.linkedin.com/in/guidodaloisio" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm">daloisio.guido.esteban@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Buenos Aires, Argentina</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
