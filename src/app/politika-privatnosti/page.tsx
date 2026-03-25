import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika privatnosti | Theta Obrt za usluge",
  description: "Politika privatnosti i zaštite osobnih podataka tvrtke Theta Obrt za usluge.",
};

const sections = [
  {
    title: "1. Tko smo",
    content: `Theta Obrt za usluge, vlasnica Dora Ivanić, sa sjedištem na adresi Vukovarska cesta 118, 31000 Osijek (OIB: 57123137025), upravljatelj je osobnih podataka koje prikupljamo putem ove web stranice.

Za pitanja vezana uz zaštitu osobnih podataka možete nas kontaktirati na: dora@theta.hr`,
  },
  {
    title: "2. Koje osobne podatke prikupljamo",
    content: `Putem kontakt obrasca na ovoj stranici prikupljamo sljedeće podatke koje nam dobrovoljno dostavljate:

• Ime i prezime
• E-mail adresa
• Sadržaj vaše poruke / upita

Ove podatke prikupljamo isključivo u svrhu odgovora na vaš upit ili uspostave poslovne suradnje.`,
  },
  {
    title: "3. Svrha i pravna osnova obrade",
    content: `Vaše osobne podatke obrađujemo na temelju:

• Vašeg pristanka (slanje kontakt obrasca)
• Legitimnog interesa — radi odgovaranja na vaš poslovni upit

Podatke ne koristimo u marketinške svrhe bez vašeg izričitog pristanka.`,
  },
  {
    title: "4. Čuvanje i brisanje podataka",
    content: `Vaše podatke čuvamo onoliko dugo koliko je potrebno za obradu vašeg upita, a najdulje 2 godine od zadnje komunikacije. Nakon tog roka podaci se brišu, osim ako zakon ne nalaže dulje čuvanje.

Ako želite da vaše podatke obrišemo prije isteka navedenog roka, molimo vas da nam se javite na: dora@theta.hr — odgovorit ćemo i postupiti po zahtjevu u roku od 30 dana.`,
  },
  {
    title: "5. Dijeljenje podataka s trećim stranama",
    content: `Vaše podatke ne prodajemo, ne iznajmljujemo ni ne dijelimo s trećim stranama u komercijalne svrhe.

Za slanje e-pošte koristimo uslugu Resend (resend.com), koji obrađuje podatke u skladu s GDPR propisima. Resend je smješten u EU ili primjenjuje odgovarajuće zaštitne mjere.`,
  },
  {
    title: "6. Kolačići (Cookies)",
    content: `Ova stranica koristi isključivo tehničke (nužne) kolačiće potrebne za ispravno funkcioniranje web mjesta. Ne koristimo analitičke, reklamne ni kolačiće za praćenje trećih strana.

Vaš odabir vezano uz kolačiće pohranjuje se lokalno u vašem pregledniku i možete ga promijeniti u bilo kojem trenutku brisanjem podataka preglednika.`,
  },
  {
    title: "7. Vaša prava",
    content: `Sukladno GDPR-u (Opća uredba o zaštiti podataka), imate sljedeća prava:

• Pravo na pristup — možete zatražiti uvid u podatke koje čuvamo o vama
• Pravo na ispravak — možete zatražiti ispravak netočnih podataka
• Pravo na brisanje — možete zatražiti brisanje vaših podataka
• Pravo na prigovor — možete se usprotiviti obradi podataka
• Pravo na prenosivost — možete zatražiti dostavu podataka u strojno čitljivom obliku

Za ostvarivanje bilo kojeg od navedenih prava kontaktirajte nas na: dora@theta.hr

Ako smatrate da su vaša prava povrijeđena, možete podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP): azop.hr`,
  },
  {
    title: "8. Izmjene politike privatnosti",
    content: `Zadržavamo pravo izmjene ove politike privatnosti. Sve izmjene bit će objavljene na ovoj stranici s datumom posljednje izmjene.`,
  },
];

export default function PolitikaPrivatnosti() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "var(--gold)" }}>
          Pravni dokumenti
        </p>
        <h1 className="text-4xl font-light mb-6" style={{ color: "var(--text)" }}>
          Politika privatnosti
        </h1>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Posljednja izmjena: 25. ožujka 2026.
        </p>
        <div className="mt-6 h-px" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
      </div>

      {/* Intro */}
      <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-muted)" }}>
        Theta Obrt za usluge poštuje vašu privatnost i štiti vaše osobne podatke sukladno Općoj uredbi o zaštiti podataka (GDPR, Uredba EU 2016/679) te Zakonu o provedbi Opće uredbe o zaštiti podataka Republike Hrvatske.
      </p>

      {/* Sections */}
      <div className="flex flex-col gap-10">
        {sections.map((section, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1" style={{ background: "var(--border)" }} />
              <h2 className="text-base font-semibold shrink-0" style={{ color: "var(--text)" }}>
                {section.title}
              </h2>
              <div className="h-px flex-1" style={{ background: "var(--border)" }} />
            </div>
            <div className="pl-0">
              {section.content.split("\n").map((line, j) => (
                <p
                  key={j}
                  className={`text-sm leading-relaxed ${line === "" ? "mt-3" : ""}`}
                  style={{ color: "var(--text-muted)" }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-16 p-6 rounded" style={{ border: "1px solid var(--border)", background: "rgba(185,137,71,0.05)" }}>
        <p className="text-sm font-semibold mb-2" style={{ color: "var(--gold)" }}>Kontakt za pitanja o privatnosti</p>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Theta Obrt za usluge, vl. Dora Ivanić<br />
          Vukovarska cesta 118, 31000 Osijek<br />
          OIB: 57123137025<br />
          E-mail: <a href="mailto:dora@theta.hr" className="hover-gold" style={{ color: "var(--gold)" }}>dora@theta.hr</a>
        </p>
      </div>
    </div>
  );
}
