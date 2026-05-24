"use client"

import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Jobs", href: "/jobs" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Workflow", href: "#" },
  { name: "Trust", href: "#" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenu])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container-wrapper pt-5">
          <div
            className={`flex items-center justify-between rounded-2xl border px-6 transition-all duration-500 ${
              scrolled
                ? "border-white/60 bg-white/85 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
                : "border-white/40 bg-white/70 backdrop-blur-xl"
            } ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            <Link
              href="/"
              className="flex items-center gap-4"
            >
              <Image
                src="/assets/logo.png"
                alt="Span Resources"
                width={70}
                height={70}
                priority
                style={{
                  width: "auto",
                  height: scrolled ? "2.7rem" : "3.2rem",
                }}
                className="transition-all duration-500"
              />

              <div className="hidden sm:block">
                <h3 className="text-sm font-black tracking-[0.15em] text-[#0B132B]">
                  SPAN RESOURCES
                </h3>

                <p className="text-xs text-slate-500">
                  Workforce Infrastructure
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-10 lg:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-[#0B132B]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <button className="rounded-full bg-[#0B132B] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105">
                Hire Workforce
              </button>
            </div>

            <button
              onClick={() => setMobileMenu(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#0B132B] lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileMenu(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed right-0 top-0 z-[70] flex h-screen w-[88%] max-w-sm flex-col border-l border-white/10 bg-[#020617] p-8 text-white shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black">
                  MENU
                </h2>

                <button
                  onClick={() => setMobileMenu(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-16 flex flex-col gap-8">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenu(false)}
                      className="text-3xl font-black tracking-[-0.04em] text-white"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <button className="w-full rounded-full bg-[#A3E635] px-6 py-4 text-base font-bold text-[#0B132B] transition-transform duration-300 hover:scale-[1.02]">
                  Hire Workforce
                </button>

                <p className="mt-8 text-sm leading-relaxed text-slate-400">
                  Enterprise workforce infrastructure for modern industrial operations.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
