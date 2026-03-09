export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'sovereign-intelligence-my-independent-ai-is-public',
    title: 'Sovereign Intelligence: My Independent AI is Public',
    subtitle: 'For the past months, I\'ve been building a system that doesn\'t just "respect" your privacy—it\'s architected around it. Most AI assistants treat privacy as a feature you toggle. In My Independent AI, privacy is the foundation. Building in private was about validation. Going public is about community. If you\'ve ever felt that your digital footprint should be your own, this is for you.',
    date: '2026-03-09'
  },
  {
    slug: 'the-rag-wall',
    title: 'The RAG Wall: Architecting a Sovereign Second Brain',
    subtitle: 'The dream of a "Sovereign Second Brain" is simple: a private, local ecosystem that knows everything you know—from your bank statements to your camera EXIF data—without leaking your soul to the public cloud.',
    date: '2026-02-25'
  },
  {
    slug: 'building-the-sovereign-second-brain',
    title: 'Building the Sovereign Second Brain',
    subtitle: 'I’ve always hated the trade-off.',
    date: '2025-02-10'
  },
  {
    slug: 'the-art-of-failing-forward',
    title: 'The Art of Failing Forward: Why I Build',
    subtitle: 'Most "About Me" pages are a polished list of victories. But if you\'re an engineer, you know that the most valuable things we own aren\'t our certificates—they\'re our scars.',
    date: '2025-02-07'
  }
];
