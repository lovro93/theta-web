export default function BackgroundDecor() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="orb-blur">
            <feGaussianBlur stdDeviation="90" />
          </filter>
          <filter id="glow-mid">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="orb-tr" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#b98947" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="orb-bl" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#c9a84c" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* ── Ambient corner orbs ── */}
        <ellipse cx="1380" cy="-30"  rx="600" ry="420" fill="url(#orb-tr)" filter="url(#orb-blur)" opacity="0.6" />
        <ellipse cx="-30"  cy="940"  rx="520" ry="380" fill="url(#orb-bl)" filter="url(#orb-blur)" opacity="0.55" />
        <ellipse cx="800"  cy="450"  rx="380" ry="260" fill="url(#orb-bl)" filter="url(#orb-blur)" opacity="0.15" />

        {/* ── Star field ── */}
        {[
          { cx: 120,  cy: 45,  r: 0.8, op: 0.35 },
          { cx: 245,  cy: 130, r: 0.6, op: 0.28 },
          { cx: 410,  cy: 25,  r: 0.7, op: 0.32 },
          { cx: 580,  cy: 170, r: 0.6, op: 0.28 },
          { cx: 860,  cy: 35,  r: 0.8, op: 0.35 },
          { cx: 1050, cy: 195, r: 0.6, op: 0.26 },
          { cx: 1180, cy: 70,  r: 0.7, op: 0.32 },
          { cx: 1380, cy: 145, r: 0.6, op: 0.28 },
          { cx: 75,   cy: 280, r: 0.7, op: 0.3  },
          { cx: 320,  cy: 220, r: 0.6, op: 0.26 },
          { cx: 490,  cy: 300, r: 0.8, op: 0.32 },
          { cx: 760,  cy: 255, r: 0.6, op: 0.28 },
          { cx: 1100, cy: 300, r: 0.7, op: 0.3  },
          { cx: 1310, cy: 240, r: 0.6, op: 0.26 },
          { cx: 160,  cy: 430, r: 0.7, op: 0.28 },
          { cx: 380,  cy: 465, r: 0.6, op: 0.26 },
          { cx: 630,  cy: 420, r: 0.8, op: 0.32 },
          { cx: 930,  cy: 470, r: 0.6, op: 0.26 },
          { cx: 1240, cy: 440, r: 0.7, op: 0.3  },
          { cx: 50,   cy: 620, r: 0.7, op: 0.28 },
          { cx: 290,  cy: 650, r: 0.6, op: 0.26 },
          { cx: 560,  cy: 620, r: 0.7, op: 0.3  },
          { cx: 970,  cy: 640, r: 0.6, op: 0.26 },
          { cx: 1200, cy: 615, r: 0.8, op: 0.32 },
          { cx: 110,  cy: 820, r: 0.6, op: 0.26 },
          { cx: 430,  cy: 800, r: 0.7, op: 0.28 },
          { cx: 780,  cy: 845, r: 0.6, op: 0.26 },
          { cx: 1060, cy: 820, r: 0.7, op: 0.3  },
          { cx: 1350, cy: 780, r: 0.6, op: 0.26 },
        ].map((d, i) => (
          <circle key={`star-${i}`} cx={d.cx} cy={d.cy} r={d.r}
            fill="#ffffff" opacity={d.op} />
        ))}

        {/* ── Gold sparkles ── */}
        {[
          { cx: 1320, cy: 55,  r: 2.2, op: 0.7  },
          { cx: 1050, cy: 110, r: 1.8, op: 0.65 },
          { cx: 350,  cy: 60,  r: 1.6, op: 0.62 },
          { cx: 680,  cy: 185, r: 2.0, op: 0.68 },
          { cx: 920,  cy: 30,  r: 1.7, op: 0.63 },
          { cx: 140,  cy: 390, r: 1.9, op: 0.65 },
          { cx: 1280, cy: 420, r: 1.6, op: 0.6  },
          { cx: 450,  cy: 730, r: 1.8, op: 0.62 },
          { cx: 1100, cy: 760, r: 1.5, op: 0.58 },
          { cx: 700,  cy: 850, r: 1.6, op: 0.6  },
          { cx: 200,  cy: 810, r: 1.5, op: 0.56 },
          { cx: 520,  cy: 155, r: 1.7, op: 0.62 },
          { cx: 1160, cy: 320, r: 2.0, op: 0.66 },
          { cx: 80,   cy: 175, r: 1.6, op: 0.6  },
          { cx: 840,  cy: 310, r: 1.8, op: 0.63 },
          { cx: 1400, cy: 280, r: 1.5, op: 0.58 },
          { cx: 290,  cy: 510, r: 1.7, op: 0.6  },
          { cx: 740,  cy: 550, r: 2.0, op: 0.65 },
          { cx: 1360, cy: 590, r: 1.6, op: 0.58 },
          { cx: 60,   cy: 680, r: 1.8, op: 0.62 },
          { cx: 960,  cy: 480, r: 1.5, op: 0.57 },
          { cx: 1220, cy: 650, r: 1.9, op: 0.63 },
          { cx: 380,  cy: 890, r: 1.6, op: 0.58 },
          { cx: 880,  cy: 720, r: 1.7, op: 0.6  },
          { cx: 600,  cy: 400, r: 1.5, op: 0.55 },
          { cx: 1080, cy: 870, r: 1.6, op: 0.57 },
          { cx: 230,  cy: 340, r: 1.8, op: 0.62 },
          { cx: 1430, cy: 760, r: 1.5, op: 0.55 },
        ].map((d, i) => (
          <circle key={`spark-${i}`} cx={d.cx} cy={d.cy} r={d.r}
            fill="#faf0a1" opacity={d.op} filter="url(#glow-mid)" />
        ))}
      </svg>
    </div>
  );
}
