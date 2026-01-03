import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">GD</span>
            </div>
            <span className="font-display font-semibold">Guido D'Aloisio</span>
          </div>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} • Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> en Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
};
