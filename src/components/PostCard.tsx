import { Eye, ArrowUp, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AuthorBio from "@/components/AuthorBio";

interface PostCardProps {
  title: string;
  author: string;
  date: string;
  views: string;
  votes: string;
  image: string;
  category: string;
  description?: string;
  reaction?: string;
  large?: boolean;
  showAuthor?: boolean;
}

const PostCard = ({
  title,
  author,
  date,
  views,
  votes,
  image,
  category,
  description,
  reaction,
  large = false,
  showAuthor = false,
}: PostCardProps) => {
  return (
    <article className={`group cursor-pointer ${large ? "col-span-2 row-span-2" : ""}`}>
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          style={{ aspectRatio: large ? "16/9" : "4/3" }}
        />
        {reaction && (
          <div className="absolute top-3 left-3 bg-background rounded-full p-2 text-2xl">
            {reaction}
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <Badge className="bg-foreground text-background hover:bg-foreground/90">
            {category}
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {views}
          </span>
          <span className="flex items-center gap-1">
            <ArrowUp className="h-4 w-4" />
            {votes}
          </span>
          <span className="flex items-center gap-1">
            <ArrowDown className="h-4 w-4" />
          </span>
        </div>

        <h3 className={`font-bold group-hover:text-primary transition-colors ${large ? "text-2xl" : "text-lg"}`}>
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        )}

        <p className="text-sm text-muted-foreground">
          por <span className="text-foreground">{author}</span> • {date}
        </p>
      </div>
      
      {showAuthor && <AuthorBio />}
    </article>
  );
};

export default PostCard;
