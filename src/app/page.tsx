import Link from "next/link";

const services = [
  { icon: "💰", title: "Financije", desc: "Praćenje prihoda i rashoda, analiza likvidnosti, financijsko planiranje i podrška pri donošenju financijskih odluka." },
  { icon: "📊", title: "Računovodstvo", desc: "Vođenje poslovnih knjiga u skladu s važećim zakonima, izrada financijskih izvještaja i završni računi." },
  { icon: "📑", title: "Porezi", desc: "Obračun i prijava PDV-a, izrada poreznih obrazaca, savjetovanje u vezi porezne optimizacije i komunikacija s Poreznom upravom." },
  { icon: "🤝", title: "Poslovno savjetovanje", desc: "Savjetovanje pri pokretanju poslovanja, odabir optimalnog oblika, analiza rezultata i podrška u poslovnim izazovima." },
];

const reasons = [
  "Stručnost i iskustvo u knjigovodstvu i financijama",
  "Individualan pristup svakom klijentu",
  "Sigurnost i diskrecija u radu s podacima",
  "Pravovremenost i dostupnost",
  "Kontinuirano praćenje zakonskih promjena",
  "Moderan i digitalan pristup poslovanju",
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "transparent" }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(185,137,71,0.2) 0%, transparent 65%)", transform: "translate(25%, -25%)" }}
        />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)", transform: "translate(-35%, 35%)" }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ background: "linear-gradient(90deg, var(--gold-dark), var(--gold-light))" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: "var(--gold)" }}>
                Theta Obrt za usluge — Osijek
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Profesionalno <span className="gold-gradient">knjigovodstvo</span>
              <br className="hidden md:block" />
              za sigurno i stabilno
              <br className="hidden md:block" />
              poslovanje.
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed" style={{ color: "rgba(240,237,232,0.65)" }}>
              Pouzdano vođenje poslovnih knjiga, porezno savjetovanje i potpuna
              administrativna podrška – kako biste se vi mogli fokusirati na rast svog poslovanja.
            </p>
            <div className="flex flex-col gap-3 mb-10">
              {["Točnost i pravovremenost", "Diskrecija i sigurnost podataka", "Individualan pristup svakom klijentu"].map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <span style={{ color: "var(--gold)" }}>✔</span>
                  <span className="text-sm" style={{ color: "rgba(240,237,232,0.7)" }}>{b}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link href="/kontakt" className="gold-gradient-bg text-black font-bold px-8 py-4 hover:opacity-90 transition-opacity text-sm" style={{ letterSpacing: "0.04em" }}>
                Dogovorite razgovor
              </Link>
              <Link href="/usluge" className="hover-gold-border text-sm font-medium px-8 py-4 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(240,237,232,0.6)" }}>
                Naše usluge →
              </Link>
            </div>
            <p className="text-sm max-w-md leading-relaxed" style={{ color: "rgba(240,237,232,0.6)" }}>
              Suradnju započinjemo kratkim uvodnim razgovorom kako bismo razumjeli vaše poslovanje
              i procijenili optimalan model suradnje.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(transparent, var(--bg))" }}
        />
      </section>

      <div className="gold-line" />

      {/* ─── SERVICES ── */}
      <section className="max-w-6xl mx-auto px-6 py-24" style={{ background: "transparent" }}>
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6" style={{ background: "var(--gold)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Što nudimo</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Naše usluge</h2>
          </div>
          <Link href="/usluge" className="text-sm font-medium" style={{ color: "var(--gold)" }}>Sve usluge →</Link>
        </div>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <div key={s.title}
              className="flex items-start gap-8 py-8"
              style={{ borderBottom: i < services.length - 1 ? "1px solid var(--border)" : "none" }}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{s.icon}</span>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
                <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.55)" }}>{s.desc}</p>
              </div>
              <span className="hidden md:block text-xs flex-shrink-0 mt-1" style={{ color: "var(--gold)" }}>→</span>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line" />

      {/* ─── WHY US ── */}
      <section className="max-w-6xl mx-auto px-6 py-24" style={{ background: "transparent" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6" style={{ background: "var(--gold)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Zašto Theta</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Više od <br /><span className="gold-gradient">vođenja knjiga</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(240,237,232,0.65)" }}>
              Odabir knjigovodstvenog servisa nije samo administrativna odluka, već ključan korak
              za sigurnost i stabilnost vašeg poslovanja. Theta temelji rad na stručnosti,
              odgovornosti i individualnom pristupu.
            </p>
            <Link href="/o-nama" className="text-sm font-medium" style={{ color: "var(--gold)" }}>
              Saznajte više o nama →
            </Link>
          </div>

          <div className="flex flex-col">
            {reasons.map((reason, i) => (
              <div key={reason}
                className="flex items-center gap-4 py-4"
                style={{ borderBottom: i < reasons.length - 1 ? "1px solid var(--border)" : "none" }}
              >
                <span className="flex-shrink-0 w-1 h-4" style={{ background: "linear-gradient(180deg, var(--gold-dark), var(--gold-light))" }} />
                <span className="text-sm" style={{ color: "rgba(240,237,232,0.75)" }}>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* ─── CTA ── */}
      <section className="relative overflow-hidden py-24" style={{ background: "transparent" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(185,137,71,0.05) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, var(--gold))" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Kontakt</span>
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Spremni za suradnju?</h2>
          <p className="mb-10 max-w-lg mx-auto" style={{ color: "rgba(240,237,232,0.6)" }}>
            Javite nam se i razgovarajmo o tome kako Theta može podržati vaše poslovanje.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt" className="gold-gradient-bg text-black font-bold px-10 py-4 hover:opacity-90 transition-opacity text-sm" style={{ letterSpacing: "0.04em" }}>
              Pošaljite upit
            </Link>
            <a href="tel:+385919388841" className="text-sm font-medium px-8 py-4" style={{ border: "1px solid var(--border-gold)", color: "var(--gold)" }}>
              +385 91 938 8841
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
