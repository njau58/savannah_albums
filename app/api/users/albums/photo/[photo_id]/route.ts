import connectDb from "@/app/lib/db_connect"
import Photo from "@/app/models/Photo"
import { NextResponse } from "next/server"
/* eslint-disable @typescript-eslint/no-explicit-any */

export async function GET(
	request: Request,
	{ params }: any
) {
	const { photo_id } = await params

	try {
		await connectDb()

		const photo = await Photo.findOne({ id: Number(photo_id) })
			.select("id albumId url title")
			.lean()

		return NextResponse.json(photo, { status: 200 })
	} catch (error) {
		console.error("GET /api/albums/photo error:", error)
		return NextResponse.json({ error: "" }, { status: 500 })
	}
}
