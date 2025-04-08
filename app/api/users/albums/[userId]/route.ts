


import connectDb from "@/app/lib/db_connect"
import Album from "@/app/models/Album"
import { NextResponse } from "next/server"

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function GET(  request: Request,{params}:any) {

    const  {userId} = await params

	console.log('USERID', userId)
	try {
		await connectDb()

		const albums = await Album.find({userId:Number(userId)}).select('id userId title').lean()

		return NextResponse.json(albums, { status: 200 })
	} catch (error) {
		console.error("GET /api/albums error:", error)
		return NextResponse.json({ error: "" }, { status: 500 })
	}
}

