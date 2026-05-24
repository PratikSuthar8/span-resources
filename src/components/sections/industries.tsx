"use client"

import Image from "next/image"

import { FadeUp } from "@/components/animations/fade-up"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { ParallaxImage } from "@/components/animations/parallax-image"

const industries = [
  {
    title: "Manufacturing",
    description:
      "Scalable industrial workforce infrastructure powering factories and production facilities.",
    image: "/assets/industries/manufacturing.jpg",
  },
  {
    title: "Pharmaceutical",
    description:
      "Compliance-first workforce systems built for pharma enterprises.",
    image: "/assets/industries/pharma.jpg",
  },
  {
    title: "Logistics",
    description:
      "Operational manpower infrastructure for transportation and supply chain systems.",
    image: "/assets/industries/logistics.jpg",
  },
  {
    title: "Enterprise Operations",
    description:
      "Modern workforce solutions designed for enterprise-scale operations.",
    image: "/assets/industries/enterprise.jpg",
  },
]

export function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B132B] section-spacing">
      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[#A3E635]/10 blur-3xl" />

      <div className="container-wrapper relative z-10">
        <FadeUp>
          <div className="mb-16 max-w-3xl lg:mb-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#A3E635]">
              Industries
            </p>

            <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
              Workforce Infrastructure
              <br />
              Across Critical Industries
            </h2>
          </div>
        </FadeUp>

        <StaggerContainer className="grid gap-6 lg:grid-cols-2">
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <div className="group relative overflow-hidden rounded-[2rem] transition-transform duration-500 hover:-translate-y-2">
                <ParallaxImage className="relative h-[420px] overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="parallax-layer object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading={industry.title === "Manufacturing" ? "eager" : "lazy"}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.18),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                    <div className="max-w-md">
                      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#A3E635]">
                        Industry Sector
                      </p>

                      <h3 className="text-3xl font-black tracking-[-0.03em] text-white md:text-4xl">
                        {industry.title}
                      </h3>

                      <p className="mt-5 leading-relaxed text-slate-300">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </ParallaxImage>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
