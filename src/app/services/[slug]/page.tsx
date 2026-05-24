import { notFound } from "next/navigation"

import { ArrowRight } from "lucide-react"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

import { services } from "@/data/services"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params

  const service = services.find(
    (item) => item.slug === slug
  )

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | Span Resources`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({
  params,
}: Props) {
  const { slug } = await params

  const service = services.find(
    (item) => item.slug === slug
  )

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F7F2] text-[#0B132B]">
      <Navbar />

      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#D9F99D]/30 blur-3xl" />

        <div className="container-wrapper relative z-10">
          <div className="max-w-5xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#84CC16]">
              Enterprise Service
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#0B132B] sm:text-6xl lg:text-8xl">
              {service.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-wrapper">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/60 bg-white/80 p-10 shadow-[0_10px_50px_rgba(15,23,42,0.05)]">
              <h3 className="text-5xl font-black text-[#84CC16]">
                20K+
              </h3>

              <p className="mt-4 text-lg text-slate-600">
                Workforce Managed
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/80 p-10 shadow-[0_10px_50px_rgba(15,23,42,0.05)]">
              <h3 className="text-5xl font-black text-[#84CC16]">
                400+
              </h3>

              <p className="mt-4 text-lg text-slate-600">
                Enterprise Clients
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/80 p-10 shadow-[0_10px_50px_rgba(15,23,42,0.05)]">
              <h3 className="text-5xl font-black text-[#84CC16]">
                15+
              </h3>

              <p className="mt-4 text-lg text-slate-600">
                Years Experience
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-[3rem] bg-[#020617] p-10 md:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#A3E635]">
                  Enterprise Workforce
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
