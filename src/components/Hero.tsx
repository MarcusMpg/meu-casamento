import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <Heart className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse" />
        
        <h1 className="text-7xl md:text-9xl font-bold mb-4 text-foreground tracking-tight">
          Larissa & Rodrigo
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-primary"></div>
          <p className="text-2xl md:text-3xl text-muted-foreground italic">
            Nosso Casamento
          </p>
          <div className="h-px w-16 bg-primary"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-foreground mb-12">
          24 de Janeiro de 2026
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#historia" 
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-elegant transition-all duration-300 hover:scale-105"
          >
            Nossa História
          </a>
          <a 
            href="#rsvp" 
            className="px-8 py-4 bg-card text-card-foreground border-2 border-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Confirmar Presença
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;