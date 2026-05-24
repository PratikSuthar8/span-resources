import Link from "next/link"

import {
  ArrowRight,
  MapPin,
} from "lucide-react"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

import { FadeUp } from "@/components/animations/fade-up"

import { connectDB } from "@/lib/mongodb"
import { Job } from "@/models/Job"

export default async function JobsPage() {
  await connectDB()

  const jobs = await Job.find({
    isActive: true,
  })
    .sort({
      createdAt: -1,
    })
    .lean()

  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F7F2] text-[#0B132B]">
      <Navbar />

      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#D9F99D]/30 blur-3xl" />

        <div className="container-wrapper relative z-10">
          <FadeUp>
            <div className="max-w-5xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#84CC16]">
                Careers
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#0B132B] sm:text-6xl lg:text-8xl">
                Build Your Career
                <br />
                With Span Resources
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
                Explore workforce opportunities across manufacturing,
                logistics, enterprise operations, and industrial infrastructure.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-wrapper">
          <div className="grid gap-6">
            {jobs.map((job: any) => (
              <Link
                key={job._id.toString()}
                href={`/jobs/${job._id}`}
                className="group rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_10px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="rounded-full bg-[#A3E635]/20 px-4 py-2 text-sm font-semibold text-[#0B132B]">
                        {job.type}
                      </span>

                      {job.salary && (
                        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                          {job.salary}
                        </span>
                      )}

                      <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                        {job.department}
                      </span>
                    </div>

                    <h2 className="mt-6 text-3xl font-black tracking-[-0.04em] text-[#0B132B]">
                      {job.title}
                    </h2>

                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
                      {job.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-slate-500">
                      <MapPin className="h-5 w-5" />
                      {job.location}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-lg font-semibold text-[#0B132B]">
                    Apply Now
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}

            {jobs.length === 0 && (
              <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-20 text-center">
                <h3 className="text-3xl font-black text-[#0B132B]">
                  No Open Positions
                </h3>

                <p className="mt-4 text-lg text-slate-500">
                  New opportunities will appear here soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
