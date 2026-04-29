"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function ColorPicker({ colors }: { colors: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selected = searchParams.get("color");

  function handleSelect(color: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (selected === color) {
      params.delete("color");
    } else {
      params.set("color", color);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <p
        style={{
          fontSize: "12px",
          fontWeight: 500,
          color: "var(--text-muted)",
          marginBottom: "10px",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        Available Colors{" "}
        {selected && (
          <span
            style={{ color: "var(--caramel)", textTransform: "capitalize" }}
          >
            — {selected}
          </span>
        )}
      </p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {colors.map((c) => {
          const isSelected = selected === c;
          return (
            <button
              key={c}
              onClick={() => handleSelect(c)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: isSelected ? "var(--deep-brown)" : "var(--sand)",
                padding: "6px 14px",
                borderRadius: "20px",
                border: isSelected
                  ? "0.5px solid var(--deep-brown)"
                  : "0.5px solid var(--border)",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: c,
                  border: "0.5px solid rgba(0,0,0,0.1)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  color: isSelected ? "#fff" : "var(--text-main)",
                  textTransform: "capitalize",
                }}
              >
                {c}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
