"use client"

import { useState } from "react"
import { toast } from "sonner"

import {
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

import { FadeUp } from "@/components/animations/fade-up"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    try {
      setLoading(true)

      const res = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        toast.success("Inquiry submitted successfully!")

        setForm({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error(error)

      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F7F2] text-[#0B132B]">
      <Navbar />

      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#D9F99D]/30 blur-3xl" />

        <div className="container-wrapper relative z-10">
          <FadeUp>
            <div className="max-w-5xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#84CC16]">
                Contact
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#0B132B] sm:text-6xl lg:text-8xl">
                Let’s Build
                <br />
                Workforce Infrastructure
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
                Connect with Span Resources for enterprise staffing,
                workforce management, compliance systems, and industrial operations.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-wrapper">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
            <FadeUp>
              <form
                onSubmit={handleSubmit}
                className="rounded-[3rem] border border-white/60 bg-white/80 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)] backdrop-blur-xl md:p-12"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-500">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className="mt-3 h-14 w-full rounded-2xl border border-neutral-200 bg-white px-5 text-[#0B132B] outline-none transition-all focus:border-[#84CC16]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-500">
                      Company Name
                    </label>

                    <input
                      type="text"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      className="mt-3 h-14 w-full rounded-2xl border border-neutral-200 bg-white px-5 text-[#0B132B] outline-none transition-all focus:border-[#84CC16]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-500">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="mt-3 h-14 w-full rounded-2xl border border-neutral-200 bg-white px-5 text-[#0B132B] outline-none transition-all focus:border-[#84CC16]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-500">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-3 h-14 w-full rounded-2xl border border-neutral-200 bg-white px-5 text-[#0B132B] outline-none transition-all focus:border-[#84CC16]"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label className="text-sm font-semibold text-slate-500">
                    Enterprise Requirement
                  </label>

                  <textarea
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="mt-3 w-full rounded-[2rem] border border-neutral-200 bg-white p-5 text-[#0B132B] outline-none transition-all focus:border-[#84CC16]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0B132B] px-8 py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Inquiry"}
                </button>
              </form>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="sticky top-28 space-y-6">
                <div className="rounded-[2rem] bg-[#020617] p-8 text-white">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      <Building2 className="h-6 w-6 text-[#A3E635]" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black">
                        Enterprise Solutions
                      </h3>

                      <p className="mt-3 leading-relaxed text-slate-300">
                        Workforce infrastructure built for modern industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_10px_50px_rgba(15,23,42,0.05)]">
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A3E635]/20">
                        <MapPin className="h-5 w-5 text-[#0B132B]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-500">
                          Office Location
                        </p>

                        <p className="mt-2 text-lg font-bold text-[#0B132B]">
                          Ahmedabad, Gujarat
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A3E635]/20">
                        <Phone className="h-5 w-5 text-[#0B132B]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-500">
                          Phone Number
                        </p>

                        <p className="mt-2 text-lg font-bold text-[#0B132B]">
                          +91 98765 43210
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A3E635]/20">
                        <Mail className="h-5 w-5 text-[#0B132B]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-500">
                          Email Address
                        </p>

                        <p className="mt-2 text-lg font-bold text-[#0B132B]">
                          enterprise@spanresources.in
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
