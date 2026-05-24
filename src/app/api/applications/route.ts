import { NextResponse } from "next/server"

import { connectDB } from "@/lib/mongodb"

import { Application } from "@/models/Application"

export async function POST(
  req: Request
) {
  try {
    await connectDB()

    const body = await req.json()

    const application =
      await Application.create(body)

    return NextResponse.json(
      application
    )
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Failed to submit application",
      },
      {
        status: 500,
      }
    )
  }
}
