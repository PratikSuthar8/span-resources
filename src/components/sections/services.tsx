"use client"

import {
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Users,
} from "lucide-react"

import { FadeUp } from "@/components/animations/fade-up"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

const services = [
  {
    title: "Industrial Staffing",
    description:
      "Skilled and semi-skilled workforce solutions for manufacturing and enterprise operations.",
    icon: Users,
  },
  {
    title: "Payroll Management",
    description:
      "Reliable payroll infrastructure with compliance-first workforce processing.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Compliance & Legal",
    description:
      "Labour law compliance, documentation, and operational workforce governance.",
    icon: ClipboardCheck,
  },
  {
    title: "Enterprise Workforce",
    description:
      "End-to-end workforce infrastructure tailored for modern industries.",
    icon: Building2,
  },
]

export function ServicesSection() {
  return (
    <section className="relative section-spacing">
      <div className="container-wrapper">
        <FadeUp>
          <div className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#84CC16]">
                Services
              </p>

              <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-[#0B132B] sm:text-4xl md:text-5xl">
                Workforce Solutions Built
                <br />
                For Enterprise Scale
              </h2>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-[#64748B] md:text-lg">
              Span Resources delivers scalable workforce infrastructure
              for manufacturing, pharma, logistics, and enterprise operations.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <StaggerItem key={service.title}>
                <div className="premium-card group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_10px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(15,23,42,0.10)]">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#D9F99D]/20 blur-3xl transition-all duration-500 group-hover:scale-125" />

                  <div className="relative z-10">
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B132B] text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mb-4 text-2xl font-bold tracking-[-0.03em] text-[#0B132B]">
                      {service.title}
                    </h3>

                    <p className="max-w-md leading-relaxed text-[#64748B]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
