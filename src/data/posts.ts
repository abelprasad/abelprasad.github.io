/// <reference types="vite/client" />
import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  htmlContent: string;
}

export function parseFrontmatter(raw: string): { data: Record<string, string | string[]>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const yamlStr = match[1];
  const content = match[2];
  const data: Record<string, string | string[]> = {};
  for (const line of yamlStr.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim();
    if (!key) continue;
    if (val.startsWith('[')) {
      try { data[key] = JSON.parse(val); } catch { data[key] = []; }
    } else {
      data[key] = val.replace(/^["']|["']$/g, '');
    }
  }
  return { data, content };
}

export function calcReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

export function loadPosts(): BlogPost[] {
  const modules = import.meta.glob('/posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  return Object.entries(modules)
    .map(([path, raw]) => {
      const slug = path.replace('/posts/', '').replace('.md', '');
      const { data, content } = parseFrontmatter(raw);
      return {
        slug,
        title: data.title as string,
        excerpt: data.excerpt as string,
        date: data.date as string,
        readTime: calcReadTime(content),
        tags: (data.tags as string[]) || [],
        htmlContent: marked.parse(content) as string,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const allPosts = loadPosts();
