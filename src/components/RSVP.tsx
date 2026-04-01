import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Heart, Send } from "lucide-react";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Confirmação enviada!", {
      description: "Obrigado por confirmar sua presença! Estamos ansiosos para celebrar com você.",
    });
    setFormData({ name: "", email: "", guests: "1", message: "" });
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-romantic">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Confirme sua Presença
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-primary"></div>
            <Heart className="w-8 h-8 text-primary" />
            <div className="h-px w-20 bg-primary"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            Por favor, confirme sua presença até <strong>30 de Junho de 2026</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant animate-slide-up">
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg font-medium">
                Nome Completo *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 h-12 text-lg"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-lg font-medium">
                E-mail *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 h-12 text-lg"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <Label htmlFor="guests" className="text-lg font-medium">
                Número de Acompanhantes
              </Label>
              <Input
                id="guests"
                type="number"
                min="0"
                max="5"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="mt-2 h-12 text-lg"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-lg font-medium">
                Deixe uma Mensagem para os Noivos
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2 min-h-32 text-lg"
                placeholder="Sua mensagem de carinho..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-lg h-14 bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-elegant"
            >
              <Send className="w-5 h-5 mr-2" />
              Enviar Confirmação
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RSVP;