const Footer = () => {
  return (
    <footer
      style={{
        background: "var(--deep-brown)",
        marginTop: "auto",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "18px",
            color: "#fff",
          }}
        >
          My<span style={{ color: "var(--soft-gold)" }}>App</span>
        </div>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: 0 }}>
          © 2024 My Next.js App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
