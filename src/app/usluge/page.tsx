import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Usluge | Theta Obrt za usluge",
  description: "Cjelovite knjigovodstvene usluge – od vođenja knjiga i poreznog savjetovanja do digitalizacije i SPNFT usklađenosti.",
};

const services = [
  {
    num: "01", icon: "💰",
    title: "Financije",
    desc: "Upravljanje financijama ključ je stabilnog i uspješnog poslovanja. Kroz analizu i praćenje financijskih tokova pomažemo klijentima u donošenju informiranih poslovnih odluka.",
    details: ["Praćenje prihoda i rashoda", "Analiza likvidnosti i novčanog toka", "Financijsko planiranje i kontrola troškova", "Savjetovanje u vezi optimizacije poslovanja", "Podrška pri donošenju financijskih odluka"],
  },
  {
    num: "02", icon: "📊",
    title: "Računovodstvo",
    desc: "Točno i pravovremeno računovodstvo temelj je svakog poslovanja. Vodimo poslovne knjige u skladu s važećim zakonima i standardima, uz potpunu transparentnost.",
    details: ["Vođenje poslovnih knjiga (Knjiga URA/IRA, glavna knjiga i dr.)", "Izrada financijskih izvještaja", "Obračun amortizacije i dugotrajne imovine", "Usklađenja i kontrola knjiženja", "Završni računi i godišnji financijski izvještaji"],
  },
  {
    num: "03", icon: "📑",
    title: "Porezi",
    desc: "Porezna sigurnost i usklađenost s propisima ključni su za izbjegavanje rizika i optimizaciju poslovanja.",
    details: ["Obračun i prijava PDV-a", "Izrada i predaja poreznih obrazaca (JOPPD, PDV, DOH i dr.)", "Praćenje poreznih obveza i rokova", "Savjetovanje u vezi porezne optimizacije", "Komunikacija s Poreznom upravom"],
  },
  {
    num: "04", icon: "🤝",
    title: "Poslovno savjetovanje",
    desc: "Više od knjigovodstva – pružamo podršku u razumijevanju poslovanja i donošenju kvalitetnih odluka.",
    details: ["Savjetovanje pri pokretanju poslovanja", "Odabir optimalnog oblika poslovanja (obrt, d.o.o. i dr.)", "Analiza poslovnih rezultata", "Savjeti za unapređenje poslovanja", "Podrška u svakodnevnim poslovnim izazovima"],
  },
];

const whyUs = [
  { title: "Stručnost i iskustvo", desc: "Naš rad temelji se na višegodišnjem iskustvu u području knjigovodstva, financija i poreznog sustava, uz kontinuirano praćenje zakonskih promjena." },
  { title: "Individualan pristup", desc: "Svaki klijent i svako poslovanje zahtijevaju drugačiji pristup. Prilagođavamo uslugu vašim stvarnim potrebama i specifičnostima djelatnosti." },
  { title: "Sigurnost i diskrecija", desc: "Svim podacima pristupamo s najvišom razinom odgovornosti. Povjerljivost, točnost i sigurnost informacija temelj su našeg rada." },
  { title: "Pravovremenost i dostupnost", desc: "Razumijemo važnost brzih i točnih informacija. Klijentima osiguravamo pravovremenu obradu podataka i dostupnost kada je to najpotrebnije." },
  { title: "Praćenje zakonskih promjena", desc: "Kontinuirano pratimo promjene u zakonodavstvu kako bismo osigurali usklađenost poslovanja i pravovremeno informirali klijente." },
  { title: "Moderan i digitalan pristup", desc: "Primjenjujemo suvremena digitalna rješenja koja pojednostavljuju obradu dokumentacije i povećavaju učinkovitost poslovanja." },
];

