import { MapPin, Clock, Calendar } from "lucide-react";
import ceremonyImage from "@/assets/ceremony-venue.jpg";
import receptionImage from "@/assets/reception-venue.jpg";

const CeremonyDetails = () => {
  return (
    <section id="cerimonia" className="py-20 px-4 bg-gradient-romantic">
      <div className="container mx-auto max-w-6xl">
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

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Cerimônia */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant animate-slide-up">
            <div className="mb-6">
              <img 
                src={ceremonyImage} 
                alt="Capela" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-primary">Cerimônia</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Data</p>
                  <p className="text-muted-foreground">24 de Janeiro de 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Horário</p>
                  <p className="text-muted-foreground">10:00hs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Local</p>
                  <p className="text-muted-foreground">Capela do Colégio Santa Rosa</p>
                  <p className="text-sm text-muted-foreground">
                    Travessa Padre Eutíquio, 1549<br />
                    Batista Campos, Belém-PA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recepção */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant animate-slide-up">
            <div className="mb-6">
              <img 
                src={receptionImage} 
                alt="Recepção" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-primary">Recepção</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Data</p>
                  <p className="text-muted-foreground">24 de Janeiro de 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Horário</p>
                  <p className="text-muted-foreground">12:00hs às 18:00hs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Local</p>
                  <p className="text-muted-foreground">Largo da 16</p>
                  <p className="text-sm text-muted-foreground">
                    Avenida 16 de Novembro, 41<br />
                    Cidade Velha, Belém-PA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeremonyDetails;