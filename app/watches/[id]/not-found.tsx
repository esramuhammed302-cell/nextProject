import Link from "next/link";

export default function WatchNotFound() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem", textAlign: "center" }}>
      <div style={{ background: "var(--warm-white)", border: "0.5px solid var(--border)", borderRadius: "20px", padding: "3rem", display: "inline-block" }}>
        <div style={{ fontSize: "48px", marginBottom: "1rem" }}>⌚</div>
        <h1 style={{ fontSize: "32px", color: "var(--deep-brown)", marginBottom: "0.75rem" }}>Watch Not Found</h1>
        <p style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "2rem" }}>This watch doesn&apos;t exist in our collection.</p>
        <Link href="/watches" style={{ background: "var(--deep-brown)", color: "#fff", padding: "12px 28px", borderRadius: "10px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>Back to Watches</Link>
      </div>
    </main>
  );
}
