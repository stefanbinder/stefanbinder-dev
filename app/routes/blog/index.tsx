import { Link } from "react-router";
import { GlassCard } from "../../components/GlassCard";
import { BLOG_POSTS } from "./posts";
import { USER_NAME } from "../../constants";

export function meta() {
  return [
    { title: `Blog - ${USER_NAME}` },
    { name: "description", content: "Personal blog of Stefan Binder" },
  ];
}

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 pt-20 pb-24 px-4">
      <div className="text-center space-y-4 mb-12 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-gray-400">
          Blog
        </h1>
        <p className="text-gray-400 text-lg">
          Thoughts, tutorials, and updates.
        </p>
      </div>

      <div className="space-y-6">
        {BLOG_POSTS.map((post, index) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
            <GlassCard
              hoverEffect
              delay={index * 100}
              className="p-8 transition-transform duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-4">
                {post.subtitle}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
                <span className="text-emerald-400 group-hover:underline">Read more &rarr;</span>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
