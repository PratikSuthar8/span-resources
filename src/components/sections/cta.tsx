"use client"

import Link from "next/link"

import { ArrowRight } from "lucide-react"

import { FadeUp } from "@/components/animations/fade-up"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[#020617]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A3E635]/20 blur-3xl" />

      <div className="container-wrapper relative z-10">
        <FadeUp>
          <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-16">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#A3E635]">
                  Workforce Solutions
                </p>

                <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                  Ready To Scale
                  <br />
                  Your Workforce?
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
                  From recruitment and staffing to payroll and compliance,
                  Span Resources delivers workforce infrastructure built for
                  modern enterprise operations.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 rounded-full bg-[#A3E635] px-8 py-4 text-base font-semibold text-[#0B132B] transition-all duration-300 hover:scale-105"
                  >
                    Hire Workforce
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#A3E635]"
                  >
                    Contact Team
                  </Link>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <h3 className="text-5xl font-black text-[#A3E635]">
                    20K+
                  </h3>

                  <p className="mt-3 text-lg text-slate-300">
                    Workforce Managed
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <h3 className="text-5xl font-black text-[#A3E635]">
                    400+
                  </h3>

                  <p className="mt-3 text-lg text-slate-300">
                    Enterprise Clients
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <h3 className="text-5xl font-black text-[#A3E635]">
                    15+
                  </h3>

                  <p className="mt-3 text-lg text-slate-300">
                    Years Experience
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <h3 className="text-5xl font-black text-[#A3E635]">
                    98%
                  </h3>

                  <p className="mt-3 text-lg text-slate-300">
                    Compliance Success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
