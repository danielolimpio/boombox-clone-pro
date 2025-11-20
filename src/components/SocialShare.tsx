import { Button } from "@/components/ui/button";
import { Facebook, Share2 } from "lucide-react";
import { XIcon } from "lucide-react";

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare = ({ url, title }: SocialShareProps) => {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
  };

  return (
    <div className="mt-8 pt-6 border-t border-border">
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Compartilhar este grupo:</span>
      </div>
      <div className="flex gap-3 flex-wrap">
        <Button variant="outline" size="sm" asChild>
          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
            <Facebook className="h-4 w-4 mr-1" />
            Facebook
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
            <XIcon className="h-4 w-4 mr-1" />
            Twitter
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={shareLinks.pinterest} target="_blank" rel="noopener noreferrer">
            Pinterest
          </a>
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
