"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const leftLinks = [
  { href: "/", label: "Naslovna" },
  { href: "/o-nama", label: "O nama" },
];

const rightLinks = [
  { href: "/usluge", label: "Usluge" },
  { href: "/kontakt", label: "Kontakt" },
];

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`nav-link relative text-xs font-semibold uppercase ${active ? "active" : ""}`}
      style={{
        color: active ? "var(--gold)" : "rgba(240,237,232,0.55)",
        letterSpacing: "0.12em",
      }}
    >
      {label}
      <span
        className="nav-underline absolute -bottom-1 left-0 h-px"
        style={{
          background: "linear-gradient(90deg, var(--gold-dark), var(--gold-light))",
          width: active ? "100%" : undefined,
        }}
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(8,8,8,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 relative flex items-center justify-between md:justify-center">

        {/* LEFT – Naslovna, O nama */}
        <nav className="hidden md:flex items-center gap-10 absolute left-6">
          {leftLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
          ))}
        </nav>

        {/* CENTER – logo */}
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo-color.svg"
            alt="Theta Obrt"
            width={220}
            height={72}
            className="w-auto"
            style={{ height: "56px" }}
            priority
          />
        </Link>

        {/* RIGHT – Usluge, Kontakt */}
        <nav className="hidden md:flex items-center gap-10 absolute right-6">
          {rightLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 absolute right-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "var(--text)" }} />
          <span className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "var(--text)" }} />
          <span className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "var(--text)" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-6 flex flex-col gap-5"
          style={{ background: "var(--bg-1)", borderTop: "1px solid var(--border)" }}
        >
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs font-semibold uppercase transition-colors hover:text-[var(--gold)]"
              style={{
                color: pathname === link.href ? "var(--gold)" : "rgba(240,237,232,0.6)",
                letterSpacing: "0.12em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
