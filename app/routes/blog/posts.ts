export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'hello-world',
    title: 'Hello World',
    subtitle: 'My first blog post on this new platform.',
    date: '2025-01-29'
  }
];
