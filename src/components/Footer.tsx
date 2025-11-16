import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoEfuxicoWhite from "@/assets/efuxico-logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Comentários Recentes</h3>
            <div className="space-y-3 text-sm text-background/80">
              <p>Ana em "Fatos Incríveis Sobre a Vida Selvagem"</p>
              <p>João em "Melhores Festivais de Música 2025"</p>
              <p>Maria em "Dicas de Fotografia Para Iniciantes"</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img src={logoEfuxicoWhite} alt="eFuxico" className="h-16" />
            </div>
            <h3 className="font-bold text-lg mb-4">Junte-se à Nossa Comunidade</h3>
            <div className="flex justify-center gap-3 mb-4">
              <Button variant="outline" size="icon" className="bg-background/10 border-background/20 hover:bg-background/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-background/10 border-background/20 hover:bg-background/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-background/10 border-background/20 hover:bg-background/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-background/10 border-background/20 hover:bg-background/20">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <div className="space-y-2 text-sm text-background/80">
              <Link to="/" className="block hover:text-primary transition-colors">Home</Link>
              <Link to="/recentes" className="block hover:text-primary transition-colors">Recentes</Link>
              <Link to="/tendencias" className="block hover:text-primary transition-colors">Tendências</Link>
              <Link to="/hot" className="block hover:text-primary transition-colors">Hot</Link>
              <Link to="/populares" className="block hover:text-primary transition-colors">Populares</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Aviso Legal</h3>
            <p className="text-sm text-background/80 mb-4">
              Todo o conteúdo é para fins de entretenimento. As opiniões expressas são dos autores.
            </p>
            <div className="space-y-2 text-sm text-background/80">
              <p><strong>Telefone:</strong> (12) 98251-9116</p>
              <p><strong>E-mail:</strong> contato@efuxico.com.br</p>
              <p><strong>Endereço:</strong> A. Julia Freire, 1200 - João Pessoa - PB</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex gap-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/contato" className="hover:text-primary transition-colors">Contato</Link>
              <Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
              <Link to="/termos" className="hover:text-primary transition-colors">Termos</Link>
            </div>
            <p className="text-background/60">
              © Copyright 2025 | eFuxico | Todos os Direitos Reservados | Desenvolvido por{" "}
              <a href="https://danielolimpio.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                DanielOlimpio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
