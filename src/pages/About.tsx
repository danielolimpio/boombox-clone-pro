import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Globe } from "lucide-react";
import { XIcon } from "lucide-react";
import authorImage from "@/assets/author-daniel.jpg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre - Daniel Olimpio | eFuxicos</title>
        <meta name="description" content="Conheça Daniel Olimpio, criador de conteúdo apaixonado por histórias e notícias que fazem a diferença." />
        <meta property="og:title" content="Sobre - Daniel Olimpio | eFuxicos" />
        <meta property="og:description" content="Conheça Daniel Olimpio, criador de conteúdo apaixonado por histórias e notícias que fazem a diferença." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
          <article className="prose prose-lg dark:prose-invert mx-auto">
            <div className="text-center mb-12">
              <Avatar className="h-32 w-32 mx-auto mb-6">
                <AvatarImage src={authorImage} alt="Daniel Olimpio" />
                <AvatarFallback>DO</AvatarFallback>
              </Avatar>
              <h1 className="text-4xl font-bold mb-4">Daniel Olimpio</h1>
              <p className="text-xl text-muted-foreground">Criador de Conteúdo</p>
            </div>

            <div className="space-y-6 text-foreground">
              <p>
                Olá! Sou Daniel Olimpio, criador de conteúdo apaixonado por histórias que movem, 
                informam e conectam pessoas. No eFuxicos, compartilho notícias, tendências e 
                narrativas que fazem a diferença no dia a dia.
              </p>

              <p>
                Com anos de experiência em jornalismo digital e criação de conteúdo, minha missão 
                é trazer informação de qualidade de forma acessível e envolvente. Acredito no poder 
                das histórias para transformar perspectivas e criar conexões genuínas.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Minha Jornada</h2>
              <p>
                Ao longo da minha carreira, tive a oportunidade de cobrir diversos temas, desde 
                tecnologia e entretenimento até questões sociais importantes. Cada história é uma 
                chance de aprender algo novo e compartilhar conhecimento com minha comunidade.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Números</h2>
              <div className="flex justify-center gap-12 my-8 not-prose">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">57.504</p>
                  <p className="text-muted-foreground">Pontos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">234</p>
                  <p className="text-muted-foreground">Posts</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">21.300</p>
                  <p className="text-muted-foreground">Leituras</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Conecte-se Comigo</h2>
              <p>
                Gostaria de acompanhar meu trabalho mais de perto? Siga-me nas redes sociais 
                e visite meu site pessoal para mais conteúdo exclusivo.
              </p>

              <div className="flex justify-center gap-4 my-8 not-prose">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://www.facebook.com/danielolimpio.com.br" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5 mr-2" />
                    Facebook
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://x.com/danielolimpio_" target="_blank" rel="noopener noreferrer">
                    <XIcon className="h-5 w-5 mr-2" />
                    X (Twitter)
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://www.instagram.com/danielolimpio_com/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://danielolimpio.com/" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-5 w-5 mr-2" />
                    Website
                  </a>
                </Button>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
