import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books",
  description: "Browse our curated book collection.",
};

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    color: "var(--caramel)",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    color: "#8B6B52",
  },
  { id: 3, title: "1984", author: "George Orwell", color: "#5A7A6A" },
];

export default function Books() {
  return (
    <main
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}
    >
      <div
        style={{
          background: "var(--warm-white)",
          border: "0.5px solid var(--border)",
          borderRadius: "14px",
          padding: "1.75rem 2rem",
          marginBottom: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            fontWeight: 600,
            color: "var(--deep-brown)",
          }}
        >
          Books
        </h1>
        <span
          style={{
            fontSize: "13px",
            color: "var(--text-muted)",
            background: "var(--sand)",
            padding: "6px 14px",
            borderRadius: "20px",
          }}
        >
          {books.length} titles
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
          gap: "12px",
        }}
      >
        {books.map((book, i) => (
          <div
            key={book.id}
            style={{
              background: "var(--warm-white)",
              border: "0.5px solid var(--border)",
              borderRadius: "14px",
              padding: "1.5rem 1.5rem 1.5rem 1.75rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "4px",
                background: book.color,
                borderRadius: "14px 0 0 14px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontSize: "11px",
                color: "var(--border)",
                fontWeight: 500,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--deep-brown)",
                marginBottom: "6px",
              }}
            >
              {book.title}
            </h2>
            <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
              by {book.author}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
