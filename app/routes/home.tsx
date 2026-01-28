import type { Route } from "./+types/home";
import { GlassCard } from '../components/GlassCard';
import { CERTIFICATES, USER_BIO, USER_EMAIL, USER_NAME, USER_TITLE } from '../constants';
import { Terminal, Cloud } from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${USER_NAME} - ${USER_TITLE}` },
    { name: "description", content: USER_BIO },
  ];
}

export default function Home() {
  const techStack = [
    'React 19', 'TypeScript', 'Next.js', 'React Router v7 (Remix)',
    'Kubernetes', 'Cloudflare', 'Google Cloud Platform', 'Tailwind CSS',
    'Node.js', 'GraphQL', 'ArgoCD', 'Argo Workflows'
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-24">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-8 pt-20 animate-fadeInUp">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full blur opacity-75 animate-pulse"></div>
          <div className="relative w-50 h-64 md:w-60 md:h-80 rounded-full overflow-hidden border-2 border-white/20 bg-gray-800">
            <img
              src="/stefan-binder-full-stack-engineer.jpg"
              alt={USER_NAME}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4 max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-gray-400">
            {USER_NAME}
          </h1>
          <h2 className="text-xl md:text-2xl text-emerald-300 font-light tracking-wide">
            {USER_TITLE}
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            {USER_BIO}
          </p>
        </div>
      </section>

      {/* Tech Stack Highlights */}
      <section className="px-4">
        <GlassCard className="p-8" delay={200}>
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Terminal size={20} className="text-emerald-400"/>
            Core Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* GCP Certificates */}
      <section className="px-4 space-y-6">
        <h3 className="text-2xl font-bold text-white flex justify-center items-center gap-3 animate-fadeInUp" style={{ animationDelay: '300ms', opacity: 0, animationFillMode: 'forwards' }}>
          <Cloud className="text-blue-400" />
          GCP Certifications
        </h3>

        <div className="flex flex-wrap justify-center gap-6">
          {CERTIFICATES.map((cert, index) => (
            <GlassCard key={cert.id} hoverEffect delay={400 + (index * 100)} className="p-6 group cursor-pointer w-full md:max-w-md">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                  <img src={cert.imageUrl} alt={cert.issuer} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">{cert.name}</h4>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-2">Issued {cert.date}</p>
                </div>
                <div className="mt-auto pt-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    Verified
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 pb-12">
        <GlassCard className="p-12 text-center bg-gradient-to-b from-gray-900/40 to-emerald-900/20" delay={800}>
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            I'm currently open for new opportunities in Cloud Engineering and Frontend Development.
          </p>
          <a
            href={`mailto:${USER_EMAIL}`}
            className="inline-flex items-center px-8 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Get in Touch
          </a>
        </GlassCard>
      </section>
    </div>
  );
}
