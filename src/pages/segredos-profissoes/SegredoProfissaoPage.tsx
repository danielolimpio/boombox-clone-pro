import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Briefcase, Eye, Clock, ListOrdered, Lightbulb, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SocialShare from "@/components/SocialShare";
import AuthorBio from "@/components/AuthorBio";
import { segredosProfissoes } from "@/data/segredosProfissoes";

const TOTAL = segredosProfissoes.length;
const SERIES_TITLE = "20 Segredos de Profissões que os Profissionais Nunca Contam";
const SERIES_SUBTITLE = "De médicos a motoristas de aplicativo: verdades reveladas por quem vive o dia a dia de 20 profissões brasileiras — com contexto histórico, curiosidades e lições aprendidas.";

const SegredoProfissaoPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = segredosProfissoes.findIndex((e) => e.slug === slug);
  const item = index >= 0 ? segredosProfissoes[index] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (item) {
      document.title = item.metaTitle;
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", item.metaDescription);
    }
  }, [item]);

  if (!item) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold">Segredo de profissão não encontrado</h1>
          <Link to={`/segredo-profissao/${segredosProfissoes[0].slug}`} className="text-primary underline">
            Voltar para o início do artigo
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const progress = (item.number / TOTAL) * 100;
  const prev = index > 0 ? segredosProfissoes[index - 1] : null;
  const next = index < TOTAL - 1 ? segredosProfissoes[index + 1] : null;
  const showNewsletter = item.number === 7;
  const showTeaser = item.number === 10;
  const currentUrl = `https://efuxico.com.br/segredo-profissao/${item.slug}`;

  return (
    <div className="min-h-screen bg-background">
            <Helmet>
        <title>{item.metaTitle}</title>
        <meta name="description" content={item.metaDescription} />
        <link rel="canonical" href={`https://efuxico.com.br/segredo-profissao/${item.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={item.metaTitle} />
        <meta property="og:description" content={item.metaDescription} />
        <meta property="og:url" content={`https://efuxico.com.br/segredo-profissao/${item.slug}`} />
        <meta property="og:image" content={item.imageUrl.startsWith("http") ? item.imageUrl : `https://efuxico.com.br${item.imageUrl}`} />
      </Helmet>
      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>›</span>
              <span className="uppercase tracking-wide">Mercado de Trabalho</span>
              <span>›</span>
              <span className="truncate">{SERIES_TITLE}</span>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {SERIES_TITLE}
              </p>
              <p className="text-sm text-muted-foreground mb-4">{SERIES_SUBTITLE}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  6-8 min de leitura
                </span>
                <span className="flex items-center gap-1">
                  <ListOrdered className="h-3 w-3" />
                  Segredo {item.number} de {TOTAL}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-3 w-3" />
                  Atualizado em {item.updatedAt}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                  aria-label={`Progresso: ${item.number} de ${TOTAL}`}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Início</span>
                <span className="font-semibold">{item.number}/{TOTAL}</span>
                <span>Final</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {item.title}
            </h1>

            <figure className="mb-6">
              <img
                src={item.imageUrl}
                alt={item.imageAlt}
                loading="lazy"
                className="w-full rounded-lg shadow-md object-cover aspect-video animate-fade-in"
              />
              <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                {item.imageAlt} • Segredo {item.number} de {TOTAL}
              </figcaption>
            </figure>

            <div className="bg-muted/40 border-l-4 border-primary rounded-r-lg p-4 mb-6 space-y-2">
              <p className="text-sm flex items-start gap-2">
                <Briefcase className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span><strong>Profissão:</strong> {item.profession}</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <Eye className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span><strong>Segredo revelado:</strong> {item.secret}</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <CalendarDays className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span><strong>Última atualização:</strong> {item.updatedAt}</span>
              </p>
            </div>

            <div className="prose prose-sm md:prose-base max-w-none mb-6">
              {item.paragraphs.map((p, i) => (
                <p key={i} className="text-foreground/90 leading-relaxed mb-4">{p}</p>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/30 rounded-lg p-4 mb-6 flex items-start gap-3">
              <Lightbulb className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Lição aprendida</p>
                <p className="text-sm text-foreground/90 italic">{item.lesson}</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 mb-6 text-center">
              <p className="text-sm font-medium">
                💬 Você trabalha nessa profissão? Compartilhe esse segredo com quem precisa saber!
              </p>
            </div>

            {showTeaser && (
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-destructive">
                  ⚠️ O próximo segredo envolve uma profissão que quase todo brasileiro contrata sem saber pelo que está pagando!
                </p>
              </div>
            )}

            {showNewsletter && (
              <div className="bg-primary/5 border border-primary/30 rounded-lg p-6 mb-6 text-center">
                <h3 className="text-lg font-bold mb-2">📩 Curtindo os segredos das profissões?</h3>
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

            <nav className="flex items-center justify-between gap-4 mt-8" aria-label="Navegação do artigo">
              {prev ? (
                <Button asChild size="lg" variant="outline" className="gap-2 h-14 px-6 text-base font-semibold flex-1">
                  <Link to={`/segredo-profissao/${prev.slug}`}>
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
                  <Link to={`/segredo-profissao/${next.slug}`}>
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

            <SocialShare url={currentUrl} title={item.title} />

            <AuthorBio />

            {!next && (
              <section className="mt-10">
                <h2 className="text-xl font-bold mb-4">Artigos Relacionados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link to="/teste-personalidade/teste-de-rorschach-manchas-tinta-personalidade" className="block p-4 border border-border rounded-lg hover:bg-muted transition">
                    <p className="text-xs text-primary font-semibold mb-1">CURIOSIDADES</p>
                    <p className="font-semibold text-sm">15 Testes de Personalidade que Revelam Quem Você É</p>
                  </Link>
                  <Link to="/erro-historico/torre-de-pisa-erro-fundacao-arquitetura" className="block p-4 border border-border rounded-lg hover:bg-muted transition">
                    <p className="text-xs text-primary font-semibold mb-1">CURIOSIDADES</p>
                    <p className="font-semibold text-sm">10 Erros Históricos que Mudaram o Mundo</p>
                  </Link>
                  <Link to="/objeto-funcao/furo-tampa-caneta-bic-funcao-secreta" className="block p-4 border border-border rounded-lg hover:bg-muted transition">
                    <p className="text-xs text-primary font-semibold mb-1">CURIOSIDADES</p>
                    <p className="font-semibold text-sm">20 Objetos Cotidianos com Funções Secretas</p>
                  </Link>
                  <Link to={`/segredo-profissao/${segredosProfissoes[0].slug}`} className="block p-4 border border-border rounded-lg hover:bg-muted transition">
                    <p className="text-xs text-primary font-semibold mb-1">MERCADO DE TRABALHO</p>
                    <p className="font-semibold text-sm">Reler do início: 20 Segredos de Profissões</p>
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

export default SegredoProfissaoPage;