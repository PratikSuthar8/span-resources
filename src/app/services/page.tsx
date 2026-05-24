import Link from "next/link"

import { ArrowRight } from "lucide-react"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

import { FadeUp } from "@/components/animations/fade-up"

import { services } from "@/data/services"

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F7F2] text-[#0B132B]">
      <Navbar />

      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#D9F99D]/30 blur-3xl" />

        <div className="container-wrapper relative z-10">
          <FadeUp>
            <div className="max-w-5xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#84CC16]">
                Enterprise Services
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#0B132B] sm:text-6xl lg:text-8xl">
                Workforce Solutions
                <br />
                Built For Scale
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
                Enterprise workforce infrastructure designed for manufacturing,
                pharma, logistics, and industrial operations.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-wrapper">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-[2.5rem] border border-white/60 bg-white/80 p-10 shadow-[0_20px_80px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#84CC16]">
                  Enterprise Service
                </p>

                <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-[#0B132B]">
                  {service.title}
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <div className="mt-10 flex items-center justify-between">
                  <span className="text-lg font-bold text-[#0B132B]">
                    {service.stats}
                  </span>

                  <div className="flex items-center gap-3 text-lg font-semibold text-[#0B132B]">
                    Explore
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
