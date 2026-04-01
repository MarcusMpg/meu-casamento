import { Gift, Heart, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import qrCodePix from "@/assets/qr-code-pix.jpg";

interface GiftItem {
  name: string;
  price: string;
}

const GiftRegistry = () => {
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const gifts: GiftItem[] = [
    { name: "Vale mensagem para a noiva", price: "R$ 50,00" },
    { name: "Remédio de intolerância à lactose para a noiva comer tudo", price: "R$ 60,00" },
    { name: "Cofrinho da lua de mel — para juntar amor e trocados", price: "R$ 80,00" },
    { name: "Dose de paciência para o noivo esperar a noiva se arrumar", price: "R$ 85,00" },
    { name: "Lenço para o noivo chorão secar as lágrimas na entrada da noiva", price: "R$ 85,00" },
    { name: "Tampão de ouvido para a noiva não escutar o noivo jogar", price: "R$ 100,00" },
    { name: "Aulas de como fritar ovo", price: "R$ 100,00" },
    { name: "Cobertor para a noiva estar sempre coberta de razão", price: "R$ 125,00" },
    { name: "Cafezinho no aeroporto", price: "R$ 130,00" },
    { name: "Café da manhã romântico no quarto", price: "R$ 150,00" },
    { name: "Taxa para a noiva não jogar o buquê para a sua namorada", price: "R$ 150,00" },
    { name: "Kit 'sobrevivência a dois' (chocolate + paciência + Wi-Fi)", price: "R$ 150,00" },
    { name: "Passeio de buggy", price: "R$ 174,00" },
    { name: "3 meses de netflix", price: "R$ 180,00" },
    { name: "Curso intensivo de 'Sim, amor, você tem razão'", price: "R$ 180,00" },
    { name: "Vale shoppe para a noiva", price: "R$ 200,00" },
    { name: "Vale para a noiva deixar o noivo jogar vídeo game a vontade", price: "R$ 220,00" },
    { name: "Cota Jantar Romântico para o Casal", price: "R$ 250,00" },
    { name: "Din Din para as lembrancinhas", price: "R$ 275,00" },
    { name: "Diária no hotel", price: "R$ 300,00" },
    { name: "Vale Passeio de Barco", price: "R$ 300,00" },
    { name: "Cotas de lua de mel!", price: "R$ 330,00" },
    { name: "Contribua com o cartório", price: "R$ 385,00" },
    { name: "Um curso de culinária básica para a noiva", price: "R$ 400,00" },
    { name: "Academia para os noivos entrarem em forma depois da lua de mel", price: "R$ 480,00" },
    { name: "Ajuda com a aposentadoria dos noivos", price: "R$ 500,00" },
    { name: "Ajuda com a fatura do cartão do noivo", price: "R$ 550,00" },
    { name: "Psicólogo para os noivos não surtarem com os preparativos", price: "R$ 580,00" },
    { name: "Um ano de cabelo do noivo", price: "R$ 600,00" },
    { name: "Rota dos milagres", price: "R$ 660,00" },
    { name: "Traslado do aeroporto/hotel/aeroporto", price: "R$ 680,00" },
    { name: "Peça nova de computador para o noivo", price: "R$ 750,00" },
    { name: "Seja nosso convidado preferido", price: "R$ 800,00" },
    { name: "Deixar o passaporte e visto em dia", price: "R$ 932,00" },
    { name: "Mercado para a noiva intolerante e alérgica", price: "R$ 1.000,00" },
    { name: "Eu sou ricaaaaa", price: "R$ 1.500,00" },
    { name: "2 Passagens Aéreas para a Lua de Mel", price: "R$ 1.800,00" },
    { name: "Dar pitaco/ falar mal da festa", price: "R$ 2.000,00" },
    { name: "Deus te iluminou e você resolveu dar uma boa ajuda na nossa lua de mel", price: "R$ 2.500,00" },
  ];

  const handleGiftClick = (gift: GiftItem) => {
    setSelectedGift(gift);
    setIsDialogOpen(true);
  };

  return (
    <section id="presentes" className="py-20 px-4 bg-gradient-romantic">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Lista de Presentes
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-primary"></div>
            <Gift className="w-8 h-8 text-primary" />
            <div className="h-px w-20 bg-primary"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preparamos nossa lista de presentes de um jeitinho diferente: todos os itens são simbólicos e podem ser adquiridos através de Pix. Cada presente representa um pedacinho do nosso novo começo!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up">
          {gifts.map((gift, index) => (
            <button
              key={index}
              onClick={() => handleGiftClick(gift)}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-elegant transition-all duration-300 hover:scale-105 text-left group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-foreground font-medium mb-2 group-hover:text-primary transition-colors">
                    {gift.name}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {gift.price}
                  </p>
                </div>
                <Heart className="w-5 h-5 text-primary flex-shrink-0 group-hover:fill-primary transition-all" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Clique em qualquer presente para ver as informações de pagamento via Pix
          </p>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              {selectedGift?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-center text-2xl font-bold text-primary">
              {selectedGift?.price}
            </p>
            <div className="flex justify-center">
              <img 
                src={qrCodePix} 
                alt="QR Code PIX para presente" 
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Escaneie o QR Code acima para fazer o PIX
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GiftRegistry;