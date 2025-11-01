import { Facebook, Instagram, Twitter, Youtube, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  const leaderboard = [
    { name: "Sarah Miller", points: "15,234", avatar: "SM" },
    { name: "John Doe", points: "12,890", avatar: "JD" },
    { name: "Emma Wilson", points: "11,456", avatar: "EW" },
    { name: "Mike Chen", points: "9,823", avatar: "MC" },
    { name: "Lisa Park", points: "8,567", avatar: "LP" },
  ];

  const trending = [
    { title: "25 Amazing Facts You Didn't Know", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop" },
    { title: "Audio Picked From Soundcloud", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop" },
    { title: "Things Can You Powerfully Say", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop" },
  ];

  return (
    <aside className="space-y-6">
      <div className="bg-card rounded-lg p-6 border">
        <h3 className="font-bold text-lg mb-4">Weekly Leaderboard</h3>
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
          <p className="font-semibold">Ad Space</p>
          <p className="text-sm">300 x 250</p>
        </div>
      </div>

      <div className="bg-card rounded-lg p-6 border">
        <h3 className="font-bold text-lg mb-4">Trending</h3>
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
        <h3 className="font-bold text-lg mb-4">Featured Author</h3>
        <div className="text-center space-y-4">
          <Avatar className="h-24 w-24 mx-auto">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold">John Smith</h4>
            <p className="text-sm text-muted-foreground">Content Creator</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Passionate writer and storyteller sharing amazing content daily.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <div>
              <p className="font-bold">57,504</p>
              <p className="text-muted-foreground">Points</p>
            </div>
            <div>
              <p className="font-bold">234</p>
              <p className="text-muted-foreground">Posts</p>
            </div>
            <div>
              <p className="font-bold">21,300</p>
              <p className="text-muted-foreground">Reads</p>
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <Button variant="ghost" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Youtube className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg p-6 border">
        <h3 className="font-bold text-lg mb-4">Find Us On</h3>
        <div className="flex justify-center gap-3">
          <Button variant="outline" size="icon">
            <Facebook className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Youtube className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
