import Header from "@/components/Header";
import ReactionBar from "@/components/ReactionBar";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { allPosts } from "@/data/allPosts";

const Index = () => {
  const posts = allPosts;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <ReactionBar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {posts.map((post, index) => (
                <PostCard key={`${index}-${post.title}`} {...post} large />
              ))}
            </div>
          </div>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
