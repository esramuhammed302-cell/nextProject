import type { Metadata } from "next";
import { getWatchById, getWatches, idFromSlug } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import ColorPicker from "./ColorPicker";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: slug } = await params;
  try {
    const watch = await getWatchById(idFromSlug(slug));
    return {
      title: watch.name,
      description: watch.description,
      openGraph: {
        title: watch.name,
        description: watch.description,
        images: [`${process.env.NEXT_PUBLIC_URL}${watch.image}`],
      },
    };
  } catch {
    return { title: "Watch not found" };
  }
}

export async function generateStaticParams() {
  const watches = await getWatches();
  return watches.map((w) => ({
    id: `${w.id}-${w.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}`,
  }));
}

export default async function WatchDetailPage({ params }: Props) {
  const { id: slug } = await params;
  let watch;
  try {
    watch = await getWatchById(idFromSlug(slug));
  } catch {
    notFound();
  }

  return (
    <main
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}
    >
      <Link
        href="/watches"
        style={{
          fontSize: "13px",
          color: "var(--text-muted)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "1.5rem",
        }}
      >
        ← Back to Watches
      </Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          alignItems: "start",
        }}
      >
        {/* Image */}
        <div
          style={{
            background: "var(--sand)",
            borderRadius: "20px",
            height: "380px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_URL}${watch.image}`}
            alt={watch.name}
            style={{
              maxHeight: "320px",
              maxWidth: "90%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Info */}
        <div
          style={{
            background: "var(--warm-white)",
            border: "0.5px solid var(--border)",
            borderRadius: "20px",
            padding: "2.5rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "var(--soft-gold)",
              color: "var(--deep-brown)",
              fontSize: "11px",
              padding: "4px 12px",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          >
            Watch #{watch.id}
          </span>
          <h1
            style={{
              fontSize: "clamp(24px,3vw,36px)",
              fontWeight: 600,
              color: "var(--deep-brown)",
              marginBottom: "0.75rem",
            }}
          >
            {watch.name}
          </h1>
          <p
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "var(--caramel)",
              fontFamily: "'Playfair Display',serif",
              marginBottom: "1.25rem",
            }}
          >
            ${watch.price}
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            {watch.description}
          </p>

          <div style={{ marginBottom: "2rem" }}>
            <ColorPicker colors={watch.colors} />
          </div>

          <button
            style={{
              width: "100%",
              padding: "13px",
              background: "var(--deep-brown)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
