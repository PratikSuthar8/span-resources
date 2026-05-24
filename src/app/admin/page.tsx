"use client"

import { useEffect, useState } from "react"

type DashboardStats = {
  totalLeads: number
  totalJobs: number
  totalApplications: number
}

export default function AdminDashboardPage() {
  const [stats, setStats] =
    useState<DashboardStats>({
      totalLeads: 0,
      totalJobs: 0,
      totalApplications: 0,
    })

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          "/api/admin/stats"
        )

        const data = await res.json()

        setStats(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const cards = [
    {
      title: "Total Leads",
      value: stats.totalLeads,
    },
    {
      title: "Open Jobs",
      value: stats.totalJobs,
    },
    {
      title: "Applications",
      value: stats.totalApplications,
    },
  ]

  return (
    <div>
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#84CC16]">
          Admin Dashboard
        </p>

        <h1 className="mt-3 text-6xl font-black tracking-[-0.05em] text-[#0B132B]">
          Workforce Platform
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-[32px] bg-white p-8 shadow-sm"
          >
            <h2 className="text-6xl font-black text-[#84CC16]">
              {loading
                ? "..."
                : card.value}
            </h2>

            <p className="mt-4 text-2xl text-slate-600">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
