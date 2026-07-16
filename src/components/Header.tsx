import { Menu, Search, Moon, Sun, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import logoEfuxico from "@/assets/efuxico-logo.png";

const Header = () => {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/sobre", label: "Sobre" },
    { to: "/recentes", label: "Recentes" },
    { to: "/tendencias", label: "Tendências" },
    { to: "/hot", label: "Hot" },
    { to: "/populares", label: "Populares" },
    { to: "/contato", label: "Contato" },
  ];

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
          <div className="flex items-center justify-between h-16 gap-2">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden shrink-0">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:w-[320px]">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-1 mt-6">
                    {navLinks.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        onClick={() => setMobileOpen(false)}
                        className="px-3 py-2 rounded-md text-base font-semibold hover:bg-muted"
                      >
                        {l.label}
                      </Link>
                    ))}
                    <div className="h-px bg-border my-3" />
                    <p className="px-3 text-xs uppercase text-muted-foreground mb-1">Categorias</p>
                    {categories.map((cat) => (
                      <Link
                        key={cat}
                        to={`/categoria/${cat.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                        onClick={() => setMobileOpen(false)}
                        className="px-3 py-2 rounded-md text-sm hover:bg-muted"
                      >
                        {cat}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 min-w-0">
                <img src={logoEfuxico} alt="eFuxico" className="h-10 sm:h-12 lg:h-14" />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="hover:opacity-80 text-base xl:text-lg font-bold">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <div className="hidden xl:flex items-center gap-1 mr-2">
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
          <div className="flex items-center justify-start md:justify-center gap-4 sm:gap-6 md:gap-8 h-12 md:h-14 text-sm md:text-base whitespace-nowrap">
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
