"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const signals = [
  {
    title: "Unified Data Graph",
    description:
      "Normalize siloed systems into a live knowledge fabric that understands entity lineage and governance."
  },
  {
    title: "Adaptive Orchestration",
    description:
      "Continuously self-optimizing playbooks that learn from every workflow closure and exception."
  },
  {
    title: "Trust-grade Deployment",
    description:
      "Policy aware deployment rails with deterministic fallbacks and records designed for auditors."
  }
];

const partners = [
  "Aurora Cloud",
  "Helix Analytics",
  "Northwind Capital",
  "Ironforge Systems",
  "Atlas BioLabs",
  "Lambda Logistics"
];

export default function Page(): JSX.Element {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [cursorX, cursorY]);

  const spotlight = useMotionTemplate`radial-gradient(420px at ${cursorX}px ${cursorY}px, rgba(31,94,214,0.25), transparent 60%)`;

  return (
    <main className="relative overflow-hidden">
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ backgroundImage: spotlight }}
      />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-32 pt-28 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="relative z-10 space-y-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate/60 bg-slate/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-300 backdrop-blur-lg">
              <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_12px_rgba(18,247,214,0.75)]" />
              Workflow Intelligence Layer
            </div>
            <div className="space-y-8">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                Remylar operationalizes enterprise AI by turning data exhaust
                into intelligent, self-healing workflows.
              </h1>
              <p className="max-w-2xl text-lg text-zinc-300 md:text-xl">
                Ingest any data stream, contextualize relationships in real time,
                and deploy orchestrated automations that anticipate outcomes.
                Remylar bridges human decisions and machine velocity with
                explainable intelligence you can govern.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#platform"
                className="relative rounded-full bg-gradient-to-r from-aurora via-pulse to-neon px-8 py-3 text-sm font-medium text-night transition-transform duration-300 hover:scale-[1.02]"
              >
                Explore the Platform
              </a>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate/50 bg-slate/30">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                  >
                    <div className="absolute inset-1 rounded-full border border-dashed border-neon/50" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-zinc-200"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    SLA <span className="text-[0.65rem] text-neon/70">99.99%</span>
                  </motion.div>
                </div>
                <span className="max-w-[14rem] text-xs uppercase tracking-[0.2em]">
                  Trusted in global critical operations
                </span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {signals.map((signal) => (
                <motion.div
                  key={signal.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate/60 bg-gradient-to-br from-[#10121c] via-[#0c0f19] to-[#0a0c16] p-6 shadow-[0_20px_45px_-25px_rgba(18,247,214,0.25)]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="grid-overlay absolute inset-0" />
                  </div>
                  <div className="relative flex h-full flex-col gap-3">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-zinc-400">
                      Signal
                    </div>
                    <h3 className="text-lg font-medium text-white">{signal.title}</h3>
                    <p className="text-sm text-zinc-400">{signal.description}</p>
                    <motion.span
                      className="mt-auto inline-flex items-center gap-2 text-xs text-neon/70"
                      animate={{ x: [0, 6, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.8,
                        ease: "easeInOut",
                        delay: 0.4
                      }}
                    >
                      Real-time signal stream
                      <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_rgba(18,247,214,0.65)]" />
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          <aside className="relative z-10 flex flex-col gap-6">
            <div className="relative flex flex-1 flex-col items-stretch overflow-hidden rounded-3xl border border-slate/70 bg-[#090b13]/80 p-6 backdrop-blur-xl">
              <motion.div
                className="absolute -left-40 -top-40 h-72 w-72 rounded-full bg-aurora/30 blur-3xl"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -right-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-pulse/30 blur-3xl"
                animate={{ y: ["-10%", "10%", "-10%"] }}
                transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
              />
              <div className="relative flex flex-col gap-8">
                <motion.div
                  className="grid grid-cols-[auto,1fr] items-center gap-4 rounded-2xl border border-slate/60 bg-[#101427]/70 p-4 glass-sheen"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-night">
                    <motion.span
                      className="h-8 w-8 rounded-full border border-neon/40"
                      animate={{ boxShadow: ["0 0 0 0px rgba(18,247,214,0.45)", "0 0 0 12px rgba(18,247,214,0)"] }}
                      transition={{ repeat: Infinity, duration: 3.2 }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                      Signal Density
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-semibold text-white">12.4B</span>
                      <span className="rounded-full bg-neon/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-neon">
                        /day
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500">
                      Event correlations resolved autonomously across federated sources.
                    </p>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-zinc-500">
                    <span>Realtime Alignment</span>
                    <span>94%</span>
                  </div>
                  <div className="relative h-1.5 overflow-hidden rounded-full bg-[#0b0e18]">
                    <motion.div
                      className="absolute inset-y-0 left-0 w-[94%] rounded-full bg-gradient-to-r from-neon via-aurora to-pulse"
                      initial={{ width: "0%" }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 2.2, ease: "easeOut", delay: 0.5 }}
                    />
                  </div>
                </div>

                <motion.div
                  className="relative overflow-hidden rounded-2xl border border-slate/60 bg-[#0b0f1d]/70 p-6"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-neon/20 blur-2xl" />
                  <div className="absolute -bottom-10 left-16 h-24 w-24 rounded-full bg-aurora/30 blur-2xl" />
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                        Intelligent Workflow Mesh
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-neon/70">
                        Live
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {["Insight", "Decision", "Action"].map((phase, index) => (
                        <motion.div
                          key={phase}
                          className="flex flex-col gap-2 rounded-xl border border-slate/70 bg-[#090d18]/60 p-3"
                          animate={{
                            y: [0, index % 2 === 0 ? -8 : 8, 0]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 6 + index,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-zinc-500">
                            {phase}
                          </span>
                          <span className="text-sm text-white">
                            {index === 0
                              ? "Signals contextualized against dynamic ontologies."
                              : index === 1
                                ? "Reasoning lattice synthesizes pathing with guardrails."
                                : "Automations execute with human-in-the-loop controls."}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-2xl border border-slate/60 bg-[#090c15]/80 py-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-pulse/25 blur-3xl"
                animate={{ x: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-aurora/20 blur-3xl"
                animate={{ x: [0, -25, 0] }}
                transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
              />
              <div className="relative flex overflow-hidden">
                <motion.div
                  className="flex min-w-full items-center gap-12 whitespace-nowrap pl-12 text-xs uppercase tracking-[0.4em] text-zinc-500"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                >
                  {partners.map((partner) => (
                    <span key={partner}>{partner}</span>
                  ))}
                </motion.div>
                <motion.div
                  className="flex min-w-full items-center gap-12 whitespace-nowrap text-xs uppercase tracking-[0.4em] text-zinc-500"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                >
                  {partners.map((partner) => (
                    <span key={`${partner}-duplicate`}>{partner}</span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
      <div
        id="platform"
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-28 md:px-12 lg:px-20"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate/70 bg-[#090c16]/80 p-10">
          <motion.div
            className="absolute inset-0 z-0 opacity-40"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(18,247,214,0.25), transparent 45%), radial-gradient(circle at 80% 30%, rgba(31,94,214,0.2), transparent 50%), radial-gradient(circle at 50% 80%, rgba(127,54,255,0.35), transparent 55%)",
              backgroundSize: "200% 200%"
            }}
          />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-neon/80">
                Platform Architecture
                <span className="h-px w-12 bg-neon/30" />
              </span>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Federated intelligence, deployed with enterprise-grade rigor.
              </h2>
              <p className="text-lg text-zinc-300">
                From upstream ingestion to downstream execution, Remylar compresses
                the cycle between insight and action. Configure specialized agents,
                codify decision policies, and prove compliance through immutable
                telemetry.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    label: "Adaptive Ontologies",
                    value: "Contextual models tuned to domain vocabularies in hours."
                  },
                  {
                    label: "Guardrailed Reasoning",
                    value: "Multi-agent graph with deterministic fallbacks and human override."
                  },
                  {
                    label: "Enterprise Federation",
                    value: "Hybrid deployment spanning sovereign regions with zero-trust principles."
                  },
                  {
                    label: "Compliance Ledger",
                    value: "Immutable decision trails ready for regulators and auditors."
                  }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate/60 bg-[#0b101d]/80 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm text-zinc-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div
                className="absolute inset-0 -translate-x-6 translate-y-6 rounded-[32px] border border-pulse/20 bg-pulse/10 blur-3xl"
                animate={{ opacity: [0.25, 0.4, 0.25] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              />
              <div className="relative rounded-[32px] border border-slate/60 bg-[#0b111f]/80 p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Live Ops Console
                  </span>
                  <span className="rounded-full border border-neon/30 px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-neon/70">
                    Observability
                  </span>
                </div>
                <div className="mt-6 flex flex-col gap-5">
                  {[
                    {
                      label: "Cognitive Throughput",
                      value: "8.7k req/min",
                      delta: "+22%"
                    },
                    {
                      label: "Human Override Rate",
                      value: "3.1%",
                      delta: "-18%"
                    },
                    {
                      label: "Decision Confidence",
                      value: "0.93",
                      delta: "+0.08"
                    }
                  ].map((metric) => (
                    <div key={metric.label} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                          {metric.label}
                        </span>
                        <motion.span
                          className="text-[0.65rem] uppercase tracking-[0.3em] text-neon/70"
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ repeat: Infinity, duration: 4.2 }}
                        >
                          {metric.delta}
                        </motion.span>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-lg text-white">{metric.value}</span>
                        <motion.div
                          className="h-10 w-32 overflow-hidden rounded-full border border-slate/70 bg-[#080d17]/80"
                          animate={{ boxShadow: ["0 0 0 rgba(18,247,214,0)", "0 0 22px rgba(18,247,214,0.25)", "0 0 0 rgba(18,247,214,0)"] }}
                          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        >
                          <motion.div
                            className="h-full w-full origin-left bg-gradient-to-r from-aurora/60 via-neon/60 to-pulse/60"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-slate/60 bg-[#090e1a]/80 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                      Workflow Intelligence Graph
                    </span>
                    <span className="text-xs text-zinc-400">Flow Nodes</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      { label: "Governance", value: "Active" },
                      { label: "Risk Mitigation", value: "Autonomous" },
                      { label: "Revenue Ops", value: "Aligned" },
                      { label: "Customer Care", value: "Predictive" },
                      { label: "Supply Chain", value: "Adaptive" },
                      { label: "Compliance", value: "Traceable" }
                    ].map((node, index) => (
                      <motion.div
                        key={node.label}
                        className="rounded-xl border border-slate/60 bg-[#070b14]/70 p-3 text-center"
                        animate={{ opacity: [0.65, 1, 0.65] }}
                        transition={{
                          repeat: Infinity,
                          duration: 5 + index * 0.4,
                          ease: "easeInOut",
                          delay: index * 0.15
                        }}
                      >
                        <p className="text-[0.6rem] uppercase tracking-[0.3em] text-zinc-500">
                          {node.label}
                        </p>
                        <p className="mt-2 text-xs text-white">{node.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
