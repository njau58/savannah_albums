import { NextResponse } from 'next/server';
import connectDb from './app/lib/db_connect';

export { default } from 'next-auth/middleware'

export async function middleware() {
  try {
    await connectDb();

    console.log('db connected successfully...')
    return NextResponse.next();
  } catch (error) {

    if(error instanceof Error){
      return NextResponse.json(
        { error:error.message },
        { status: 500 }
      );
    }
    else{
      return NextResponse.json(
        { error: "Database connection failed" },
       
      );
    }


   
  }
}

export const config = {
  matcher: ['/dashboard/:path*','/users/:path*'] 
}