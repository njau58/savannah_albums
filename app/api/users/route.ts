import connectDb from "@/app/lib/db_connect"
import User from "@/app/models/User"
import { NextResponse } from "next/server"

export async function GET() {
	try {
		await connectDb()
		const users = await User.find({}).select("id name username email").lean()

		return NextResponse.json(users, { status: 200 })
	} catch (error) {
		console.error("GET /api/users error:", error)
		return NextResponse.json(
			{ error: "Failed to fetch users" },
			{ status: 500 }
		)
	}
}






