import { writeFile } from "fs/promises"

import path from "path"

import { NextResponse } from "next/server"

export async function POST(
  req: Request
) {
  try {
    const data =
      await req.formData()

    const file =
      data.get("file") as File

    if (!file) {
      return NextResponse.json(
        {
          message:
            "No file uploaded",
        },
        {
          status: 400,
        }
      )
    }

    const bytes =
      await file.arrayBuffer()

    const buffer =
      Buffer.from(bytes)

    const filename = `${Date.now()}-${file.name}`

    const filepath = path.join(
      process.cwd(),
      "public/uploads",
      filename
    )

    await writeFile(
      filepath,
      buffer
    )

    return NextResponse.json({
      url: `/uploads/${filename}`,
    })
  } catch {
    return NextResponse.json(
      {
        message:
          "Upload failed",
      },
      {
        status: 500,
      }
    )
  }
}
