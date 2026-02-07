import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";
import { BLOG_POSTS } from "./posts";
import { USER_NAME } from "../../constants";

export function meta() {
  const post = BLOG_POSTS.find(p => p.slug === 'the-art-of-failing-forward');
  return [
    { title: `${post?.title} - Blog - ${USER_NAME}` },
    { name: "description", content: post?.subtitle },
  ];
}

export default function TheArtOfFailingForward() {
  const post = BLOG_POSTS.find(p => p.slug === 'the-art-of-failing-forward');

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
            I’m Stefan, and I’ve spent the last few years learning exactly how to build the wrong things, the wrong way, for the wrong reasons. Here is how those failures turned me into the engineer I am today.
          </p>
          <hr className="border-white/10" />

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">The "Tuition Fees" (My Project Cemetery)</h2>
            <p>
              I don’t call these failures; I call them my master's degree in reality.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>
                <strong className="text-emerald-300 font-semibold">TypingCompetition:</strong> I built a high-performance, real-time competition platform. I used a complex microservices architecture because I wanted to "learn the tech."
                <ul className="list-disc pl-5 mt-2 text-gray-400">
                  <li><strong className="text-emerald-300 font-semibold">The Lesson:</strong> I ended up paying €60/month for 100 users. I learned that <strong className="text-emerald-300 font-semibold">simplicity is a feature</strong>, and over-engineering is a tax on innovation.</li>
                </ul>
              </li>
              <li>
                <strong className="text-emerald-300 font-semibold">MyStudentJob & MyStudentCard:</strong> Technically solid, but I ignored marketing and sales.
                <ul className="list-disc pl-5 mt-2 text-gray-400">
                  <li><strong className="text-emerald-300 font-semibold">The Lesson:</strong> Great code in a vacuum is a hobby. A product only exists if it reaches the people who need it.</li>
                </ul>
              </li>
              <li>
                <strong className="text-emerald-300 font-semibold">Meditation Builder:</strong> I built something for a market that didn't exist.
                <ul className="list-disc pl-5 mt-2 text-gray-400">
                  <li><strong className="text-emerald-300 font-semibold">The Lesson:</strong> Validate the "Why" before you write the "How."</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Human Bottleneck</h2>
            <p>
              In my professional career, I’ve faced the hardest bug of all: <strong className="text-emerald-300 font-semibold">Communication.</strong> I’ve seen great tech stacks crumble under "management decisions" and seen teams get stuck because the bridge between engineering and leadership was broken. I used to blame the blockers; now I realize that as a Senior Engineer, <strong className="text-emerald-300 font-semibold">my job is to be the translator.</strong> If I can’t explain the ROI of a performance upgrade or the risk of technical debt to a non-technical stakeholder, that’s a bug in my own system. I’m committed to building "Clean Code" and "Clear Communication" in equal measure.
            </p>
          </section>

          <hr className="border-white/10" />

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What I’m Building Now</h2>
            <p>
              I am currently pivoting from <strong className="text-emerald-300 font-semibold">Frontend Engineering to AI Engineering.</strong> I’m moving from building the <em>skin</em> of applications to building the <em>brains</em>. My focus is on making intelligence lean, human-centric, and useful.
            </p>
            <ol className="list-decimal pl-5 space-y-2 mt-4">
              <li>
                <strong className="text-emerald-300 font-semibold">MyIndependent AI:</strong> My lab for personal data sovereignty. I’m building systems to pipe messy data (WhatsApp, Dropbox, Mail) into a private AI that actually understands you. No over-engineered microservices—just utility.
              </li>
              <li>
                <a href="https://tatiland.store" target="_blank" rel="noopener noreferrer" className="text-emerald-300 font-semibold hover:underline">Tatiland:</a> My heart project. We’re creating bilingual children's books and materials to bridge cultural gaps. It’s my constant reminder that tech must serve a human purpose.
              </li>
            </ol>
          </section>

          <hr className="border-white/10" />

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">My Philosophy</h2>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong className="text-emerald-300 font-semibold">Standardize before you optimize.</strong></li>
              <li><strong className="text-emerald-300 font-semibold">Be the engineer who solves business problems, not just code problems.</strong></li>
              <li><strong className="text-emerald-300 font-semibold">Truth over ego.</strong> If it's not working, kill it and learn.</li>
            </ul>
          </section>

          <p className="mt-8 font-semibold text-white">
            I’m looking to connect with people who value radical honesty and lean engineering. If you're building the future of AI and need someone who has already made the expensive mistakes so you don't have to—let's talk.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
