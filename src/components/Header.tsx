import { Menu, Search, Moon, MessageCircle, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const categories = [
    "Curiosidades",
    "Celebridades", 
    "Entretenimento",
    "Questionários",
    "Tecnologia"
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
              <Link to="/" className="flex items-center gap-2 font-bold text-2xl hover:opacity-80">
                <MessageCircle className="h-6 w-6 text-secondary" fill="currentColor" />
                EFUXICO
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 hover:opacity-80">
                Home
              </Link>
              <Link to="/recentes" className="flex items-center gap-2 hover:opacity-80">
                Recentes
              </Link>
              <Link to="/tendencias" className="flex items-center gap-2 hover:opacity-80">
                Tendências
              </Link>
              <Link to="/hot" className="flex items-center gap-2 hover:opacity-80">
                Hot
              </Link>
              <Link to="/populares" className="flex items-center gap-2 hover:opacity-80">
                Populares
              </Link>
              <Link to="/contato" className="flex items-center gap-2 hover:opacity-80">
                Contato
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-1 mr-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" onClick={() => document.documentElement.classList.toggle('dark')}>
                <Moon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background border-b overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 h-12 text-sm whitespace-nowrap">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/categoria/${cat.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
