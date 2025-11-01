import { Menu, Search, User, ShoppingCart, Moon, Share2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const categories = [
    "Arte", "Animais", "Áudio", "Grandes Histórias", "Livros", "Negócios", "Buzz",
    "Celebridades", "Entretenimento", "Geek", "Saúde", "Ideias", "Vida",
    "Filmes", "Música", "Pais", "Podcasts", "Política", "Enigmas", "Retrospectiva"
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2 font-bold text-2xl">
                <MessageCircle className="h-6 w-6 text-secondary" fill="currentColor" />
                EFUXICO
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="flex items-center gap-2 hover:opacity-80">
                Recentes
              </a>
              <a href="#" className="flex items-center gap-2 hover:opacity-80">
                Tendências
              </a>
              <a href="#" className="flex items-center gap-2 hover:opacity-80">
                Hot
              </a>
              <a href="#" className="flex items-center gap-2 hover:opacity-80">
                Populares
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Moon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button className="hidden md:flex bg-foreground text-background hover:bg-foreground/90">
                PUBLICAR
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background border-b overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 h-12 text-sm whitespace-nowrap">
            {categories.map((cat) => (
              <a
                key={cat}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
