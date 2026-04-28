export default function AboutUs() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>
      {/* Main grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        {/* About text */}
        <div
          style={{
            background: "var(--warm-white)",
            border: "0.5px solid var(--border)",
            borderRadius: "20px",
            padding: "2.5rem",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 600,
              color: "var(--deep-brown)",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            About Our App
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.8,
            }}
          >
            We&apos;re passionate about connecting readers with the books that
            matter. Our platform brings together timeless classics and beloved
            stories in a simple, beautiful experience. Built with care and
            designed for everyone who loves to read.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { num: "2024", label: "Year founded" },
            { num: "3+", label: "Books in collection" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--sand)",
                borderRadius: "14px",
                padding: "1.75rem",
                flex: 1,
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "40px",
                  fontWeight: 600,
                  color: "var(--deep-brown)",
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team card */}
      <div
        style={{
          background: "var(--warm-white)",
          border: "0.5px solid var(--border)",
          borderRadius: "14px",
          padding: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "var(--caramel)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            fontWeight: 500,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          ES
        </div>
        <div>
          <div style={{ fontSize: "15px", fontWeight: 500, color: "var(--text-main)" }}>
            Esra Mohammed
          </div>
          <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            Creator &amp; Developer
          </div>
        </div>
      </div>
    </main>
  );
}
