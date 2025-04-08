import connectDb from "@/app/lib/db_connect";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET(
  { params }: { params: { user_id: string } }
) {

  const {user_id} = await params

  // console.log('USER_ID',params.user_id )
  try {
    await connectDb();
    const user = await User.findOne({id:Number(user_id)})
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
    console.error(`GET /api/users/[id] error:`, error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}