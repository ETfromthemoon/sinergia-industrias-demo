import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const VALID_TAGS = [
  "Ley REP",
  "ERP Odoo",
  "Procesos",
  "Datos",
  "Sostenibilidad",
] as const;

export type PostTag = (typeof VALID_TAGS)[number];

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  image: string;
  content?: string;
}

/** Valida el frontmatter de un post MDX y emite console.warn ante datos faltantes o inválidos. */
function validateFrontmatter(slug: string, data: Record<string, unknown>): void {
  if (!data.title || typeof data.title !== "string") {
    console.warn(`[posts] "${slug}": falta o es inválido el campo "title" en el frontmatter.`);
  }
  if (!data.date || typeof data.date !== "string") {
    console.warn(`[posts] "${slug}": falta o es inválido el campo "date" en el frontmatter.`);
  }
  if (data.tag && !VALID_TAGS.includes(data.tag as PostTag)) {
    console.warn(
      `[posts] "${slug}": el tag "${String(data.tag)}" no es válido. Valores permitidos: ${VALID_TAGS.join(", ")}.`
    );
  }
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

/** Get all posts (MDX from content/blog/) */
export function getAllPosts(): Post[] {
  const posts: Post[] = [];

  // Read MDX files from content/blog/
  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      const slug = file.replace(".mdx", "");
      // Skip duplicate slugs (should not happen with unique filenames)
      if (posts.some((p) => p.slug === slug)) continue;
      try {
        const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
        const { data } = matter(raw);
        validateFrontmatter(slug, data);
        posts.unshift({
          slug,
          title: data.title || slug,
          excerpt: data.excerpt || "",
          date: data.date || "",
          readTime: data.readTime || "5 min",
          tag: data.tag || "General",
          image: data.image || "",
        });
      } catch {
        // Skip broken files
      }
    }
  }

  // Sort by date (newest first)
  posts.sort((a, b) => {
    const dateA = parseDate(a.date, a.slug);
    const dateB = parseDate(b.date, b.slug);
    return dateB.getTime() - dateA.getTime();
  });

  return posts;
}

/** Get a single post by slug (with content) from content/blog/ */
export function getPost(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    validateFrontmatter(slug, data);
    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: data.date || "",
      readTime: data.readTime || "5 min",
      tag: data.tag || "General",
      image: data.image || "",
      content: content.trim(),
    };
  } catch {
    return null;
  }
}

const MONTHS_ES: Record<string, number> = {
  ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
  jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11,
};

/**
 * Parsea fechas en formato "DD Mmm YYYY" (ej. "15 Jun 2026").
 * Ante formato inesperado o mes no reconocido, emite console.warn y cae a new Date(0)
 * para no romper el ordenamiento (queda al final de la lista).
 */
function parseDate(dateStr: string, slug?: string): Date {
  const context = slug ? ` (post: "${slug}")` : "";
  const parts = dateStr.trim().split(/\s+/);

  if (parts.length !== 3) {
    console.warn(
      `[posts] Formato de fecha inesperado: "${dateStr}"${context}. Se esperaba "DD Mmm YYYY". Usando fecha por defecto (Date(0)).`
    );
    return new Date(0);
  }

  const day = parseInt(parts[0], 10);
  const monthKey = parts[1].toLowerCase().slice(0, 3);
  const month = MONTHS_ES[monthKey];
  const year = parseInt(parts[2], 10);

  if (month === undefined) {
    console.warn(
      `[posts] Mes no reconocido: "${parts[1]}" en fecha "${dateStr}"${context}. Usando fecha por defecto (Date(0)).`
    );
    return new Date(0);
  }

  if (Number.isNaN(day) || Number.isNaN(year)) {
    console.warn(
      `[posts] Día o año inválido en fecha "${dateStr}"${context}. Usando fecha por defecto (Date(0)).`
    );
    return new Date(0);
  }

  return new Date(year, month, day);
}

/** Convierte la fecha textual del post (ej. "15 Jun 2026") a un string ISO 8601 para metadata/JSON-LD. */
export function postDateToISO(dateStr: string): string {
  return parseDate(dateStr).toISOString();
}
