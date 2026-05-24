"use client"

import { useState } from "react"
import { toast } from "sonner"

export default function AdminJobsPage() {
  const [loading, setLoading] =
    useState(false)

  const [formData, setFormData] =
    useState({
      title: "",
      department: "",
      location: "",
      type: "",
      salary: "",
      description: "",
      requirements: "",
    })

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault()

    try {
      setLoading(true)

      const response = await fetch(
        "/api/jobs",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...formData,
            requirements:
              formData.requirements
                .split(",")
                .map((item) =>
                  item.trim()
                ),
          }),
        }
      )

      if (!response.ok) {
        throw new Error()
      }

      toast.success(
        "Job created successfully"
      )

      setFormData({
        title: "",
        department: "",
        location: "",
        type: "",
        salary: "",
        description: "",
        requirements: "",
      })
    } catch (error) {
      toast.error(
        "Failed to create job"
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#84CC16]">
        Jobs Management
      </p>

      <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] text-[#0B132B]">
        Create New Job
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-12 rounded-[2rem] bg-white p-10 shadow-[0_10px_40px_rgba(15,23,42,0.05)]"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <input
            required
            placeholder="Job Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
            className="h-16 rounded-2xl border border-slate-200 px-6 outline-none transition-all focus:border-[#84CC16]"
          />

          <input
            required
            placeholder="Department"
            value={formData.department}
            onChange={(e) =>
              setFormData({
                ...formData,
                department:
                  e.target.value,
              })
            }
            className="h-16 rounded-2xl border border-slate-200 px-6 outline-none transition-all focus:border-[#84CC16]"
          />

          <input
            required
            placeholder="Location"
            value={formData.location}
            onChange={(e) =>
              setFormData({
                ...formData,
                location:
                  e.target.value,
              })
            }
            className="h-16 rounded-2xl border border-slate-200 px-6 outline-none transition-all focus:border-[#84CC16]"
          />

          <input
            required
            placeholder="Employment Type"
            value={formData.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                type: e.target.value,
              })
            }
            className="h-16 rounded-2xl border border-slate-200 px-6 outline-none transition-all focus:border-[#84CC16]"
          />

          <input
            placeholder="Salary Range"
            value={formData.salary}
            onChange={(e) =>
              setFormData({
                ...formData,
                salary:
                  e.target.value,
              })
            }
            className="h-16 rounded-2xl border border-slate-200 px-6 outline-none transition-all focus:border-[#84CC16] md:col-span-2"
          />

          <textarea
            required
            rows={6}
            placeholder="Job Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description:
                  e.target.value,
              })
            }
            className="rounded-2xl border border-slate-200 p-6 outline-none transition-all focus:border-[#84CC16] md:col-span-2"
          />

          <textarea
            rows={4}
            placeholder="Requirements separated by commas"
            value={formData.requirements}
            onChange={(e) =>
              setFormData({
                ...formData,
                requirements:
                  e.target.value,
              })
            }
            className="rounded-2xl border border-slate-200 p-6 outline-none transition-all focus:border-[#84CC16] md:col-span-2"
          />
        </div>

        <button
          disabled={loading}
          className="mt-8 inline-flex h-16 items-center justify-center rounded-full bg-[#0B132B] px-10 text-lg font-bold text-white transition-all hover:scale-[1.02] disabled:opacity-60"
        >
          {loading
            ? "Creating..."
            : "Create Job"}
        </button>
      </form>
    </div>
  )
}
