import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O nama | Theta Obrt za usluge",
  description: "Theta obrt za usluge – moderan knjigovodstveni servis koji pruža cjelovitu podršku poduzetnicima uz naglasak na pravnu sigurnost i digitalizaciju.",
};

const values = [
  {
    title: "Razumjeti poslovanje klijenta",
    desc: "Svaki klijent je jedinstven. Upoznajemo vaše poslovanje iznutra kako bismo pružili relevantne savjete.",
  },
  {
    title: "Pravovremeno upozoriti na obveze i rizike",
    desc: "Ne čekamo da problem nastane. Proaktivno pratimo rokove i zakonske promjene u vaše ime.",
  },
  {
    title: "Osigurati potpunu zakonsku usklađenost",
    desc: "Pratimo sve izmjene zakona – ZOR, OPZ, PDV, fiskalizacija – i odmah ih primjenjujemo.",
  },
  {
    title: "Predlagati optimalna rješenja",
    desc: "Nije dovoljno biti usklađen – tražimo i najoptimalnije zakonsko rješenje za vaše poslovanje.",
  },
];

const expertise = [
  "Zakon o računovodstvu (ZOR)",
  "Opći porezni zakon (OPZ)",
  "Zakon o PDV-u",
  "Fiskalizacija i fiskalizacija 2.0",
  "Elektroničko izvještavanje",
  "SPNFT – Zakon o sprječavanju pranja novca",
  "e-Računi i XML obrada",
  "JOPPD i porezi na dohodak",
];

export default function ONamaPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, var(--gold-dark), var(--gold-light))" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: "var(--gold)" }}>O nama</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Theta Obrt <span className="gold-gradient">za usluge</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed" style={{ color: "rgba(240,237,232,0.6)" }}>
            Moderan knjigovodstveni servis koji pruža cjelovitu podršku poduzetnicima
            s naglaskom na pravnu sigurnost i digitalizaciju.
          </p>
        </div>
      </section>

      {/* ── INTRO + EXPERTISE ── */}
      <section className="max-w-6xl mx-auto px-6 py-24" style={{ background: "transparent" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.65)" }}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2" style={{ color: "var(--text)" }}>
              Više od <span className="gold-gradient">uobičajenog servisa</span>
            </h2>
            <p>
              Theta knjigovodstveni servis pruža profesionalne i pouzdane usluge vođenja poslovnih
              knjiga, računovodstva i poreznog savjetovanja za obrtnike, poduzetnike i trgovačka društva.
            </p>
            <p>
              Iako je servis osnovan 20.05.2024. godine, temelji se na višegodišnjem iskustvu u
              području knjigovodstva, financija i administrativnog poslovanja. Upravo to iskustvo
              omogućuje nam da klijentima pružimo sigurnost, točnost i stručnu podršku u
              svakodnevnom poslovanju.
            </p>
            <p>
              Naš pristup temelji se na preciznosti, odgovornosti i razumijevanju stvarnih potreba
              klijenata. Svakom poslovanju pristupamo individualno, s ciljem optimizacije troškova,
              potpune usklađenosti sa zakonskim propisima i dugoročne financijske stabilnosti.
            </p>
          </div>

          {/* Expertise – clean list, no box */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-6" style={{ background: "var(--gold)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
                Područja stručnosti
              </span>
            </div>
            <ul className="flex flex-col">
              {expertise.map((item, i) => (
                <li key={item}
                  className="flex items-center gap-4 py-3.5"
                  style={{ borderBottom: i < expertise.length - 1 ? "1px solid var(--border)" : "none" }}
                >
                  <span className="flex-shrink-0 w-1 h-4" style={{ background: "linear-gradient(180deg, var(--gold-dark), var(--gold-light))" }} />
                  <span className="text-sm" style={{ color: "rgba(240,237,232,0.75)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ── */}
      <div className="gold-line" />

      {/* ── FILOZOFIJA – no cards, clean numbered list ── */}
      <section className="max-w-6xl mx-auto px-6 py-24" style={{ background: "transparent" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-6" style={{ background: "var(--gold)" }} />
          <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Naša filozofija</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
          Aktivno sudjelovanje<br />u vašem poslovanju
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
          {values.map((v, i) => (
            <div key={v.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold" style={{ color: "rgba(201,168,76,0.5)", fontVariantNumeric: "tabular-nums" }}>
                  0{i + 1}
                </span>
                <div className="h-px flex-1" style={{ background: "var(--border)" }} />
              </div>
              <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.55)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GOLD DIVIDER ── */}
      <div className="gold-line" />

      {/* ── MISIJA, VIZIJA & CILJ ── */}
      <section className="max-w-6xl mx-auto px-6 py-24" style={{ background: "transparent" }}>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-6" style={{ background: "var(--gold)" }} />
                <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Naša misija</span>
              </div>
              <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.65)" }}>
                Pružiti klijentima pouzdanu, preciznu i pravovremenu knjigovodstvenu i financijsku
                podršku koja nadilazi klasično vođenje poslovnih knjiga. Kroz stručnost i kontinuirano
                praćenje zakonskih i poreznih promjena, osiguravamo da je poslovanje naših klijenata
                u svakom trenutku usklađeno s važećim propisima Republike Hrvatske.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-6" style={{ background: "var(--gold)" }} />
                <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Naša vizija</span>
              </div>
              <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.65)" }}>
                Pozicionirati Theta knjigovodstveni servis kao prepoznatljiv, pouzdan i dugoročno
                stabilan partner poduzetnicima koji traže više od standardnog knjigovodstva –
                sigurnost, stručnost i stratešku podršku u poslovanju.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-6" style={{ background: "var(--gold)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Naš cilj</span>
            </div>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(240,237,232,0.65)" }}>
              Izgraditi dugoročne i stabilne poslovne odnose s klijentima temeljene na povjerenju,
              transparentnosti i visokoj razini profesionalnosti. Naš cilj nije samo obavljanje
              usluge, već stvaranje dodane vrijednosti kroz kvalitetnu i odgovornu podršku
              poslovanju svakog klijenta.
            </p>
            <ul className="flex flex-col">
              {[
                "Osiguravanje potpune točnosti i pravovremenosti svih knjigovodstvenih evidencija",
                "Smanjenje poslovnih i poreznih rizika kroz stručnu podršku",
                "Optimizacija poslovanja kroz razumijevanje financijske strukture klijenta",
                "Kontinuirano unapređenje internih procesa i praćenje zakonskih promjena",
                "Razvoj digitalnih rješenja koja pojednostavljuju administraciju",
              ].map((item, i, arr) => (
                <li key={item} className="flex items-center gap-4 py-3.5"
                  style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <span className="flex-shrink-0 w-1 h-4" style={{ background: "linear-gradient(180deg, var(--gold-dark), var(--gold-light))" }} />
                  <span className="text-sm" style={{ color: "rgba(240,237,232,0.75)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24 text-center">
        <p className="mb-6 text-sm" style={{ color: "rgba(240,237,232,0.45)" }}>
          Theta nije samo servis – već partner u poslovanju.
        </p>
        <Link href="/kontakt" className="gold-gradient-bg text-black font-bold px-8 py-4 hover:opacity-90 transition-opacity inline-block text-sm" style={{ letterSpacing: "0.04em" }}>
          Kontaktirajte nas
        </Link>
      </section>
    </>
  );
}
