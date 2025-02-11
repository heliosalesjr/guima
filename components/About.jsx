import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-slate-100">
      <div className="container mx-auto px-4 text-center">
        {/* Título e Descrição */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Guima</h2>
          <p className="text-slate-600 mb-6">
            Distribuímos conhecimento em soluções educacionais, conectando empresas renomadas a instituições e profissionais que buscam conteúdos de alta qualidade. Representamos editoras e produtores de conhecimento, oferecendo soluções que impulsionam o aprendizado e a inovação. 
          </p>
        </div>

        {/* Novo Título */}
        <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-8">Nossos Parceiros</h3>

        {/* Container das Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Imagem 1 */}
          <div className="flex justify-center">
            <Image
              src="/img/planeta_logo.svg" // Substitua pelo caminho da imagem
              alt="Parceiro 1"
              width={200} // Largura da imagem
              height={200} // Altura da imagem
              className="rounded-lg"
            />
          </div>
          {/* Imagem 2 */}
          <div className="flex justify-center">
            <Image
              src="/img/bei_logo.png" // Substitua pelo caminho da imagem
              alt="Parceiro 2"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
          {/* Imagem 3 */}
          <div className="flex justify-center">
            <Image
              src="/img/moderna_logo_transpa.png" // Substitua pelo caminho da imagem
              alt="Parceiro 3"
              width={300}
              height={200}
              className="rounded-lg object-contain"
            />
          </div>
          
        </div>
        <div className="my-12 mt-24 h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
      </div>
      
        
      
      


    </section>
  );
}