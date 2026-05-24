"use client"

import { useState } from "react"

type Props = {
  onUploadComplete: (
    url: string
  ) => void
}

export function ResumeUpload({
  onUploadComplete,
}: Props) {
  const [uploading, setUploading] =
    useState(false)

  async function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const files =
      e.target.files

    if (!files?.length)
      return

    try {
      setUploading(true)

      const formData =
        new FormData()

      formData.append(
        "file",
        files[0]
      )

      const response =
        await fetch(
          "/api/upload-resume",
          {
            method: "POST",
            body: formData,
          }
        )

      const data =
        await response.json()

      onUploadComplete(
        data.url
      )
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <input
        type="file"
        accept=".pdf"
        onChange={handleChange}
        className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white"
      />

      {uploading && (
        <p className="mt-3 text-sm text-slate-400">
          Uploading resume...
        </p>
      )}
    </div>
  )
}
