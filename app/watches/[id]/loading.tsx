export default function WatchDetailLoading() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>
      <div style={{ width: "120px", height: "18px", background: "var(--sand)", borderRadius: "6px", marginBottom: "1.5rem" }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={{ background: "var(--sand)", borderRadius: "20px", height: "380px", animation: "pulse 1.5s infinite" }} />
        <div style={{ background: "var(--warm-white)", border: "0.5px solid var(--border)", borderRadius: "20px", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "16px" }}>
          {[60, 80, 40, 100, 100, 100].map((w, i) => (
            <div key={i} style={{ height: i === 2 ? "36px" : "18px", background: "var(--sand)", borderRadius: "8px", width: `${w}%` }} />
          ))}
        </div>
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }`}</style>
    </main>
  );
}
