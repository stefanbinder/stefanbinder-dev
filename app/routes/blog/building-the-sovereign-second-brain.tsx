import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";
import { BLOG_POSTS } from "./posts";
import { USER_NAME } from "../../constants";

export function meta() {
  const post = BLOG_POSTS.find(p => p.slug === 'building-the-sovereign-second-brain');
  return [
    { title: `${post?.title} - Blog - ${USER_NAME}` },
    { name: "description", content: post?.subtitle },
  ];
}

export default function BuildingTheSovereignSecondBrain() {
  const post = BLOG_POSTS.find(p => p.slug === 'building-the-sovereign-second-brain');

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
            <p>I’ve always hated the trade-off. </p>

            <p>If I want an AI that truly "gets" me—one that knows my current projects, remembers my chaotic WhatsApp threads, and understands the context of a random email from 2019—I usually have to hand over the keys to my digital kingdom. I have to upload my life to a black box and hope the privacy policy doesn't change on a Tuesday. </p>

            <p>That felt like a failure of imagination. I realized I didn't want to just "provide context" in a chat box every time I had a question; <strong className="text-emerald-300 font-semibold">I wanted the AI to already know.</strong> But more importantly, I wanted it to know on my terms. This is the origin of my project: <strong className="text-emerald-300 font-semibold">Independent AI</strong>.</p>

            <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Shift: From Consumer to Architect</h2>
                <p>Independent AI is an open-source, modular ecosystem designed to bridge the gap between my local hardware (the "Basement") and the scale of the cloud (the "Stratosphere"). This isn't just about using an LLM; it’s about building a private RAG (Retrieval-Augmented Generation) stack where <strong className="text-emerald-300 font-semibold">Zero PII (Personally Identifiable Information) ever leaves my network unencrypted.</strong></p>

                <p>My goal was to stop being a passive user of AI and start engineering the pipeline itself. I wanted to understand the gears—not just the interface.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Architecture of Privacy</h2>
                <p>We’re only on Day 3, but the flow is already alive. The "Sovereign Stack" handles data without selling my soul by splitting the labor between my Synology NAS and GCP:</p>

                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong className="text-emerald-300 font-semibold">Local Ingestion:</strong> My orchestrator pulls from Gmail and WhatsApp locally.</li>
                    <li><strong className="text-emerald-300 font-semibold">The Privacy Firewall:</strong> Before any data moves, <strong className="text-emerald-300 font-semibold">Microsoft Presidio</strong> scrubs it. "John Doe" becomes <code className="bg-white/10 px-1.5 py-0.5 rounded text-emerald-200 font-mono text-sm">&lt;PERSON_0&gt;</code>, and the mapping is stored in a local SQLite "MapDB."</li>
                    <li><strong className="text-emerald-300 font-semibold">Local Embeddings:</strong> I use <strong className="text-emerald-300 font-semibold">Nomic-Embed-Text-V2</strong> on my own hardware to turn text into math (vectors).</li>
                    <li><strong className="text-emerald-300 font-semibold">Cloud-Bursting:</strong> These "cleansed" vectors are synced to a <strong className="text-emerald-300 font-semibold">Qdrant</strong> instance on a GCP Spot VM.</li>
                </ul>

                <p>By the time the cloud sees my data, it’s just a string of numbers. The cloud provides the "reasoning" power through Gemini Pro, but the "memory" stays under my physical roof.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">The "Aha!" Moment</h2>
                <p>The steepest part of the learning curve wasn't the code—it was the concept. Understanding the distinction between an <strong className="text-emerald-300 font-semibold">Embedding Model</strong> (the librarian that categorizes the books) and an <strong className="text-emerald-300 font-semibold">Inference Model</strong> (the scholar that reads them) changed everything. Suddenly, I wasn't just "chatting with a bot".</p>
            </section>
        </div>
      </GlassCard>
    </div>
  );
}
