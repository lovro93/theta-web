"use client";

import { useState } from "react";

const contactItems = [
  { label: "Naziv obrta", value: "Theta obrt za usluge vl. Dora Ivanić", href: null },
  { label: "OIB", value: "57123137025", href: null },
  { label: "Sjedište obrta", value: "Vukovarska cesta 118, 31000 Osijek", href: null },
  { label: "Poslovna jedinica", value: "Ulica Ivana Gundulića 5, 31000 Osijek", href: null },
  { label: "Mobitel", value: "+385 91 938 8841", href: "tel:+385919388841" },
  { label: "E-mail", value: "dora@theta.hr", href: "mailto:dora@theta.hr" },
];

const reasons = [
  "Besplatni uvodni razgovor",
  "Brz odgovor unutar 24 sata",
  "Individualna ponuda za vaše poslovanje",
  "Bez skrivenih troškova",
];

export default function KontaktPage() {
  const [form, setForm] = useState({ ime: "", email: "", poruka: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ ime: "", email: "", poruka: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, var(--gold-dark), var(--gold-light))" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: "var(--gold)" }}>Kontakt</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">Kontakt i upiti</h1>
          <p className="max-w-xl text-lg leading-relaxed" style={{ color: "rgba(240,237,232,0.6)" }}>
            Za upit, ponudu ili dogovor razgovora, slobodno nam se obratite. Theta knjigovodstveni servis pristupa svakom klijentu individualno, s ciljem razumijevanja stvarnih potreba poslovanja i definiranja optimalnog modela suradnje.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20" style={{ background: "transparent" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* ── LIJEVO – kontakt info ── */}
          <div className="flex flex-col gap-12">
            {/* Adrese, telefon, mail */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-6" style={{ background: "var(--gold)" }} />
                <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Informacije</span>
              </div>
              <div className="flex flex-col">
                {contactItems.map((item, i) => (
                  <div key={item.label}
                    className="flex items-start gap-6 py-5"
                    style={{ borderBottom: i < contactItems.length - 1 ? "1px solid var(--border)" : "none" }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider w-36 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--text-muted)" }}>
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-sm hover-gold transition-colors"
                        style={{ color: "rgba(240,237,232,0.75)" }}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: "rgba(240,237,232,0.75)" }}>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Zašto kontaktirati */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-6" style={{ background: "var(--gold)" }} />
                <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Zašto nas kontaktirati</span>
              </div>
              <div className="flex flex-col">
                {reasons.map((r, i) => (
                  <div key={r} className="flex items-center gap-4 py-3.5"
                    style={{ borderBottom: i < reasons.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <span className="flex-shrink-0 w-1 h-3" style={{ background: "linear-gradient(180deg, var(--gold-dark), var(--gold-light))" }} />
                    <span className="text-sm" style={{ color: "rgba(240,237,232,0.7)" }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── DESNO – forma ── */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-6" style={{ background: "var(--gold)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>Pošaljite upit</span>
            </div>

            {status === "sent" ? (
              <div className="flex flex-col gap-4 py-12">
                <p className="text-xl font-bold" style={{ color: "var(--gold)" }}>Poruka je poslana.</p>
                <p className="text-sm" style={{ color: "rgba(240,237,232,0.55)" }}>Javit ćemo vam se u najkraćem mogućem roku.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                    style={{ color: "var(--text-muted)" }}>
                    Ime i prezime
                  </label>
                  <input
                    type="text" required
                    value={form.ime}
                    onChange={(e) => setForm({ ...form, ime: e.target.value })}
                    placeholder="Vaše ime i prezime"
                    className="w-full px-0 py-3 text-sm bg-transparent focus:outline-none"
                    style={{
                      borderBottom: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                    style={{ color: "var(--text-muted)" }}>
                    E-mail adresa
                  </label>
                  <input
                    type="email" required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="vasa@email.com"
                    className="w-full px-0 py-3 text-sm bg-transparent focus:outline-none"
                    style={{
                      borderBottom: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                    style={{ color: "var(--text-muted)" }}>
                    Poruka
                  </label>
                  <textarea
                    required rows={5}
                    value={form.poruka}
                    onChange={(e) => setForm({ ...form, poruka: e.target.value })}
                    placeholder="Opišite vaše potrebe ili postavite pitanje..."
                    className="w-full px-0 py-3 text-sm bg-transparent focus:outline-none resize-none"
                    style={{
                      borderBottom: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm" style={{ color: "#f87171" }}>
                    Došlo je do greške. Pokušajte ponovo ili nas kontaktirajte direktno.
                  </p>
                )}
                <div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="gold-gradient-bg text-black font-bold px-10 py-4 hover:opacity-90 transition-opacity disabled:opacity-50 text-sm"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    {status === "sending" ? "Slanje..." : "Pošalji poruku"}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
