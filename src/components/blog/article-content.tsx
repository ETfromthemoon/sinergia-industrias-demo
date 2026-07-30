import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type ArticleHeading = {
  id: string;
  level: 2 | 3;
  text: string;
};

type ArticleContentProps = {
  content: string;
  headings: ArticleHeading[];
};

function nodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return nodeText((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

function headingMeta(headings: ArticleHeading[], children: ReactNode, level: 2 | 3) {
  const text = nodeText(children);
  return (
    headings.find((heading) => heading.level === level && heading.text === text) ?? {
      id: text.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/(^-|-$)/g, ""),
      level,
      text,
    }
  );
}

export function ArticleContent({ content, headings }: ArticleContentProps) {
  const topLevelHeadings = headings.filter((heading) => heading.level === 2);

  return (
    <div className="prose-corporate">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => {
            const heading = headingMeta(headings, children, 2);
            const index = topLevelHeadings.findIndex((item) => item.id === heading.id) + 1;
            return (
              <h2 id={heading.id}>
                <span aria-hidden>{String(index).padStart(2, "0")}</span>
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const heading = headingMeta(headings, children, 3);
            return <h3 id={heading.id}>{children}</h3>;
          },
          a: ({ href = "", children }) =>
            href.startsWith("/") ? (
              <Link href={href}>{children}</Link>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          table: ({ children }) => (
            <div className="table-wrapper" tabIndex={0} role="region" aria-label="Tabla desplazable">
              <table>{children}</table>
            </div>
          ),
          img: ({ src, alt }) => (
            <span className="content-image">
              <Image
                src={String(src)}
                alt={alt || ""}
                width={960}
                height={640}
                sizes="(max-width: 768px) 100vw, 760px"
              />
            </span>
          ),
          blockquote: ({ children }) => (
            <blockquote>
              <span className="mono-label">Punto clave</span>
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
