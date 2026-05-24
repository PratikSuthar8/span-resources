import { NextResponse } from "next/server"

import { connectDB } from "@/lib/mongodb"
import { Lead } from "@/models/Lead"

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const {
      fullName,
      companyName,
      email,
      phone,
      message,
    } = body

    if (!fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields missing",
        },
        {
          status: 400,
        }
      )
    }

    const lead = await Lead.create({
      fullName,
      companyName,
      email,
      phone,
      message,
    })

    return NextResponse.json({
      success: true,
      lead,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    )
  }
}
