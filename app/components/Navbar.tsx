import { FileText, Home, Github, Linkedin, Mail, Book } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { SOCIAL_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github': return <Github size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      default: return <Mail size={20} />;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="flex items-center gap-2 p-2 px-4 bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
        <Link
          to="/"
          className={`p-2 rounded-full transition-colors ${currentPath === '/' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          aria-label="Home"
        >
          <Home size={20} />
        </Link>

        <div className="w-px h-6 bg-white/10 mx-1" />

        <Link
          to="/cv"
          className={`p-2 rounded-full transition-colors ${currentPath === '/cv' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          aria-label="CV"
        >
          <FileText size={20} />
        </Link>

        <div className="w-px h-6 bg-white/10 mx-1" />

        <Link
          to="/blog"
          className={`p-2 rounded-full transition-colors ${currentPath.startsWith('/blog') ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          aria-label="Blog"
        >
          <Book size={20} />
        </Link>

        <div className="w-px h-6 bg-white/10 mx-1" />

        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            aria-label={link.platform}
          >
            {getSocialIcon(link.platform)}
          </a>
        ))}
      </div>
    </nav>
  );
};
