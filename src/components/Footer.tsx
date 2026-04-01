import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <p className="text-2xl font-bold text-foreground">L & R</p>
          <Heart className="w-6 h-6 text-primary fill-primary" />
        </div>
        <p className="text-muted-foreground mb-2">
          24 de Janeiro de 2026
        </p>
        <p className="text-sm text-muted-foreground">
          Feito com amor para celebrar nosso para sempre
        </p>
      </div>
    </footer>
  );
};

export default Footer;