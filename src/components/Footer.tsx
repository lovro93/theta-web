import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-1)", borderTop: "1px solid var(--border)" }}>
      <div className="gold-line" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Image
              src="/logo-color.svg"
              alt="Theta Obrt"
              width={160}
              height={52}
              className="w-auto"
              style={{ height: "44px" }}
            />
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Moderan knjigovodstveni servis koji pruža cjelovitu podršku poduzetnicima u svakodnevnom poslovanju.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-6" style={{ background: "var(--gold)" }} />
              <span className="text-xs" style={{ color: "var(--gold)" }}>Osijek, Hrvatska</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] mb-1" style={{ color: "var(--gold)" }}>Navigacija</h3>
            {[
              { href: "/", label: "Naslovna" },
              { href: "/usluge", label: "Usluge" },
              { href: "/o-nama", label: "O nama" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="hover-gold text-sm transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] mb-1" style={{ color: "var(--gold)" }}>Kontakt</h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>Vukovarska cesta 118, Osijek</p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>Ul. Ivana Gundulića 5, 31000 Osijek</p>
              <a href="tel:0919388841" className="hover-gold text-sm transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                091 938 8841
              </a>
              <a href="mailto:dora@theta.hr" className="hover-gold text-sm transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                dora@theta.hr
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "rgba(107,114,128,0.6)" }}>
            © {new Date().getFullYear()} Theta Obrt za usluge. Sva prava pridržana.
          </p>
          <p className="text-xs" style={{ color: "rgba(107,114,128,0.4)" }}>
            Izrađeno s pažnjom.
          </p>
        </div>
      </div>
    </footer>
  );
}
