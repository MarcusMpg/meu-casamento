import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Heart, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Confirmação enviada!", {
      description:
        "Obrigado por confirmar sua presença! Estamos ansiosos para celebrar com você.",
    });
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    emailjs
      .send(
        "service_jatoxbx",
        "template_c8nhxap",
        templateParams,
        "xClUaZZGuyXypGL7Q",
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.log("ERROR ", err);
        },
      );
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-romantic">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4 text-foreground"
            translate="no"
          >
            Confirme sua Presença
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-primary"></div>
            <Heart className="w-8 h-8 text-primary" />
            <div className="h-px w-20 bg-primary"></div>
          </div>
          <p className="text-lg text-muted-foreground" translate="no">
            Por favor, confirme sua presença até{" "}
            <strong>15 de maio de 2026</strong>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant animate-slide-up"
        >
          <div className="space-y-6">
            <div>
              <Label
                htmlFor="name"
                className="text-lg font-medium"
                translate="no"
              >
                Nome Completo *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-2 h-12 text-lg"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <Label
                htmlFor="email"
                className="text-lg font-medium"
                translate="no"
              >
                E-mail *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-2 h-12 text-lg"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <Label
                htmlFor="message"
                className="text-lg font-medium"
                translate="no"
              >
                Deixe uma Mensagem para os Noivos
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
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
