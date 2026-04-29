import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to MyApp — discover books and watches curated for you.",
};

export default function Home() {
  return (
    <main
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}
    >
      {/* Hero */}
      <div
        style={{
          background: "var(--warm-white)",
          border: "0.5px solid var(--border)",
          borderRadius: "20px",
          padding: "4rem 3rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
          marginBottom: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "var(--sand)",
            opacity: 0.6,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span
            style={{
              display: "inline-block",
              background: "var(--soft-gold)",
              color: "var(--deep-brown)",
              fontSize: "12px",
              fontWeight: 500,
              padding: "5px 14px",
              borderRadius: "20px",
              marginBottom: "1.25rem",
            }}
          >
            Welcome to MyApp
          </span>
          <h1
            style={{
              fontSize: "clamp(32px,4vw,48px)",
              fontWeight: 600,
              color: "var(--deep-brown)",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Discover Books &amp; Watches
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            A curated collection of timeless classics and elegant timepieces —
            all in one place.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link
              href="/books"
              style={{
                background: "var(--deep-brown)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Browse Books
            </Link>
            <Link
              href="/watches"
              style={{
                background: "var(--caramel)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Shop Watches ⌚
            </Link>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {[
            { icon: "📚", num: "3+", desc: "Books in collection" },
            { icon: "⌚", num: "5", desc: "Watches available" },
          ].map((s) => (
            <div
              key={s.desc}
              style={{
                background: "var(--sand)",
                borderRadius: "14px",
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: "var(--warm-white)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                {s.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "var(--deep-brown)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "12px",
        }}
      >
        {[
          {
            icon: "📖",
            title: "Classic Library",
            desc: "Timeless titles handpicked for every kind of reader.",
          },
          {
            icon: "⌚",
            title: "Premium Watches",
            desc: "Elegant timepieces from classic to modern styles.",
          },
          {
            icon: "💬",
            title: "Get In Touch",
            desc: "We'd love to hear from you anytime.",
          },
        ].map((f) => (
          <div
            key={f.title}
            style={{
              background: "var(--warm-white)",
              border: "0.5px solid var(--border)",
              borderRadius: "14px",
              padding: "1.5rem",
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "0.75rem" }}>
              {f.icon}
            </div>
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "var(--text-main)",
                marginBottom: "6px",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                lineHeight: 1.6,
              }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
