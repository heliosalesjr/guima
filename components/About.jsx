import Image from "next/image";

export default function About() {
  return (
    <div
  className="relative before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:opacity-70 before:z-[-1]"
  style={{ backgroundImage: "url('/img/waves.png')", backgroundRepeat: "repeat", backgroundSize: "1440px" }}
>
      <section 
        className="relative flex flex-col lg:flex-row gap-20 lg:gap-32 p-20 max-w-6xl mx-auto"
      >
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h3 className="text-blue-600 font-black uppercase mb-6 text-2xl font-oswald">Quem somos</h3>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            Uma empresa criada por pessoas, onde as pessoas: 
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed">
            Sejam alunos, professores, gestores educacionais e seus diretores são o mais importante de cada parceria. 
          </p>
        </div>
        
        {/* Right Section */}
        <div className="lg:w-1/2 space-y-12">
          {[
            {
              id: "01",
              title: "Tradição",
              description:
                "Composta por profissionais com experiência de mais de 20 anos na elaboração, edição e comercialização de soluções educacionais e na área jurídica."
            },
            {
              id: "02",
              title: "Expertise",
              description:
                "Sempre nos unimos a especialistas em educação de diversas regiões do país como ex dirigentes educacionais, ex executivos de vendas educacionais."
            },
            {
              id: "03",
              title: "Customização",
              description:
                "para entender a necessidade e a demanda de cada cliente visando propor a melhor solução educacional a cada município."
            }
          ].map((item) => (
            <div key={item.id} className="flex items-start gap-6">
              <div>
                <p className="text-xl font-semibold text-gray-900 mb-2 font-oswald">{item.title}</p>
                <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-8 text-center pb-16">Nossos Parceiros</h3>

      {/* Container das Imagens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Imagem 1 */}
        <div className="flex justify-center">
          <a href="https://planetanoticia.com.br/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/planeta_logo.svg"
              alt="Parceiro 1"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </a>
        </div>
        {/* Imagem 2 */}
        <div className="flex justify-center">
          <a href="https://beieducacao.com.br/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/bei_logo.png"
              alt="Parceiro 2"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </a>
        </div>
        {/* Imagem 3 */}
        <div className="flex justify-center">
          <a href="https://solucoesmoderna.com.br/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/moderna_logo_transpa.png"
              alt="Parceiro 3"
              width={300}
              height={200}
              className="rounded-lg object-contain"
            />
          </a>
        </div>
      </div>

      <div className="my-12 mt-24 h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
    </div>
  );
}
