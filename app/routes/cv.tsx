import type { Route } from "./+types/cv";
import { GlassCard } from '../components/GlassCard';
import { Download, Briefcase, GraduationCap, Phone, Mail } from 'lucide-react';
import { EXPERIENCE, USER_NAME, USER_TITLE, CERTIFICATES, EDUCATION, USER_PHONE, USER_EMAIL, SKILLS } from '../constants';

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${USER_NAME} - CV` },
    { name: "description", content: `Curriculum Vitae of ${USER_NAME}` },
  ];
}

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto pt-20 pb-24 px-4">
      <div className="flex justify-end mb-6 print:hidden animate-fadeInUp">
        <a
          href="/CV-Stefan-Binder-Senior-Full-Stack-Engineer.pdf"
          download="CV-Stefan-Binder-Senior-Full-Stack-Engineer.pdf"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors font-medium shadow-lg"
        >
          <Download size={18} />
          Download CV
        </a>
      </div>

      <GlassCard delay={200} className="p-8 md:p-12 mb-6 bg-white/95 text-gray-800">
        {/* CV Header */}
        <header className="border-b-2 border-gray-100 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">{USER_NAME.toUpperCase()}</h1>
              <p className="text-xl md:text-2xl text-emerald-600 font-semibold tracking-wide">{USER_TITLE}</p>
            </div>
            {/* Optional Photo or Logo could go here */}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-emerald-500" />
              <span>{USER_PHONE}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-emerald-500" />
              <a href={`mailto:${USER_EMAIL}`} className="hover:text-emerald-600">{USER_EMAIL}</a>
            </div>
          </div>
        </header>

        {/* Bio Section */}
        <section>
          <p className="text-gray-700 leading-relaxed text-lg">
            Highly versatile Senior Full Stack Engineer focused on defining future-proof systems,
            with a recent high focus on Frontend development. I drive high-performing teams by
            balancing deep technical ownership with guidance on best practices and modular code
            structure. A curious all-rounder committed to continuous learning and platform
            excellence.
          </p>
        </section>
      </GlassCard>
      <GlassCard delay={200} className="p-8 md:p-12 mb-6 bg-white/95 text-gray-800">
        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 uppercase tracking-wider">
            <Briefcase className="text-emerald-600" />
            Work Experience
          </h2>

          <div className="space-y-8">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="relative pl-0 md:pl-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-lg font-bold text-gray-900 uppercase">{exp.role}</h3>
                  <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{exp.period}</span>
                </div>
                <h4 className="text-md font-bold text-emerald-600 mb-3">{exp.company}</h4>
                <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-700 leading-relaxed text-sm md:text-base">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </GlassCard>
      <GlassCard delay={200} className="p-8 md:p-12 mb-6 bg-white/95 text-gray-800">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 uppercase tracking-wider">
              <GraduationCap className="text-emerald-600" />
              Education
            </h2>
            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-bold text-gray-900 leading-tight">{edu.degree}</h3>
                  <div className="text-emerald-600 font-medium text-sm mb-1">{edu.institution}</div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{edu.details}</span>
                    <span className="whitespace-nowrap ml-2">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 uppercase tracking-wider">
              <AwardIcon className="text-emerald-600" />
              Skills
            </h2>
            <div className="space-y-4">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-bold text-gray-800 text-sm uppercase mb-2 border-b border-gray-100 pb-1">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </GlassCard>
      <GlassCard delay={200} className="p-8 md:p-12 mb-6 bg-white/95 text-gray-800">
        {/* Certifications (Visual only if desired, logic kept from previous request) */}
        {CERTIFICATES.length > 0 && (
          <section className="border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wider">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATES.map(cert => (
                <div key={cert.id} className="flex items-center gap-3 p-3 bg-gray-200 hover:bg-gray-300 rounded-lg">
                  <img src={cert.imageUrl} alt="Cert" className="w-8 h-8 object-contain" />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{cert.name}</div>
                    <div className="text-xs text-gray-900">{cert.issuer}, {cert.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </GlassCard>
      <GlassCard delay={200} className="p-8 md:p-12 mb-6 bg-white/95 text-gray-800">
        {/* Voluntary Services */}
        <section className="border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-[0.3em]">
            Voluntary Service
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span className="font-medium">Freiwillige Feuerwehr (Fire Brigade)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span className="font-medium">TedX León Volunteer 2018/2019</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span className="font-medium">Toastmaster Member 2021</span>
            </li>
          </ul>
        </section>

      </GlassCard>
    </div>
  );
}

const AwardIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);
