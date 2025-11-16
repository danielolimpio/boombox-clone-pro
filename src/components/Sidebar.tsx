import { Facebook, Instagram, Share2, Globe } from "lucide-react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  const leaderboard = [
    { name: "Ana Silva", points: "15.234", avatar: "AS" },
    { name: "João Santos", points: "12.890", avatar: "JS" },
    { name: "Maria Costa", points: "11.456", avatar: "MC" },
    { name: "Pedro Lima", points: "9.823", avatar: "PL" },
    { name: "Carla Souza", points: "8.567", avatar: "CS" },
  ];

  const trending = [
    { title: "25 Fatos Incríveis Que Você Não Sabia", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop" },
    { title: "Áudios Escolhidos do Soundcloud", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop" },
    { title: "Coisas Que Você Pode Dizer Com Poder", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop" },
  ];

  return (
    <aside className="space-y-6">
      <div className="bg-card rounded-lg p-6 border">
        <h3 className="font-bold text-lg mb-4">Ranking Semanal</h3>
        <div className="space-y-3">
          {leaderboard.map((user, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-primary font-bold text-lg w-6">{index + 1}</span>
              <Avatar className="h-8 w-8">
                <AvatarFallback>{user.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.points} pts</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 border-2 border-dashed flex items-center justify-center text-muted-foreground">
        <div className="text-center">
          <p className="font-semibold">Espaço Publicitário</p>
          <p className="text-sm">300 x 250</p>
        </div>
      </div>

      <div className="bg-card rounded-lg p-6 border">
        <h3 className="font-bold text-lg mb-4">Em Alta</h3>
        <div className="space-y-3">
          {trending.map((post, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg">{index + 1}</span>
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 rounded object-cover"
              />
              <p className="text-sm flex-1 line-clamp-2">{post.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-lg p-6 border">
        <h3 className="font-bold text-lg mb-4">Autor em Destaque</h3>
        <div className="text-center space-y-4">
          <Avatar className="h-24 w-24 mx-auto">
            <AvatarImage src={new URL("@/assets/author-daniel.jpg", import.meta.url).href} />
            <AvatarFallback>DO</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold">Daniel Olimpio</h4>
            <p className="text-sm text-muted-foreground">Criador de Conteúdo</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Escritor apaixonado e contador de histórias compartilhando conteúdo incrível diariamente.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <div>
              <p className="font-bold">57.504</p>
              <p className="text-muted-foreground">Pontos</p>
            </div>
            <div>
              <p className="font-bold">234</p>
              <p className="text-muted-foreground">Posts</p>
            </div>
            <div>
              <p className="font-bold">21.300</p>
              <p className="text-muted-foreground">Leituras</p>
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.facebook.com/danielolimpio.com.br" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://x.com/danielolimpio_" target="_blank" rel="noopener noreferrer">
                <XIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.instagram.com/danielolimpio_com/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://danielolimpio.com/" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg p-6 border">
        <h3 className="font-bold text-lg mb-4">Encontre-nos Em</h3>
        <div className="flex justify-center gap-3">
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.facebook.com/danielolimpio.com.br" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.instagram.com/danielolimpio_com/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://x.com/danielolimpio_" target="_blank" rel="noopener noreferrer">
              <XIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://danielolimpio.com/" target="_blank" rel="noopener noreferrer">
              <Globe className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
