"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/aboutUs", label: "About Us" },
  { href: "/contactUs", label: "Contact" },
  { href: "/books", label: "Books" },
  { href: "/watches", label: "Watches" },
  { href: "/login", label: "Login" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav
      style={{
        background: "var(--warm-white)",
        borderBottom: "0.5px solid var(--border)",
        fontFamily: "var(--font-dm-sans, 'DM Sans'), sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display'), serif",
            fontSize: "22px",
            fontWeight: 600,
            color: "var(--deep-brown)",
            textDecoration: "none",
          }}
        >
          My<span style={{ color: "var(--caramel)" }}>App</span>
        </Link>
        <div style={{ display: "flex", gap: "4px" }}>
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: active ? "bolder" : 400,
                  color: active ? "#fff" : "var(--mid-brown)",
                  background: active ? "var(--deep-brown)" : "transparent",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
