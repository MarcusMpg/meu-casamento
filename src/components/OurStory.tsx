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
              Uma história de amor de 13 anos
            </p>
            <div className="h-px w-20 bg-primary"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed text-foreground animate-slide-up">
            <p>
              Tudo começou graças à intervenção de dois amigos que decidiram apresentar e juntar o casal. O encontro foi marcado para o dia <strong>22 de setembro de 2012</strong>, no antigo Buteco das Onze, na Casa das Onze Janelas, para assistir a uma luta de UFC.
            </p>
            <p>
              O noivo chegou um pouquinho atrasado, mas, como dizem, o amor não tem hora certa para acontecer.
            </p>
            <p>
              Pouco tempo depois, no dia <strong>12 de outubro de 2012</strong>, veio o pedido de namoro. Ele já tinha certeza de que ela era alguém muito especial, e que valia a pena arriscar o coração. Ela, um pouco receosa com a velocidade das coisas, hesitou por um instante, mas acabou aceitando — sem imaginar que estava dizendo "sim" ao amor da sua vida.
            </p>
            <p>
              E assim começou essa história, que já soma <strong>13 anos de amor</strong>, companheirismo e muitas risadas.
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
            Com o tempo, vieram os sonhos, os planos e as viagens. Até que, com a ajuda do irmão da noiva, o noivo resolveu preparar uma surpresa inesquecível para celebrar os 12 anos de namoro: uma viagem para <strong>Alter do Chão</strong>.
          </p>
          <p>
            No dia <strong>25 de outubro de 2025</strong>, estava tudo planejado — até fotógrafo o noivo contratou para registrar o grande momento. Mas, como toda boa história de amor, a emoção não poderia faltar: no caminho para o local do pedido, o carro atolou em uma estrada de terra, sem iluminação alguma!
          </p>
          <p>
            A noiva, desesperada, só queria voltar para o hotel, sem desconfiar de nada. Mas o noivo, firme e determinado, conseguiu tirar o carro e seguir adiante.
          </p>
          <p className="font-medium">
            Depois desse pequeno imprevisto, eles seguiram para um jantar romântico na Pousada Amazônia, onde o noivo já havia planejado tudo com a equipe do local. Foi ali, em um cenário encantador e cheio de emoção, que ele fez o tão esperado pedido de casamento — e ela, é claro, disse sim! 💍
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;