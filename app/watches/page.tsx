import type { Metadata } from "next";
import Link from "next/link";
import { getWatches, slugify } from "@/lib/api";

export const metadata: Metadata = {
  title: "Watches",
  description: "Browse our curated collection of premium watches.",
};

export default async function WatchesPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const watches = (await getWatches()) ?? [];
  const filtered = search
    ? watches.filter((w) => w.name.toLowerCase().includes(search.toLowerCase()))
    : watches;

  return (
    <main
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}
    >
      {/* Header */}
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
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "34px",
              fontWeight: 600,
              color: "var(--deep-brown)",
            }}
          >
            Watches
          </h1>
          {search && (
            <p
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                marginTop: "4px",
              }}
            >
              Results for &ldquo;{search}&rdquo;
            </p>
          )}
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <form style={{ display: "flex", gap: "8px" }}>
            <input
              name="search"
              defaultValue={search || ""}
              placeholder="Search watches…"
              style={{
                padding: "9px 14px",
                border: "0.5px solid var(--border)",
                borderRadius: "10px",
                fontSize: "14px",
                background: "var(--cream)",
                color: "var(--text-main)",
                outline: "none",
                fontFamily: "inherit",
                width: "200px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "9px 18px",
                background: "var(--deep-brown)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "14px",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Search
            </button>
          </form>
          <span
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              background: "var(--sand)",
              padding: "6px 14px",
              borderRadius: "20px",
            }}
          >
            {filtered.length} watches
          </span>
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
          gap: "12px",
        }}
      >
        {filtered.map((watch) => (
          <Link
            key={watch.id}
            href={`/watches/${slugify(watch.id, watch.name)}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "var(--warm-white)",
                border: "0.5px solid var(--border)",
                borderRadius: "14px",
                overflow: "hidden",
                transition: "box-shadow 0.2s",
              }}
            >
              <div
                style={{
                  background: "var(--sand)",
                  height: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}${watch.image}`}
                  alt={watch.name}
                  style={{
                    maxHeight: "150px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h2
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "var(--deep-brown)",
                    marginBottom: "6px",
                  }}
                >
                  {watch.name}
                </h2>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    marginBottom: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  {watch.description.slice(0, 60)}…
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "var(--caramel)",
                      fontFamily: "'Playfair Display',serif",
                    }}
                  >
                    ${watch.price}
                  </span>
                  <div style={{ display: "flex", gap: "4px" }}>
                    {watch.colors.slice(0, 3).map((c) => (
                      <div
                        key={c}
                        title={c}
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: c,
                          border: "0.5px solid var(--border)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
