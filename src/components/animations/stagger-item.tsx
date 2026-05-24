"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

export function StaggerItem({
  children,
  className,
}: Props) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
