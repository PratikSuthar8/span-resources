import Image from "next/image"
import { notFound } from "next/navigation"

import { ArrowRight } from "lucide-react"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

import { industries } from "@/data/industries"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params

  const industry = industries.find(
    (item) => item.slug === slug
  )

  if (!industry) {
    return {
      title: "Industry Not Found",
    }
  }

  return {
    title: `${industry.title} | Span Resources`,
    description: industry.description,
  }
}

export default async function IndustryDetailPage({
  params,
}: Props) {
  const { slug } = await params

  const industry = industries.find(
    (item) => item.slug === slug
  )

  if (!industry) {
    notFound()
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F7F2] text-[#0B132B]">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="relative h-[90vh] min-h-[700px]">
          <Image
            src={industry.image}
            alt={industry.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

          <div className="container-wrapper relative z-10 flex h-full items-end pb-24">
            <div className="max-w-5xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#A3E635]">
                Industry Solutions
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
                {industry.title}
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">
                {industry.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-wrapper">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#84CC16]">
                Operational Challenges
              </p>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#0B132B] md:text-5xl">
                Workforce Systems
                Built For Scale
              </h2>
            </div>

            <div className="space-y-8">
              <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_10px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                <h3 className="text-2xl font-black text-[#0B132B]">
                  Compliance Infrastructure
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Labour law compliance, payroll governance,
                  documentation systems, and workforce operations
                  optimized for enterprise environments.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_10px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                <h3 className="text-2xl font-black text-[#0B132B]">
                  Enterprise Workforce Deployment
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Skilled and semi-skilled workforce infrastructure
                  tailored for industrial operations and operational continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#020617] py-28">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#A3E635]/10 blur-3xl" />

        <div className="container-wrapper relative z-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <h3 className="text-5xl font-black text-[#A3E635]">
                20K+
              </h3>

              <p className="mt-4 text-lg text-slate-300">
                Workforce Managed
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <h3 className="text-5xl font-black text-[#A3E635]">
                400+
              </h3>

              <p className="mt-4 text-lg text-slate-300">
                Enterprise Clients
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <h3 className="text-5xl font-black text-[#A3E635]">
                15+
              </h3>

              <p className="mt-4 text-lg text-slate-300">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-wrapper">
          <div className="overflow-hidden rounded-[3rem] bg-[#0B132B] p-10 md:p-16">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#A3E635]">
                  Workforce Solutions
                </p>

                <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                  Ready To Build
                  Workforce Infrastructure?
                </h2>
              </div>

              <div className="flex justify-start lg:justify-end">
                <button className="inline-flex items-center gap-3 rounded-full bg-[#A3E635] px-8 py-5 text-lg font-bold text-[#0B132B] transition-transform duration-300 hover:scale-105">
                  Hire Workforce
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
