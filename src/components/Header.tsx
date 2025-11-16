import { Menu, Search, Moon, Sun, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoEfuxico from "@/assets/efuxico-logo.png";

const Header = () => {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(document.documentElement.classList.contains('dark'));
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

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
              <Link to="/" className="flex items-center gap-2 hover:opacity-80">
                <img src={logoEfuxico} alt="eFuxico" className="h-14" />
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 text-lg font-bold">
                Home
              </Link>
              <Link to="/sobre" className="flex items-center gap-2 hover:opacity-80 text-lg font-bold">
                Sobre
              </Link>
              <Link to="/recentes" className="flex items-center gap-2 hover:opacity-80 text-lg font-bold">
                Recentes
              </Link>
              <Link to="/tendencias" className="flex items-center gap-2 hover:opacity-80 text-lg font-bold">
                Tendências
              </Link>
              <Link to="/hot" className="flex items-center gap-2 hover:opacity-80 text-lg font-bold">
                Hot
              </Link>
              <Link to="/populares" className="flex items-center gap-2 hover:opacity-80 text-lg font-bold">
                Populares
              </Link>
              <Link to="/contato" className="flex items-center gap-2 hover:opacity-80 text-lg font-bold">
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
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
          <div className="flex items-center justify-center gap-8 h-14 text-base whitespace-nowrap">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/categoria/${cat.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                className="text-muted-foreground hover:text-foreground transition-colors font-bold"
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
