export default function WatchesLoading() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>
      {/* Skeleton header */}
      <div style={{ background: "var(--warm-white)", border: "0.5px solid var(--border)", borderRadius: "14px", padding: "1.75rem 2rem", marginBottom: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ width: "140px", height: "36px", background: "var(--sand)", borderRadius: "8px" }} />
        <div style={{ width: "80px", height: "28px", background: "var(--sand)", borderRadius: "20px" }} />
      </div>
      {/* Skeleton grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "12px" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ background: "var(--warm-white)", border: "0.5px solid var(--border)", borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ background: "var(--sand)", height: "180px", animation: "pulse 1.5s infinite" }} />
            <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ height: "18px", background: "var(--sand)", borderRadius: "6px", width: "70%" }} />
              <div style={{ height: "14px", background: "var(--sand)", borderRadius: "6px", width: "90%" }} />
              <div style={{ height: "14px", background: "var(--sand)", borderRadius: "6px", width: "50%" }} />
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }`}</style>
    </main>
  );
}
