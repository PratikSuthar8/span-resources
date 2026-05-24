import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { SmoothScroll } from "@/components/animations/smooth-scroll"

const geist = Geist({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Span Resources",
  description:
    "Enterprise workforce solutions, staffing, payroll, and compliance management.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <SmoothScroll>{children}</SmoothScroll>
              <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
