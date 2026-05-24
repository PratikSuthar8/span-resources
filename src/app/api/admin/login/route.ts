import { NextResponse } from "next/server"

import bcrypt from "bcryptjs"

import { connectDB } from "@/lib/mongodb"
import { signToken } from "@/lib/auth"

import { Admin } from "@/models/Admin"

export async function POST(
  req: Request
) {
  try {
    await connectDB()

    const {
      email,
      password,
    } = await req.json()

    const admin =
      await Admin.findOne({
        email,
      })

    if (!admin) {
      return NextResponse.json(
        {
          message:
            "Invalid credentials",
        },
        {
          status: 401,
        }
      )
    }

    const validPassword =
      await bcrypt.compare(
        password,
        admin.password
      )

    if (!validPassword) {
      return NextResponse.json(
        {
          message:
            "Invalid credentials",
        },
        {
          status: 401,
        }
      )
    }

    const token = signToken({
      adminId:
        admin._id.toString(),
    })

    const response =
      NextResponse.json({
        success: true,
      })

    response.cookies.set(
      "admin-token",
      token,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
      }
    )

    return response
  } catch {
    return NextResponse.json(
      {
        message:
          "Login failed",
      },
      {
        status: 500,
      }
    )
  }
}
