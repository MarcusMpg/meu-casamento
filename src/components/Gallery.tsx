import { useState } from "react";
import { Camera } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";
import gallery11 from "@/assets/gallery-11.jpeg";
import gallery12 from "@/assets/gallery-12.jpeg";
import gallery13 from "@/assets/gallery-13.jpeg";
import gallery14 from "@/assets/gallery-14.jpeg";
import gallery15 from "@/assets/gallery-15.jpeg";
import gallery16 from "@/assets/gallery-16.jpeg";
import gallery17 from "@/assets/gallery-17.jpeg";
import gallery18 from "@/assets/gallery-18.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const images = [
    { src: gallery1, alt: "Jair e Márcia no parque" },
    { src: gallery2, alt: "Beijo do casal" },
    { src: gallery3, alt: "Momento carinhoso" },
    { src: gallery4, alt: "De mãos dadas" },
    { src: gallery5, alt: "Diversão na piscina" },
    { src: gallery6, alt: "Jantar especial" },
    { src: gallery7, alt: "Passeio juntos" },
    { src: gallery8, alt: "No jardim com flores" },
    { src: gallery9, alt: "Na fonte dos Caruanas" },
    { src: gallery10, alt: "Olhares apaixonados" },
    { src: gallery11, alt: "Com buquê no jardim" },
    { src: gallery12, alt: "Na escadaria" },
    { src: gallery13, alt: "Mãos dadas com flores" },
    { src: gallery14, alt: "Na ponte da floresta" },
    { src: gallery15, alt: "Abraço com buquê" },
    { src: gallery16, alt: "Caminhando na ponte" },
    { src: gallery17, alt: "Olhares no parque" },
    { src: gallery18, alt: "De mãos dadas na ponte" },
  ];

  return (
    <section id="galeria" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Galeria
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-primary"></div>
            <Camera className="w-8 h-8 text-primary" />
            <div className="h-px w-20 bg-primary"></div>
          </div>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4 animate-fade-in">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300 break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-2 bg-transparent border-none shadow-none">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full max-h-[85vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
