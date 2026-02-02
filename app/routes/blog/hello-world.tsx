import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";
import { BLOG_POSTS } from "./posts";
import { USER_NAME } from "../../constants";

export function meta() {
  const post = BLOG_POSTS.find(p => p.slug === 'hello-world');
  return [
    { title: `${post?.title} - Blog - ${USER_NAME}` },
    { name: "description", content: post?.subtitle },
  ];
}

export default function HelloWorldPost() {
  const post = BLOG_POSTS.find(p => p.slug === 'hello-world');

  if (!post) return null;

  return (
    <div className="max-w-3xl mx-auto pt-20 pb-24 px-4">
      <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <GlassCard className="p-8 md:p-12 animate-fadeInUp">
        <header className="mb-8 border-b border-white/10 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-400 font-light">
            {post.subtitle}
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {post.date}
          </div>
        </header>

        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Hello world
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
