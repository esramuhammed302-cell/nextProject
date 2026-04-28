import Link from "next/link";

export default function Login() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 136px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "var(--warm-white)",
          border: "0.5px solid var(--border)",
          borderRadius: "24px",
          padding: "2.5rem",
          width: "100%",
          maxWidth: "420px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px",
            color: "var(--deep-brown)",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          My<span style={{ color: "var(--caramel)" }}>App</span>
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px",
            color: "var(--deep-brown)",
            marginBottom: "6px",
          }}
        >
          Welcome back
        </h1>
        <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "2rem" }}>
          Sign in to your account to continue
        </p>

        {/* Email */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Email address</label>
          <input style={inputStyle} type="email" placeholder="you@email.com" />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={labelStyle}>Password</label>
          <input style={inputStyle} type="password" placeholder="••••••••" />
        </div>

        {/* Sign in button */}
        <button style={primaryBtn}>Sign In</button>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "1.5rem 0",
            fontSize: "12px",
            color: "var(--text-muted)",
          }}
        >
          <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
          or
          <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
        </div>

        {/* Google */}
        <button
          style={{
            width: "100%",
            padding: "11px",
            border: "0.5px solid var(--border)",
            borderRadius: "10px",
            background: "var(--warm-white)",
            fontSize: "14px",
            color: "var(--text-main)",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "1.25rem",
          }}
        >
          <span style={{ fontWeight: 700 }}>G</span> Continue with Google
        </button>

        {/* Footer */}
        <p style={{ textAlign: "center", fontSize: "13px", color: "var(--text-muted)" }}>
          Don&apos;t have an account?{" "}
          <Link href="#" style={{ color: "var(--caramel)", textDecoration: "none" }}>
            Sign up
          </Link>
        </p>
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

const primaryBtn: React.CSSProperties = {
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
};
