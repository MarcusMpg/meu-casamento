import { Camera } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";
import storyImage from "@/assets/story-sunset.jpg";
import ceremonyImage from "@/assets/ceremony-venue.jpg";
import receptionImage from "@/assets/reception-venue.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Momento especial 1" },
    { src: storyImage, alt: "Momento especial 2" },
    { src: ceremonyImage, alt: "Momento especial 3" },
    { src: receptionImage, alt: "Momento especial 4" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            Mais fotos em breve...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;