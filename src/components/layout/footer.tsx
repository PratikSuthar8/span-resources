import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617] pt-20 text-white">
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#A3E635]/10 blur-3xl" />

      <div className="container-wrapper relative z-10">
        <div className="grid gap-16 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/logo.png"
                alt="Span Resources"
                width={70}
                height={70}
                style={{ width: "auto", height: "4.5rem" }}
              />

              <div>
                <h3 className="text-2xl font-black">
                  SPAN RESOURCES
                </h3>

                <p className="mt-1 text-slate-400">
                  Workforce Infrastructure
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-slate-400">
              Enterprise workforce solutions for manufacturing,
              pharma, logistics, infrastructure, and industrial
              operations across Gujarat.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">
              Services
            </h4>

            <div className="mt-6 flex flex-col gap-4 text-slate-400">
              <Link href="#">Industrial Staffing</Link>
              <Link href="#">Payroll Management</Link>
              <Link href="#">Compliance Systems</Link>
              <Link href="#">Contract Workforce</Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">
              Industries
            </h4>

            <div className="mt-6 flex flex-col gap-4 text-slate-400">
              <Link href="#">Manufacturing</Link>
              <Link href="#">Pharmaceutical</Link>
              <Link href="#">Infrastructure</Link>
              <Link href="#">Logistics</Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">
              Contact
            </h4>

            <div className="mt-6 flex flex-col gap-4 text-slate-400">
              <p>Ahmedabad, Gujarat</p>
              <p>enterprise@spanresources.in</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 py-8 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 Span Resources. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Enterprise Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
