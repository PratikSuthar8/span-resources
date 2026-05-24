"use client"

import {
  MouseEvent,
  ReactNode,
  useRef,
} from "react"

type Props = {
  children: ReactNode
  className?: string
}

export function MagneticButton({
  children,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement>
  ) => {
    const element = ref.current

    if (!element) return

    const rect = element.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    element.style.transform = `
      translate(${x * 0.12}px, ${y * 0.12}px)
    `
  }

  const handleMouseLeave = () => {
    const element = ref.current

    if (!element) return

    element.style.transform = `
      translate(0px, 0px)
    `
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
