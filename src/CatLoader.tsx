import { useEffect, useState, useRef } from "react";

const CAT_IMG = "https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f431.png";

export default function CatLoader({ onDone }: { onDone: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [catPos, setCatPos] = useState({ x: 0, y: 0 });
  const [catFlip, setCatFlip] = useState(false);
  const [sleeping, setSleeping] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [yarnPos, setYarnPos] = useState({ x: 0, y: 0 });
  const [catRotate, setCatRotate] = useState(0);
  const posRef = useRef({ x: 200, y: 300 });
  const yarnRef = useRef({ x: 500, y: 300 });
  const animRef = useRef<number>(0);
  const tickRef = useRef(0);
  const sleepingRef = useRef(false);

  useEffect(() => {
    // init positions
    posRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    yarnRef.current = { x: window.innerWidth * 0.7, y: window.innerHeight * 0.4 };
    setCatPos(posRef.current);
    setYarnPos(yarnRef.current);

    // terminal logs
    const lines = [
      "> booting nitansh.dev...",
      "> cat detected on keyboard 🐱",
      "> loading portfolio assets...",
      "> cat knocked over the coffee ☕",
      "> compiling personality.js...",
      "> cat is reviewing your code...",
      "> cat approved (mostly) ✓",
      "> fetching projects...",
      "> almost there...",
      "> portfolio.exe ready ✓",
    ];
    let i = 0;
    const logTimer = setInterval(() => {
      if (i < lines.length) {
        setLogs(prev => [...prev, lines[i]]);
        i++;
      }
    }, 1200);

    // cat chases yarn
    function chase() {
      if (sleepingRef.current) return;
      tickRef.current++;
      const cat = posRef.current;
      const yarn = yarnRef.current;

      const dx = yarn.x - cat.x;
      const dy = yarn.y - cat.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = 4;

      if (dist > 70) {
        const nx = cat.x + (dx / dist) * speed;
        const ny = cat.y + (dy / dist) * speed;
        posRef.current = { x: nx, y: ny };
        setCatPos({ x: nx, y: ny });
        setCatFlip(dx < 0);
        setCatRotate(Math.sin(tickRef.current * 0.15) * 8);
      } else {
        // reached yarn — move yarn to new random spot
        const newX = 80 + Math.random() * (window.innerWidth - 160);
        const newY = 80 + Math.random() * (window.innerHeight - 240);
        yarnRef.current = { x: newX, y: newY };
        setYarnPos({ x: newX, y: newY });
      }

      animRef.current = requestAnimationFrame(chase);
    }
    animRef.current = requestAnimationFrame(chase);

    // sleep after 12s
    const sleepTimer = setTimeout(() => {
      sleepingRef.current = true;
      setSleeping(true);
      cancelAnimationFrame(animRef.current);
    }, 12000);

    // fade out after 14s → done at 15s
    const fadeTimer = setTimeout(() => setFadeOut(true), 14000);
    const doneTimer = setTimeout(() => onDone(), 15000);

    return () => {
      cancelAnimationFrame(animRef.current);
      clearInterval(logTimer);
      clearTimeout(sleepTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 60%, #0d1117 0%, #030712 100%)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 1s ease",
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 340,
          height: 340,
          left: catPos.x - 170,
          top: catPos.y - 170,
          background: "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)",
          transition: "left 0.15s, top 0.15s",
        }}
      />

      {/* Yarn ball */}
      {!sleeping && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: yarnPos.x - 18,
            top: yarnPos.y - 18,
            transition: "left 0.3s cubic-bezier(.34,1.56,.64,1), top 0.3s cubic-bezier(.34,1.56,.64,1)",
          }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16" fill="#7c3aed" />
            <circle cx="18" cy="18" r="16" fill="none" stroke="#a78bfa" strokeWidth="2.5"
              strokeDasharray="8 5" strokeDashoffset="0">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="18" cy="18" r="8" fill="none" stroke="#c4b5fd" strokeWidth="1.5"
              strokeDasharray="5 4">
              <animateTransform attributeName="transform" type="rotate" from="360 18 18" to="0 18 18" dur="0.9s" repeatCount="indefinite" />
            </circle>
            <circle cx="18" cy="18" r="3" fill="#ddd6fe" />
          </svg>
        </div>
      )}

      {/* 3D Cat */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          left: catPos.x - 70,
          top: catPos.y - 90,
          width: 140,
          height: 140,
          transition: sleeping ? "left 0.5s, top 0.5s" : "left 0.08s, top 0.08s",
          transform: `scaleX(${catFlip ? -1 : 1}) rotate(${sleeping ? 0 : catRotate}deg)`,
          filter: "drop-shadow(0 8px 24px rgba(99,102,241,0.35))",
        }}
      >
        <img
          src={CAT_IMG}
          alt="cat"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transform: sleeping ? "rotate(90deg) scale(0.85)" : "none",
            transition: "transform 0.8s cubic-bezier(.34,1.56,.64,1)",
          }}
        />

        {/* zzz when sleeping */}
        {sleeping && (
          <div
            className="absolute font-mono font-bold"
            style={{ top: -30, right: -10, color: "#a78bfa", fontSize: 18, lineHeight: 1.3 }}
          >
            <span style={{ animation: "zzz1 2s infinite", display: "block", opacity: 0 }}>z</span>
            <span style={{ animation: "zzz1 2s 0.5s infinite", display: "block", opacity: 0, fontSize: 14 }}>z</span>
            <span style={{ animation: "zzz1 2s 1s infinite", display: "block", opacity: 0, fontSize: 10 }}>z</span>
          </div>
        )}
      </div>

      {/* Terminal — bottom left */}
      <div
        className="absolute bottom-10 left-8 font-mono text-[11px] leading-relaxed"
        style={{ color: "#00ff88", maxWidth: 360, zIndex: 10 }}
      >
        <div style={{ color: "#6366f1", marginBottom: 6, fontSize: 10, letterSpacing: "0.15em" }}>
          SYSTEM LOG
        </div>
        {logs.map((line, i) => (
          <div
            key={i}
            style={{
              opacity: i === logs.length - 1 ? 1 : 0.4,
              color: line.includes("✓") ? "#00ff88" : i === logs.length - 1 ? "#00ff88" : "#4ade80",
            }}
          >
            {line}
            {i === logs.length - 1 && (
              <span style={{ animation: "blink 1s infinite" }}>█</span>
            )}
          </div>
        ))}
      </div>

      {/* Branding — top right */}
      <div
        className="absolute top-8 right-8 font-mono font-bold tracking-widest text-lg"
        style={{ color: "#6366f1" }}
      >
        nitansh.dev
      </div>

      {/* Loading bar — bottom right */}
      <div className="absolute bottom-10 right-8" style={{ width: 180 }}>
        <div style={{ color: "#6366f1", fontSize: 10, fontFamily: "monospace", letterSpacing: "0.15em", marginBottom: 6 }}>
          {sleeping ? "READY" : "LOADING"}
        </div>
        <div style={{ height: 2, background: "rgba(99,102,241,0.15)", borderRadius: 2, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #6366f1, #a78bfa)",
              borderRadius: 2,
              animation: "loadbar 15s linear forwards",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes zzz1 { 0%{opacity:0;transform:translateY(0) scale(0.8)} 30%{opacity:1} 100%{opacity:0;transform:translateY(-18px) scale(1.1)} }
        @keyframes loadbar { from{width:0%} to{width:100%} }
      `}</style>
    </div>
  );
}
