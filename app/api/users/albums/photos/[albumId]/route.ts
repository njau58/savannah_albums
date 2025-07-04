import connectDb from "@/app/lib/db_connect"
import Photo from "@/app/models/Photo"
import { NextResponse } from "next/server"
/* eslint-disable @typescript-eslint/no-explicit-any */

export async function GET(
	request: Request,
	{ params }: any
) {
	const { albumId } = await params

	try {
		await connectDb()

		const albums = await Photo.find({ albumId: Number(albumId) })
			.select("id albumId url title")
			.lean()

		return NextResponse.json(albums, { status: 200 })
	} catch (error) {
		console.error("GET /api/photos error:", error)
		return NextResponse.json({ error: "" }, { status: 500 })
	}
}
