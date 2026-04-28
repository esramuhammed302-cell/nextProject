"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/aboutUs", label: "About Us" },
  { href: "/contactUs", label: "Contact" },
  { href: "/books", label: "Books" },
  { href: "/login", label: "Login" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      style={{
        background: "var(--warm-white)",
        borderBottom: "0.5px solid var(--border)",
        fontFamily: "'DM Sans', sans-serif",
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
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px",
            fontWeight: 600,
            color: "var(--deep-brown)",
            textDecoration: "none",
          }}
        >
          My<span style={{ color: "var(--caramel)" }}>App</span>
        </Link>

        {/* Links */}
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "#fff" : "var(--mid-brown)",
                  background: isActive ? "var(--deep-brown)" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.2s",
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
};

export default Navbar;
