const BASE_URL = process.env.NEXT_PUBLIC_URL;

export type Watch = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  colors: string[];
};

export function slugify(id: number, name: string) {
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return `${id}-${slug}`;
}

export function idFromSlug(slug: string) {
  return Number(slug.split("-")[0]);
}

export async function getWatches(): Promise<Watch[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch watches");
  const json = await res.json();
  const data = Array.isArray(json) ? json : (json.data ?? json.products ?? []);
  return data;
}

export async function getWatchById(id: number): Promise<Watch> {
  const watches = await getWatches();
  const watch = watches.find((w) => w.id === id);
  if (!watch) throw new Error(`Watch ${id} not found`);
  return watch;
}
