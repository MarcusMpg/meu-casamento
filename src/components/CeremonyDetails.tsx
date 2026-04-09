import { MapPin, Clock, Calendar } from "lucide-react";
import ceremonyImage from "@/assets/ceremony-venue.jpg";
import ceremonyImage2 from "@/assets/ceremony-venue-2.jpg";

const CeremonyDetails = () => {
  return (
    <section id="cerimonia" className="py-20 px-4 bg-gradient-romantic">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Cerimônia & Recepção
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-primary"></div>
            <p className="text-lg text-muted-foreground italic">
              Celebre conosco este momento especial
            </p>
            <div className="h-px w-20 bg-primary"></div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant animate-slide-up">
          <div className="mb-8 grid grid-cols-2 gap-4">
            <img 
              src={ceremonyImage} 
              alt="Le Lys Jardim - Fachada" 
              className="w-full h-72 object-cover rounded-xl"
            />
            <img 
              src={ceremonyImage2} 
              alt="Le Lys Jardim - Cerimônia" 
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
          <h3 className="text-3xl font-bold mb-2 text-primary">Lelys Jardim</h3>
          <p className="text-muted-foreground mb-8">Cerimônia e recepção no mesmo local</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Data</p>
                <p className="text-muted-foreground">28 de Maio de 2026</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Horário</p>
                <p className="text-muted-foreground">19:45h</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Local</p>
                <p className="text-muted-foreground">
                  Av. Comandante Braz de Aguiar, 53<br />
                  Nazaré, Belém-PA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeremonyDetails;