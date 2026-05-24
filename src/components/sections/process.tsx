"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "Understanding workforce requirements, operational scale, and compliance needs.",
  },
  {
    number: "02",
    title: "Talent Deployment",
    description:
      "Deploying skilled and semi-skilled workforce across enterprise operations.",
  },
  {
    number: "03",
    title: "Payroll & Compliance",
    description:
      "Managing payroll systems, documentation, labour law compliance, and governance.",
  },
  {
    number: "04",
    title: "Operational Support",
    description:
      "Continuous workforce management and operational infrastructure support.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden section-spacing">
      <div className="absolute inset-0 bg-[#0B132B]" />

      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[#A3E635]/10 blur-3xl" />

      <div className="container-wrapper relative z-10">
        <div className="mb-24 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#A3E635]">
            Workflow Process
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-5xl">
            Workforce Operations
            <br />
            Built With Precision
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-10 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="relative grid gap-8 md:grid-cols-[120px_1fr]"
              >
                <div className="relative z-10 flex items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#A3E635]/30 bg-[#111827] text-lg font-black text-[#A3E635] shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                    {step.number}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#A3E635]/30 hover:bg-white/[0.06]">
                  <h3 className="text-2xl font-black tracking-[-0.03em] text-white md:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
