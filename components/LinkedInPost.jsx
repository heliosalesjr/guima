import { Linkedin, ArrowUpRight } from "lucide-react";
import linkedin from "@/data/linkedin.json";

const MESES = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

// Formatação manual: o componente roda no servidor e a data precisa ser
// idêntica no HTML gerado, sem depender do locale do ambiente de build.
function formatarData(iso) {
  if (!iso) return null;
  const [ano, mes, dia] = iso.split("-").map(Number);
  if (!ano || !mes || !dia || mes < 1 || mes > 12) return null;
  return `${dia} de ${MESES[mes - 1]} de ${ano}`;
}

export default function LinkedInPost() {
  const { profileUrl, post } = linkedin;
  const data = formatarData(post?.date);
  const temPost = Boolean(post?.urn);

  return (
    <section id="linkedin" className="bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Convite */}
          <div className="lg:w-1/2">
            <p className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-blue-700">
              <span className="h-px w-7 bg-blue-700" aria-hidden="true" />
              No LinkedIn
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800 tracking-wide uppercase mt-5">
              Acompanhe o que publicamos
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mt-5">
              Compartilhamos no LinkedIn as soluções que representamos, os bastidores das
              parcerias e o que aprendemos atendendo redes de ensino por todo o Brasil.
            </p>

            {data && (
              <p className="text-sm text-slate-500 mt-6">
                Última publicação em <time dateTime={post.date}>{data}</time>
              </p>
            )}

            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-display tracking-wide hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} aria-hidden="true" />
              Ver o perfil da Guima
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Publicação incorporada — ausente o URN, a seção segue de pé só com o convite */}
          {temPost && (
            <div className="lg:w-1/2 w-full">
              <iframe
                src={`https://www.linkedin.com/embed/feed/update/${post.urn}`}
                title={post.title || "Última publicação da Guima no LinkedIn"}
                loading="lazy"
                allowFullScreen
                className="w-full h-[560px] md:h-[640px] rounded-xl border border-slate-200"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
