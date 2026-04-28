export default function ContactUs() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "12px",
          alignItems: "start",
        }}
      >
        {/* Info panel */}
        <div
          style={{
            background: "var(--deep-brown)",
            borderRadius: "20px",
            padding: "2.5rem",
            color: "#fff",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "32px",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            Let&apos;s talk
          </h1>
          <p
            style={{
              fontSize: "14px",
              opacity: 0.7,
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            We&apos;re always happy to hear from you. Reach out and we&apos;ll
            get back to you as soon as possible.
          </p>

          {[
            { icon: "✉", label: "Email", value: "hello@myapp.com" },
            { icon: "📍", label: "Location", value: "Egypt" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                marginBottom: "1.25rem",
              }}
            >
              <span style={{ fontSize: "16px", marginTop: "2px" }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: "12px", opacity: 0.6, marginBottom: "3px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "14px" }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div
          style={{
            background: "var(--warm-white)",
            border: "0.5px solid var(--border)",
            borderRadius: "20px",
            padding: "2.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "26px",
              color: "var(--deep-brown)",
              marginBottom: "1.5rem",
            }}
          >
            Send a message
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "1rem" }}>
            {["First name", "Last name"].map((label) => (
              <div key={label}>
                <label style={labelStyle}>{label}</label>
                <input style={inputStyle} type="text" placeholder={label === "First name" ? "Ahmed" : "Mohamed"} />
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Email</label>
            <input style={inputStyle} type="email" placeholder="you@email.com" />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={labelStyle}>Message</label>
            <textarea
              style={{ ...inputStyle, height: "110px", resize: "none" }}
              placeholder="Write your message..."
            />
          </div>

          <button
            style={{
              width: "100%",
              padding: "13px",
              background: "var(--deep-brown)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "12px",
  fontWeight: 500,
  color: "var(--text-muted)",
  marginBottom: "6px",
  letterSpacing: "0.3px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  border: "0.5px solid var(--border)",
  borderRadius: "10px",
  fontSize: "14px",
  fontFamily: "'DM Sans', sans-serif",
  color: "var(--text-main)",
  background: "var(--cream)",
  outline: "none",
  display: "block",
};
