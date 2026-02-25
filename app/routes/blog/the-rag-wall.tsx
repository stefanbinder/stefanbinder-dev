import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";
import { BLOG_POSTS } from "./posts";
import { USER_NAME } from "../../constants";

export function meta() {
  const post = BLOG_POSTS.find(p => p.slug === 'the-rag-wall');
  return [
    { title: `${post?.title} - Blog - ${USER_NAME}` },
    { name: "description", content: post?.subtitle },
  ];
}

export default function TheRagWall() {
  const post = BLOG_POSTS.find(p => p.slug === 'the-rag-wall');

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

        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-6">
            <p>The dream of a <strong className="text-emerald-300 font-semibold">Sovereign Second Brain</strong> is simple: a private, local ecosystem that knows everything you know—from your bank statements to your camera EXIF data—without leaking your soul to the public cloud. But as any developer building in this space quickly discovers, you eventually hit the <strong className="text-emerald-300 font-semibold">RAG Wall</strong>.</p>

            <p>The <strong className="text-emerald-300 font-semibold">RAG Wall</strong> is that frustrating moment when your sophisticated <strong className="text-emerald-300 font-semibold">Vector Database</strong>, filled with thousands of personal documents, fails to answer a simple question like: "List all my camera models."</p>

            <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Limits of "Vibes"</h2>
                <p>Standard Retrieval-Augmented Generation (RAG) relies on semantic similarity—or what I call "vibe-based search." It’s brilliant for finding a specific memory in a journal entry, but it’s mathematically incapable of set-completeness. If you have 10,000 photos, a vector search returns the top 10 "chunks" that look most like your query. It doesn't count; it approximates.</p>
                <p>To scale 'My Independent AI' beyond a chatbot toy, we have to transition from a single-lane RAG to a <strong className="text-emerald-300 font-semibold">Hybrid Context Engine</strong>.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Breaking the Wall: The Analytical Pivot</h2>
                <p>The solution isn't "more vectors." It’s <strong className="text-emerald-300 font-semibold">Structured Intent</strong>. To build a truly sovereign brain, we need a three-tier architecture:</p>

                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong className="text-emerald-300 font-semibold">The Relational Sidecar:</strong> Don't just embed metadata; store it. A local PostgreSQL or SQLite instance on your Synology NAS acts as the "Hard Fact" layer for bank data, EXIF tags, and timestamps.</li>
                    <li><strong className="text-emerald-300 font-semibold">The GraphRAG Layer:</strong> This is the holy grail. By using a Knowledge Graph (like Neo4j), we move from isolated snippets to connected entities. It allows the AI to understand that the "Chase" in your email, the "Chase" in your PDF invoice, and the "Chase" in your bank statement are the same canonical node.</li>
                    <li><strong className="text-emerald-300 font-semibold">The Agentic Router:</strong> Instead of sending every prompt to a vector search, an LLM-based dispatcher classifies the intent. Is it Informational (Vector)? Analytical (SQL)? Or Relational (Graph)?</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">From Data Engineering to Context Engineering</h2>
                <p>There’s a dirty secret in AI Engineering: 80% of the work is actually Data Engineering. But in 2026, this has evolved into <strong className="text-emerald-300 font-semibold">Context Engineering</strong>.</p>

                <p>When you implement entity resolution to prevent duplicate "Chase" nodes, or when you build a "Text-to-Chart" pipeline that generates Chart.js blocks from SQL results, you aren't just "cleaning data." You are encoding your life into a machine-readable format. You are building a system where the AI doesn't just "talk" about your life—it analyzes it.</p>

                <p>The <strong className="text-emerald-300 font-semibold">RAG Wall</strong> isn't an end-point; it’s an architectural invitation. It’s the moment you stop being a consumer of AI APIs and start being an Architect of Sovereign Intelligence.</p>
            </section>
        </div>
      </GlassCard>
    </div>
  );
}