const process = [
  { num: "01", title: "Uvodni razgovor", desc: "Upoznajemo vaše poslovanje, djelatnost, način rada i specifične potrebe kako bismo postavili kvalitetne temelje suradnje." },
  { num: "02", title: "Analiza i definiranje suradnje", desc: "Analiziramo vaše poslovanje te definiramo optimalan model suradnje, uključujući opseg usluga i način komunikacije." },
  { num: "03", title: "Ugovaranje usluge", desc: "Nakon usuglašavanja pristupa se formalnom ugovaranju kojim se jasno definiraju prava, obveze i odgovornosti obiju strana." },
  { num: "04", title: "Preuzimanje dokumentacije", desc: "Organiziramo preuzimanje postojeće dokumentacije i definiramo način dostave buduće dokumentacije – digitalno ili fizički." },
  { num: "05", title: "Kontinuirana podrška", desc: "Osiguravamo kontinuiranu podršku, pravovremenu obradu podataka i dostupnost za sve poslovne upite tijekom cijele suradnje." },
];

export default function UslugePage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, var(--gold-dark), var(--gold-light))" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: "var(--gold)" }}>Što nudimo</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">Naše usluge</h1>
          <p className="max-w-xl text-lg leading-relaxed" style={{ color: "rgba(240,237,232,0.6)" }}>
            Cjelovita podrška poslovanju – od vođenja knjiga do digitalizacije i zakonske usklađenosti.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="max-w-6xl mx-auto px-6 py-20" style={{ background: "transparent" }}>
        <div className="flex flex-col gap-4">
          {services.map((s) => (
            <div key={s.title} className="service-card p-8" style={{ background: "var(--bg-1)" }}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold" style={{ color: "rgba(201,168,76,0.2)" }}>{s.num}</span>
                    <span className="text-xl">{s.icon}</span>
                  </div>
                  <h2 className="service-card-title text-xl font-bold" style={{ color: "var(--text)" }}>{s.title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.55)" }}>{s.desc}</p>
                </div>

                {/* Right – details */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <ul className="flex flex-col">
                    {s.details.map((detail, j) => (
                      <li key={detail}
                        className="flex items-center gap-4 py-3"
                        style={{ borderBottom: j < s.details.length - 1 ? "1px solid var(--border)" : "none" }}
                      >
                        <span className="flex-shrink-0 w-1 h-3" style={{ background: "linear-gradient(180deg, var(--gold-dark), var(--gold-light))" }} />
                        <span className="text-sm" style={{ color: "rgba(240,237,232,0.7)" }}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line" />

      {/* ── ZAŠTO THETA ── */}
      <section className="max-w-6xl mx-auto px-6 py-20" style={{ background: "transparent" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-6" style={{ background: "var(--gold)" }} />
          <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Zašto odabrati Theta</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Pouzdani partner u<br /><span className="gold-gradient">svakom koraku</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {whyUs.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-1 h-4" style={{ background: "linear-gradient(180deg, var(--gold-dark), var(--gold-light))" }} />
                <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed pl-4" style={{ color: "rgba(240,237,232,0.55)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line" />

      {/* ── PROCES SURADNJE ── */}
      <section className="max-w-6xl mx-auto px-6 py-20" style={{ background: "transparent" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-6" style={{ background: "var(--gold)" }} />
          <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Kako započeti</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Kako započinje suradnja?</h2>
        <div className="flex flex-col">
          {process.map((step, i) => (
            <div key={step.title} className="flex items-start gap-8 py-8"
              style={{ borderBottom: i < process.length - 1 ? "1px solid var(--border)" : "none" }}>
              <span className="text-3xl font-bold flex-shrink-0" style={{ color: "rgba(201,168,76,0.25)", fontVariantNumeric: "tabular-nums" }}>{step.num}</span>
              <div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--text)" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.55)" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line" />

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center" style={{ background: "transparent" }}>
        <h2 className="text-3xl font-bold tracking-tight mb-4">Zanima vas neka od usluga?</h2>
        <p className="mb-8 max-w-lg mx-auto" style={{ color: "rgba(240,237,232,0.55)" }}>
          Javite nam se i dogovorimo besplatni uvodni razgovor.
        </p>
        <Link href="/kontakt" className="gold-gradient-bg text-black font-bold px-8 py-4 hover:opacity-90 transition-opacity inline-block text-sm" style={{ letterSpacing: "0.04em" }}>
          Dogovorite razgovor
        </Link>
      </section>
    </>
  );
}
