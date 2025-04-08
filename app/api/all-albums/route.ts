import connectDb from "@/app/lib/db_connect"
import Album from "@/app/models/Album"
import { NextResponse } from "next/server"

export async function GET() {
	try {
		await connectDb()

		const albums = await Album.find({}).select('id userId title').lean()

		return NextResponse.json(albums, { status: 200 })
	} catch (error) {
		console.error("GET /api/albums error:", error)
		return NextResponse.json({ error: "" }, { status: 500 })
	}
}