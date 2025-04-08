import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/app/lib/db_connect";
import User from "@/app/models/User";

export async function GET(
  request: NextRequest,
  { params }: { params: { user_id: string } }
) {
  try {
   

    await connectDb();
    const user = await User.findOne({ id: Number(params.user_id) })
      .select("id name username email")
      .lean();

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error(`GET /api/users/[user_id] error:`, error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}