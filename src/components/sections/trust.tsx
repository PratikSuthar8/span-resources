"use client"

import { FadeUp } from "@/components/animations/fade-up"

const companies = [
  "Manufacturing",
  "Pharma",
  "Infrastructure",
  "Logistics",
  "Enterprise",
  "Operations",
]

const testimonials = [
  {
    quote:
      "Span Resources helped streamline our workforce operations with reliable staffing and compliance systems.",
    name: "Operations Head",
    company: "Manufacturing Enterprise",
  },
  {
    quote:
      "Professional manpower deployment and payroll support that scaled with our operations.",
    name: "HR Director",
    company: "Pharmaceutical Company",
  },
]

export function TrustSection() {
  return (
    <section className="relative py-24">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D9F99D]/20 blur-3xl" />

      <div className="container-wrapper relative z-10">
        <FadeUp>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#84CC16]">
              Trusted By Enterprises
            </p>

            <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] text-[#0B132B] sm:text-5xl lg:text-6xl">
              Trusted Workforce Partner
              <br />
              Across Gujarat
            </h2>
          </div>
        </FadeUp>

        <div className="mx-auto mt-14 flex max-w-5xl flex-wrap items-center justify-center gap-4">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-[#0B132B] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#A3E635]"
            >
              {company}
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[2rem] border border-white/50 bg-white/70 p-10 shadow-[0_20px_80px_rgba(15,23,42,0.06)] backdrop-blur-xl"
            >
              <p className="text-2xl leading-relaxed text-[#0B132B]">
                “{item.quote}”
              </p>

              <div className="mt-10">
                <h4 className="text-2xl font-bold text-[#0B132B]">
                  {item.name}
                </h4>

                <p className="mt-2 text-lg text-slate-500">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
