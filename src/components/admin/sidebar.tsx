"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"

import {
  BriefcaseBusiness,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Mail,
} from "lucide-react"

const navigation = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },

  {
    title: "Leads",
    href: "/admin/leads",
    icon: Mail,
  },

  {
    title: "Applications",
    href: "/admin/applications",
    icon: ClipboardList,
  },

  {
    title: "Jobs",
    href: "/admin/jobs",
    icon: BriefcaseBusiness,
  },
]

export function Sidebar() {
  const pathname =
    usePathname()

  async function handleLogout() {
    await fetch(
      "/api/admin/logout",
      {
        method: "POST",
      }
    )

    window.location.href =
      "/login"
  }

  return (
    <aside className="flex min-h-screen w-[300px] flex-col bg-[#020617] text-white">
      <div className="border-b border-white/10 p-9">
        <h2 className="text-5xl font-black tracking-[-0.05em]">
          SPAN ADMIN
        </h2>

        <p className="mt-4 text-lg text-slate-400">
          Workforce Platform
        </p>
      </div>

      <nav className="flex-1 space-y-3 p-5">
        {navigation.map((item) => {
          const Icon = item.icon

          const active =
            pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex h-16 items-center gap-4 rounded-2xl px-6 text-lg font-semibold transition-all duration-300 ${
                active
                  ? "bg-[#A3E635] text-[#0B132B]"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="h-6 w-6" />

              {item.title}
            </Link>
          )
        })}
      </nav>

      <div className="p-5">
        <button
          onClick={handleLogout}
          className="flex h-16 w-full items-center gap-4 rounded-2xl border border-white/10 px-6 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-white/5 hover:text-white"
        >
          <LogOut className="h-6 w-6" />

          Logout
        </button>
      </div>
    </aside>
  )
}
