import { NextResponse } from "next/server"

import { connectDB } from "@/lib/mongodb"

import { Lead } from "@/models/Lead"
import { Job } from "@/models/Job"
import { Application } from "@/models/Application"

export async function GET() {
  try {
    await connectDB()

    const totalLeads =
      await Lead.countDocuments()

    const totalJobs =
      await Job.countDocuments()

    const totalApplications =
      await Application.countDocuments()

    return NextResponse.json({
      totalLeads,
      totalJobs,
      totalApplications,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        totalLeads: 0,
        totalJobs: 0,
        totalApplications: 0,
      },
      {
        status: 500,
      }
    )
  }
}
