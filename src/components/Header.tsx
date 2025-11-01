import { Menu, Search, User, ShoppingCart, Moon, Share2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const categories = [
    "Art", "Animals", "Audio", "Big Stories", "Books", "Business", "Buzz",
    "Celebrity", "Entertainment", "Geeky", "Health", "Ideas", "Life",
    "Movies", "Music", "Parents", "Podcasts", "Politics", "Puzzles", "Rewind"
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
                <Zap className="h-6 w-6 text-secondary" fill="currentColor" />
                BUZZFEED
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="flex items-center gap-2 hover:opacity-80">
                Latest
              </a>
              <a href="#" className="flex items-center gap-2 hover:opacity-80">
                Trending
              </a>
              <a href="#" className="flex items-center gap-2 hover:opacity-80">
                Hot
              </a>
              <a href="#" className="flex items-center gap-2 hover:opacity-80">
                Popular
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
                COMPOSE
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
