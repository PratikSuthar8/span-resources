"use client"

import { cn } from "@/lib/utils"

type SpotlightProps = {
  className?: string
  fill?: string
}

export const Spotlight = ({
  className,
  fill = "white",
}: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-0 animate-pulse",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.999653 -0.0263408 -0.0263408 0.999653 3880.16 785.673)"
          fill={fill}
          fillOpacity="0.18"
        />
      </g>

      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          />
        </filter>
      </defs>
    </svg>
  )
}
