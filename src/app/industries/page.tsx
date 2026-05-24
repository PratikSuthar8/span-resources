import Image from "next/image"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

import { FadeUp } from "@/components/animations/fade-up"

import { industries } from "@/data/industries"

export default function IndustriesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F7F2] text-[#0B132B]">
      <Navbar />

      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#D9F99D]/30 blur-3xl" />

        <div className="container-wrapper relative z-10">
          <FadeUp>
            <div className="max-w-5xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#84CC16]">
                Industries
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#0B132B] sm:text-6xl lg:text-8xl">
                Workforce Solutions
                <br />
                For Modern Industries
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
                Span Resources delivers enterprise workforce infrastructure
                across manufacturing, pharma, logistics, and industrial operations.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-wrapper">
          <div className="grid gap-8 lg:grid-cols-2">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative overflow-hidden rounded-[2.5rem]"
              >
                <div className="relative h-[500px] overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.18),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 p-10">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#A3E635]">
                      Industry Sector
                    </p>

                    <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                      {industry.title}
                    </h2>

                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                      {industry.description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-white">
                      Explore Industry
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
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
