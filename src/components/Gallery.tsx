import { Camera } from "lucide-react";
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

const Gallery = () => {
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300 ${
                index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full min-h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ aspectRatio: index === 0 || index === 3 ? "4/3" : "3/4" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
