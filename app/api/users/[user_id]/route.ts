import connectDb from "@/app/lib/db_connect";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

type RequestProps = Promise<{ user_id: string } >

export async function GET(
  request: Request,
  { params }: { params: { user_id: RequestProps } }
) {


  const {user_id} = await params
  try {
    await connectDb();
    console.log('Database connection established..')
    const user = await User.findOne({ id: Number(user_id) }) 
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

