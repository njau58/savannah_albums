import connectDb from "@/app/lib/db_connect"
import Photo from "@/app/models/Photo"
import { NextResponse } from "next/server"

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function PATCH(request: Request, { params }: any) {
	const { photo_id } = await params


	console.log('PATCH ID', photo_id)

	try {
		const { newTitle } = await request.json()
		
	console.log('PATCH NEW TITLE', newTitle)

		if (!newTitle || typeof newTitle !== "string") {
			return NextResponse.json(
				{ error: "Newtitle is required and must be a string." },
				{ status: 400 }
			)
		}

		await connectDb()

		const response = await Photo.findOneAndUpdate(
			{ id: +photo_id },
			{ title: newTitle }
		)
			.select("title")
			.lean()

		return NextResponse.json(response, { status: 200 })
	} catch (error) {
		console.error("PATCH /api/albums/photo/update error:", error)

		return NextResponse.json({ error: "Error patching photo" }, { status: 500 })
	}
}
