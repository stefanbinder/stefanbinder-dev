import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";
import { BLOG_POSTS } from "./posts";
import { USER_NAME } from "../../constants";

export function meta() {
  const post = BLOG_POSTS.find(p => p.slug === 'sovereign-intelligence-my-independent-ai-is-public');
  return [
    { title: `${post?.title} - Blog - ${USER_NAME}` },
    { name: "description", content: post?.subtitle },
  ];
}

export default function SovereignIntelligence() {
  const post = BLOG_POSTS.find(p => p.slug === 'sovereign-intelligence-my-independent-ai-is-public');

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
            <p>
              In my last post, I talked about "The RAG Wall"—that frustrating moment when you realize that even with the best local models, your personal context is still scattered across silos owned by corporations. Today, I'm happy to announce that I've taken the next step in shattering those silos.
            </p>
            <p>
              <strong className="text-emerald-300 font-semibold">My Independent AI is now public.</strong>
            </p>

            <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Vision: AI That Belongs to You</h2>
                <p>
                  For the past months, I've been building a system that doesn't just "respect" your privacy—it's architected around it. Most AI assistants treat privacy as a feature you toggle. In <strong className="text-emerald-300 font-semibold">My Independent AI</strong>, privacy is the foundation.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong className="text-emerald-300 font-semibold">Literally Local:</strong> LLMs (Ollama), Vector DBs (Qdrant), and processors run on your own hardware.</li>
                    <li><strong className="text-emerald-300 font-semibold">PII Scrubbing by Default:</strong> Even if you choose to sync your data to the cloud (using our optional GCP/GCS integration), every byte of Personally Identifiable Information is scrubbed locally first.</li>
                    <li><strong className="text-emerald-300 font-semibold">Distributed Sovereignty:</strong> Whether it's your MacBook Pro, a Mac Studio, or a Synology NAS, your "Second Brain" moves with you, synced securely through your own infrastructure.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Public? Why Now?</h2>
                <p>
                  I recently spent time cleaning up the engine room. The documentation is now restructured, the setup paths are clear (from one-command Docker Compose to full Terraform-managed cloud offloading), and the technical roadmap is ready for contributors.
                </p>
                <p>
                  Building in private was about validation. Going public is about community. If you've ever felt that your digital footprint should be your own, this is for you.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Get Started</h2>
                <p>
                  You can find the repository and the full documentation at:<br />
                  👉 <strong className="text-emerald-300 font-semibold"><a href="https://myindependent.ai" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">myindependent.ai</a></strong><br />
                  <span className="text-sm text-gray-400">(Redirects to the GitHub repository and documentation site)</span>
                </p>
            </section>

            <hr className="border-white/10 my-8" />
            <p className="italic text-gray-400 text-sm">
              Note: This post marks the transition of the project from an internal research tool to an open-source framework.
            </p>
        </div>
      </GlassCard>
    </div>
  );
}
