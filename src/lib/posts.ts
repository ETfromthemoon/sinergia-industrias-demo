import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

// Posts estáticos del array en content.tsx (mantenemos backward compat)
const STATIC_POSTS: Omit<Post, "content">[] = [
  {
    slug: "ley-rep-2026-plazos",
    title: "Ley REP 2026: nuevos plazos y cómo preparar a tu empresa",
    excerpt:
      "El Ministerio del Medio Ambiente ha publicado las actualizaciones de plazos para la Ley 20.920. Te contamos qué cambia, a quiénes afecta y cómo anticiparte sin contratiempos.",
    date: "15 Jun 2026",
    readTime: "6 min",
    tag: "Ley REP",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
  },
  {
    slug: "odoo-vs-sap-pyme-chilena",
    title: "Odoo vs SAP: qué ERP le conviene a una PYME chilena en 2026",
    excerpt:
      "Comparativa sin sesgos entre los dos gigantes del ERP. Costos reales, tiempos de implementación y funcionalidades que tu empresa realmente va a usar.",
    date: "02 Jun 2026",
    readTime: "8 min",
    tag: "ERP Odoo",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    slug: "levantamiento-procesos-sin-fallar",
    title:
      "Levantamiento de procesos: 5 errores que cometen las empresas (y cómo evitarlos)",
    excerpt:
      "Mapear procesos sin metodología es la receta para un desastre operativo. Identificamos los fallos más comunes y el enfoque que sí funciona en terreno.",
    date: "22 May 2026",
    readTime: "5 min",
    tag: "Procesos",
    image:
      "https://images.unsplash.com/photo-1581092335871-4c7b80d5a031?w=800&q=80",
  },
  {
    slug: "datos-industriales-reportes-reales",
    title:
      "Datos industriales: cómo pasar de planillas infinitas a reportes que sirven",
    excerpt:
      "El 80% de las empresas industriales en Chile toma decisiones con datos desactualizados. Te mostramos cómo estructurar un levantamiento de datos que realmente funcione.",
    date: "10 May 2026",
    readTime: "7 min",
    tag: "Datos",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    slug: "sostenibilidad-ventaja-competitiva",
    title:
      "Sostenibilidad como ventaja competitiva: más allá del cumplimiento normativo",
    excerpt:
      "Cumplir la ley es el piso. Las empresas que integran sostenibilidad en su estrategia están ganando licitaciones, reteniendo talento y abriendo mercados.",
    date: "28 Abr 2026",
    readTime: "6 min",
    tag: "Sostenibilidad",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    slug: "odoo-implementacion-primeros-90-dias",
    title: "Implementación Odoo: qué esperar en los primeros 90 días",
    excerpt:
      "Una hoja de ruta realista semana a semana. Desde la configuración inicial hasta que tu equipo opera con autonomía. Sin fantasías, con datos de proyectos reales.",
    date: "15 Abr 2026",
    readTime: "9 min",
    tag: "ERP Odoo",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

/** Get all posts (static + MDX from content/blog/) */
export function getAllPosts(): Post[] {
  const posts: Post[] = [...STATIC_POSTS];

  // Read MDX files from content/blog/
  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      const slug = file.replace(".mdx", "");
      // Skip if already in static posts
      if (posts.some((p) => p.slug === slug)) continue;
      try {
        const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
        const { data } = matter(raw);
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
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return posts;
}

/** Get a single post by slug (with content for MDX posts) */
export function getPost(slug: string): Post | null {
  // Check content/blog/ first
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (fs.existsSync(filePath)) {
    try {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
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

  // Fallback to static posts (no content — placeholder)
  const staticPost = STATIC_POSTS.find((p) => p.slug === slug);
  return staticPost || null;
}

function parseDate(dateStr: string): Date {
  const months: Record<string, number> = {
    ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
    jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11,
  };
  const parts = dateStr.split(" ");
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = months[parts[1].toLowerCase().slice(0, 3)] ?? 0;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
  return new Date(0);
}
