import connectDb from "@/app/lib/db_connect"
import Album from "@/app/models/Album"
import { NextResponse } from "next/server"
/* eslint-disable @typescript-eslint/no-explicit-any */

export async function GET(
    request: Request,
    { params }: any
) {
    const { album_id } = await params

    try {
        await connectDb()

        const albums = await Album.findOne({ albumId: Number(album_id) })
            .select("id userId title")
            .lean()

        return NextResponse.json(albums, { status: 200 })
    } catch (error) {
        console.error("GET /api/users/albums/photo/ error:", error)
        return NextResponse.json({ error: "" }, { status: 500 })
    }
}
