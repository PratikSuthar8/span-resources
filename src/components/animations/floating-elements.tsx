"use client"

import { ReactNode, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

type Props = {
  children: ReactNode
  y?: number
  duration?: number
  delay?: number
  className?: string
}

export function FloatingElements({
  children,
  y = 20,
  duration = 3,
  delay = 0,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(ref.current, {
      y,
      duration,
      delay,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
