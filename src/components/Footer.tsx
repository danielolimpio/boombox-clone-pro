import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Recent Comments</h3>
            <div className="space-y-3 text-sm text-background/80">
              <p>Sarah on "Amazing Facts About Wildlife"</p>
              <p>Mike on "Best Music Festivals 2024"</p>
              <p>Emma on "Photography Tips for Beginners"</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-lg mb-4">Join Our Community</h3>
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
            <h3 className="font-bold text-lg mb-4">Disclaimer</h3>
            <p className="text-sm text-background/80">
              All content is for entertainment purposes. Views expressed are those of the authors.
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Community</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
            <p className="text-background/60">© 2025 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
