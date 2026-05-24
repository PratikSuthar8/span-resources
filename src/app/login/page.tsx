"use client"

import { useRouter } from "next/navigation"

import { useState } from "react"

export default function LoginPage() {
  const router = useRouter()

  const [loading, setLoading] =
    useState(false)

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    })

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault()

    try {
      setLoading(true)

      const response = await fetch(
        "/api/admin/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            formData
          ),
        }
      )

      if (!response.ok) {
        throw new Error()
      }

      router.push("/admin")
    } catch {
      const toast =
        document.createElement("div")

      toast.innerText =
        "Invalid credentials"

      toast.className =
        "fixed right-8 top-8 z-[9999] rounded-2xl bg-red-500 px-6 py-4 text-lg font-bold text-white shadow-2xl"

      document.body.appendChild(
        toast
      )

      setTimeout(() => {
        toast.remove()
      }, 3000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F6F7F2] px-6">
      <div className="w-full max-w-lg rounded-[2rem] bg-[#020617] p-10 text-white shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A3E635]">
          Admin Access
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Span Admin Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <input
            required
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
            className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 outline-none"
          />

          <input
            required
            type="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                password:
                  e.target.value,
              })
            }
            className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 outline-none"
          />

          <button
            disabled={loading}
            className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#A3E635] text-lg font-bold text-[#0B132B]"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>
        </form>
      </div>
    </main>
  )
}
