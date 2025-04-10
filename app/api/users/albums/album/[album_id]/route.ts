import connectDb from "@/app/lib/db_connect"
import Album from "@/app/models/Album"
import { NextResponse } from "next/server"
/* eslint-disable @typescript-eslint/no-explicit-any */

export async function GET(
    request: Request,
    { params }: any
) {
    const { album_id } = await params

    // console.log('AlbumID>>>', album_id)

    try {
        await connectDb()

        const album = await Album.findOne({ id: Number(album_id) })
            .select("id userId title")
            .lean()

            console.log('Result', album)

        return NextResponse.json(album, { status: 200 })
    } catch (error) {
        console.error("GET /api/users/albums/photo/ error:", error)
        return NextResponse.json({ error: "" }, { status: 500 })
    }
}
