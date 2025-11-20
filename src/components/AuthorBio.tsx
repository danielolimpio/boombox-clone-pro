import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Globe } from "lucide-react";
import { XIcon } from "lucide-react";
import authorImage from "@/assets/author-daniel.jpg";

const AuthorBio = () => {
  return (
    <div className="bg-card border rounded-lg p-6 mt-6">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={authorImage} alt="Daniel Olimpio" />
          <AvatarFallback>DO</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold text-base mb-1">Daniel Olimpio</h3>
          <p className="text-xs text-muted-foreground mb-3">Criador de Conteúdo</p>
          <p className="text-xs text-muted-foreground mb-3">
            Escritor apaixonado e contador de histórias compartilhando conteúdo incrível diariamente.
          </p>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
              <a href="https://www.facebook.com/danielolimpio.com.br" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-3 w-3" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
              <a href="https://x.com/danielolimpio_" target="_blank" rel="noopener noreferrer">
                <XIcon className="h-3 w-3" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
              <a href="https://www.instagram.com/danielolimpio_com/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-3 w-3" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
              <a href="https://danielolimpio.com/" target="_blank" rel="noopener noreferrer">
                <Globe className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
