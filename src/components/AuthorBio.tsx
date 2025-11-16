import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Globe } from "lucide-react";
import { XIcon } from "lucide-react";
import authorImage from "@/assets/author-daniel.jpg";

const AuthorBio = () => {
  return (
    <div className="bg-card border rounded-lg p-6 mt-8">
      <div className="flex items-start gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={authorImage} alt="Daniel Olimpio" />
          <AvatarFallback>DO</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">Daniel Olimpio</h3>
          <p className="text-sm text-muted-foreground mb-3">Criador de Conteúdo</p>
          <p className="text-sm text-muted-foreground mb-4">
            Escritor apaixonado e contador de histórias compartilhando conteúdo incrível diariamente.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.facebook.com/danielolimpio.com.br" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://x.com/danielolimpio_" target="_blank" rel="noopener noreferrer">
                <XIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.instagram.com/danielolimpio_com/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://danielolimpio.com/" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
