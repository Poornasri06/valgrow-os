import { useMemo } from "react";
import slab from "@/assets/slab.png";
import ring from "@/assets/ring.png";
import ribbon from "@/assets/ribbon.png";
import orb from "@/assets/orb.png";

const PARTICLES = Array.from({ length: 46 }, (_, i) => {
  const rand = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
  return {
    left: rand(1) * 100,
    top: rand(2) * 100,
    size: 1.5 + rand(3) * 3.5,
    depth: 0.3 + rand(4) * 1.4,
    delay: rand(5) * 8,
    gold: rand(6) > 0.86,
  };
});

/**
 * Cinematic scroll-driven background: glossy floating geometry, volumetric
 * light blooms, a perspective data grid and flowing connection streams.
 */
export function SceneBackground({ progress }: { progress: number }) {
  const p = progress;

  const style = useMemo(
    () => ({
      grid: {
        transform: `perspective(1100px) rotateX(64deg) translate3d(0, ${-140 + p * 480}px, 0) scale(${1.6 + p * 0.5})`,
      },
      ring: {
        transform: `translate3d(${-80 + p * -260}px, ${p * 620}px, 0) rotate(${p * 120}deg) scale(${1 - p * 0.25})`,
        opacity: 1 - p * 0.55,
      },
      ribbon: {
        transform: `translate3d(${140 - p * 380}px, ${-60 + p * 340}px, 0) rotate(${-8 + p * 46}deg) scale(${0.9 + p * 0.35})`,
        opacity: 0.55 + p * 0.25,
      },
      slabA: {
        transform: `translate3d(${-40 + p * 180}px, ${120 - p * 520}px, 0) rotate(${6 + p * 40}deg) scale(${1.05 + p * 0.15})`,
      },
      slabB: {
        transform: `translate3d(${60 - p * 240}px, ${260 - p * 700}px, 0) rotate(${-14 - p * 50}deg) scale(${0.8 + p * 0.3})`,
      },
      slabC: {
        transform: `translate3d(${p * 120}px, ${420 - p * 900}px, 0) rotate(${22 - p * 70}deg) scale(${0.6 + p * 0.2})`,
      },
      orb: {
        transform: `translate3d(${-30 + Math.sin(p * 6) * 180}px, ${p * -420}px, 0) scale(${0.9 + p * 0.4})`,
      },
      bloomA: {
        transform: `translate3d(${p * 260}px, ${p * -220}px, 0) scale(${1 + p * 0.6})`,
      },
      bloomB: {
        transform: `translate3d(${-p * 320}px, ${p * 300}px, 0) scale(${1.2 - p * 0.3})`,
      },
      streams: {
        transform: `translate3d(0, ${p * -180}px, 0)`,
        opacity: 0.35 + p * 0.4,
      },
    }),
    [p],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* volumetric light blooms */}
      <div
        className="absolute -right-[15%] -top-[20%] h-[70vw] w-[70vw] rounded-full opacity-70 blur-[120px] will-change-transform"
        style={{
          ...style.bloomA,
          background:
            "radial-gradient(circle, oklch(0.72 0.19 305 / 0.55), transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-[25%] -left-[20%] h-[65vw] w-[65vw] rounded-full opacity-60 blur-[130px] will-change-transform"
        style={{
          ...style.bloomB,
          background:
            "radial-gradient(circle, oklch(0.78 0.14 275 / 0.5), transparent 65%)",
        }}
      />

      {/* perspective data grid */}
      <div className="absolute inset-x-0 bottom-0 h-[80vh] origin-bottom will-change-transform" style={style.grid}>
        <div
          className="h-full w-full opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.55 0.12 300 / 0.28) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.55 0.12 300 / 0.28) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(circle at 50% 40%, black, transparent 72%)",
          }}
        />
      </div>

      {/* flowing data streams */}
      <svg
        className="absolute inset-0 h-full w-full will-change-transform"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={style.streams}
      >
        <defs>
          <linearGradient id="stream" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.6 0.22 300)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.6 0.22 300)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.8 0.13 85)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          "M-100 640 C 320 560, 520 760, 900 600 S 1360 420, 1600 500",
          "M-100 420 C 280 300, 640 520, 980 360 S 1380 240, 1600 300",
          "M-100 820 C 380 780, 700 880, 1040 760 S 1420 660, 1600 700",
        ].map((d, i) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="url(#stream)"
            strokeWidth={1.4}
            strokeDasharray="10 18"
            style={{ animation: `dash-flow ${9 + i * 4}s linear infinite` }}
          />
        ))}
      </svg>

      {/* glossy geometry */}
      <img
        src={ring}
        alt=""
        width={1024}
        height={1024}
        className="absolute right-[6%] top-[14%] w-[46vw] max-w-[720px] will-change-transform"
        style={style.ring}
      />
      <img
        src={ribbon}
        alt=""
        width={1024}
        height={1024}
        loading="lazy"
        className="absolute -right-[6%] top-[2%] w-[42vw] max-w-[640px] will-change-transform"
        style={style.ribbon}
      />
      <img
        src={slab}
        alt=""
        width={1024}
        height={1024}
        className="absolute -left-[8%] top-[52%] w-[38vw] max-w-[560px] will-change-transform"
        style={style.slabA}
      />
      <img
        src={slab}
        alt=""
        width={1024}
        height={1024}
        loading="lazy"
        className="absolute right-[2%] top-[62%] w-[34vw] max-w-[500px] will-change-transform"
        style={style.slabB}
      />
      <img
        src={slab}
        alt=""
        width={1024}
        height={1024}
        loading="lazy"
        className="absolute left-[38%] top-[86%] w-[26vw] max-w-[380px] will-change-transform"
        style={style.slabC}
      />
      <img
        src={orb}
        alt=""
        width={512}
        height={512}
        loading="lazy"
        className="animate-drift absolute left-[54%] top-[34%] w-[5vw] min-w-[42px] will-change-transform"
        style={style.orb}
      />

      {/* fine data particles */}
      {PARTICLES.map((particle, i) => (
        <span
          key={i}
          className="animate-glow absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`,
            background: particle.gold ? "var(--gold)" : "oklch(0.55 0.2 300)",
            transform: `translate3d(0, ${p * -300 * particle.depth}px, 0)`,
          }}
        />
      ))}

      {/* soft vignette to keep foreground legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 40%, oklch(0.99 0.005 305 / 0.82), transparent 60%)",
        }}
      />
    </div>
  );
}
