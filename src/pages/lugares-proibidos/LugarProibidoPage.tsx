import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin, AlertTriangle, Clock, ListOrdered } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SocialShare from "@/components/SocialShare";
import AuthorBio from "@/components/AuthorBio";
import { lugaresProibidos } from "@/data/lugaresProibidos";

const TOTAL = lugaresProibidos.length;
const SERIES_TITLE = "20 Lugares Proibidos que Você Nunca Poderá Visitar";
const SERIES_SUBTITLE = "De ilhas mortais a bunkers secretos, conheça os locais mais restritos do planeta que poucos olhos já viram";

const LugarProibidoPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = lugaresProibidos.findIndex((l) => l.slug === slug);
  const lugar = index >= 0 ? lugaresProibidos[index] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lugar) {
      document.title = lugar.metaTitle;
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", lugar.metaDescription);
    }
  }, [lugar]);

  if (!lugar) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold">Lugar não encontrado</h1>
          <Link to="/lugar-proibido/ilha-da-queimada-grande-cobras-brasil" className="text-primary underline">
            Voltar para o início do artigo
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const progress = (lugar.number / TOTAL) * 100;
  const prev = index > 0 ? lugaresProibidos[index - 1] : null;
  const next = index < TOTAL - 1 ? lugaresProibidos[index + 1] : null;
  const showNewsletter = lugar.number === 10;
  const showTeaser = lugar.number === 12;
  const currentUrl = `https://efuxico.com.br/lugar-proibido/${lugar.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            {/* Breadcrumb / Série */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>›</span>
              <span className="uppercase tracking-wide">Curiosidades</span>
              <span>›</span>
              <span className="truncate">{SERIES_TITLE}</span>
            </div>

            {/* Cabeçalho da série */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {SERIES_TITLE}
              </p>
              <p className="text-sm text-muted-foreground mb-4">{SERIES_SUBTITLE}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  10-12 min de leitura
                </span>
                <span className="flex items-center gap-1">
                  <ListOrdered className="h-3 w-3" />
                  Imagem {lugar.number} de {TOTAL}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                  aria-label={`Progresso: ${lugar.number} de ${TOTAL}`}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Início</span>
                <span className="font-semibold">{lugar.number}/{TOTAL}</span>
                <span>Final</span>
              </div>
            </div>

            {/* Título do slide */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {lugar.title}
            </h1>

            {/* Imagem principal */}
            <figure className="mb-6">
              <img
                src={lugar.imageUrl}
                alt={lugar.imageAlt}
                loading="lazy"
                className="w-full rounded-lg shadow-md object-cover max-h-[500px] animate-fade-in"
              />
              <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                {lugar.imageAlt} • Imagem {lugar.number} de {TOTAL}
              </figcaption>
            </figure>

            {/* Ficha rápida */}
            <div className="bg-muted/40 border-l-4 border-primary rounded-r-lg p-4 mb-6 space-y-2">
              <p className="text-sm flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span><strong>Localização:</strong> {lugar.location}</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 text-destructive shrink-0" />
                <span><strong>Motivo da proibição:</strong> {lugar.reason}</span>
              </p>
            </div>

            {/* Conteúdo */}
            <div className="prose prose-sm md:prose-base max-w-none mb-8">
              {lugar.paragraphs.map((p, i) => (
                <p key={i} className="text-foreground/90 leading-relaxed mb-4">{p}</p>
              ))}
            </div>

            {/* CTA engajamento */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6 text-center">
              <p className="text-sm font-medium">
                💬 Qual lugar te surpreendeu mais até aqui? Comente nas redes sociais!
              </p>
            </div>

            {/* Teaser após #12 */}
            {showTeaser && (
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-destructive">
                  ⚠️ Espere até ver o #13 — é assustador!
                </p>
              </div>
            )}

            {/* Newsletter no meio do artigo */}
            {showNewsletter && (
              <div className="bg-primary/5 border border-primary/30 rounded-lg p-6 mb-6 text-center">
                <h3 className="text-lg font-bold mb-2">📩 Curtindo o artigo?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Receba os próximos artigos virais do eFuxico diretamente no seu e-mail.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="flex-1 px-3 py-2 rounded-md border border-border bg-background text-sm"
                  />
                  <Button type="submit" size="sm">Quero receber</Button>
                </form>
              </div>
            )}

            {/* Navegação Anterior / Próximo */}
            <nav className="flex items-center justify-between gap-4 mt-8" aria-label="Navegação do artigo">
              {prev ? (
                <Button asChild size="lg" variant="outline" className="gap-2 h-14 px-6 text-base font-semibold flex-1">
                  <Link to={`/lugar-proibido/${prev.slug}`}>
                    <ChevronLeft className="h-5 w-5" />
                    Anterior
                  </Link>
                </Button>
              ) : (
                <Button size="lg" variant="outline" disabled className="gap-2 h-14 px-6 text-base font-semibold flex-1">
                  <ChevronLeft className="h-5 w-5" />
                  Anterior
                </Button>
              )}

              {next ? (
                <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90 h-14 px-6 text-base font-semibold flex-1">
                  <Link to={`/lugar-proibido/${next.slug}`}>
                    Próximo
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90 h-14 px-6 text-base font-semibold flex-1">
                  <Link to="/">
                    Voltar à Home
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              )}
            </nav>

            {/* Compartilhamento (mais discreto que próximo) */}
            <SocialShare url={currentUrl} title={lugar.title} />

            {/* Autor (mais discreto) */}
            <AuthorBio />

            {/* Posts relacionados (apenas no último slide) */}
            {!next && (
              <section className="mt-10">
                <h2 className="text-xl font-bold mb-4">Artigos Relacionados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link to="/leopardo-nebuloso-felino-florestas-asiaticas" className="block p-4 border border-border rounded-lg hover:bg-muted transition">
                    <p className="text-xs text-primary font-semibold mb-1">ANIMAIS</p>
                    <p className="font-semibold text-sm">18 Espécies de Felinos ao Redor do Mundo</p>
                  </Link>
                  <Link to="/foto-duplo-sentido-crianca-praia" className="block p-4 border border-border rounded-lg hover:bg-muted transition">
                    <p className="text-xs text-primary font-semibold mb-1">CURIOSIDADES</p>
                    <p className="font-semibold text-sm">10 Fotos de Duplo Sentido que Vão Confundir Sua Mente</p>
                  </Link>
                  <Link to="/xuxa-meneghel-antes-depois-maquiagem" className="block p-4 border border-border rounded-lg hover:bg-muted transition">
                    <p className="text-xs text-primary font-semibold mb-1">CELEBRIDADES</p>
                    <p className="font-semibold text-sm">10 Celebridades Antes e Depois da Maquiagem</p>
                  </Link>
                  <Link to="/lugar-proibido/ilha-da-queimada-grande-cobras-brasil" className="block p-4 border border-border rounded-lg hover:bg-muted transition">
                    <p className="text-xs text-primary font-semibold mb-1">CURIOSIDADES</p>
                    <p className="font-semibold text-sm">Reler do início: 20 Lugares Proibidos do Mundo</p>
                  </Link>
                </div>
              </section>
            )}
          </article>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LugarProibidoPage;