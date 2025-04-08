import { type NextRequest } from 'next/server';
import connectDb from "@/app/lib/db_connect";
import User from "@/app/models/User";

export async function GET(
  request: NextRequest,
  context: { params: { user_id: string } }
) {
  try {
    const { params } = context;
    
    const userId = Number(params.user_id);
  

    await connectDb();
    const user = await User.findOne({ id: userId })
      .select("id name username email")
      .lean();

    if (!user) {
      return new Response(
        JSON.stringify({ error: "User not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify(user),
      { status: 200 }
    );
  } catch (error) {
    console.error(`GET /api/users/[user_id] error:`, error);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}