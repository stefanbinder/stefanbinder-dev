interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false, delay = 0 }) => {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className={`
        relative overflow-hidden
        bg-gray-900/40
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        shadow-xl
        transition-all duration-300
        animate-fadeInUp opacity-0
        ${hoverEffect ? 'hover:bg-gray-800/50 hover:scale-[1.01] hover:border-white/20' : ''}
        ${className}
      `}
    >
      {/* Glossy reflection effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
