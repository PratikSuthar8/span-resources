import { NextResponse } from "next/server"

import { connectDB } from "@/lib/mongodb"
import { Job } from "@/models/Job"

export async function GET() {
  try {
    await connectDB()

    const jobs = await Job.find({
      isActive: true,
    }).sort({
      createdAt: -1,
    })

    return NextResponse.json(jobs)
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch jobs",
      },
      {
        status: 500,
      }
    )
  }
}

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const job = await Job.create(body)

    return NextResponse.json(job)
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create job",
      },
      {
        status: 500,
      }
    )
  }
}
