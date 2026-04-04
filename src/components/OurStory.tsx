import storyImage from "@/assets/story-sunset.jpg";

const OurStory = () => {
  return (
    <section id="historia" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Nossa História
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-primary"></div>
            <p className="text-lg text-muted-foreground italic">
              Uma história que começou com uma feijoada
            </p>
            <div className="h-px w-20 bg-primary"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed text-foreground animate-slide-up">
            <p>
              Tudo começou há quase 2 anos, quando nos encontramos no Instagram. A noiva vendendo feijoada e o noivo querendo encomendar — um match gastronômico que ninguém esperava! 😄
            </p>
            <p>
              Ele, morando lá no <strong>Paraná</strong>, mas sendo um homem aventureiro, resolveu pegar o carro e dirigir quilômetros e quilômetros até o <strong>Pará</strong>, ao encontro da mulher da sua vida. E assim tudo começou...
            </p>
          </div>

          <div className="animate-fade-in">
            <img 
              src={storyImage} 
              alt="Momento do pedido" 
              className="rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground animate-slide-up">
          <p>
            No dia <strong>5 de abril</strong>, aniversário do noivo, em meio à festa, veio o tão esperado pedido de noivado — e é claro que a noiva aceitou de imediato! 😂💍
          </p>
          <p className="font-medium">
            Tudo muito rápido, mas muito pensado e analisado. Porque a vida já deixou bem claro para os dois o que realmente querem: um ao outro, para sempre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;