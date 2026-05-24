"use client"

import {
  ReactNode,
  useRef,
} from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

type Props = {
  children: ReactNode
  className?: string
}

export function ParallaxImage({
  children,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  })

  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  )
}
