
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from "next-auth/providers/github"
import { getServerSession } from 'next-auth';






export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent", 
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
            GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),

      
  ],

  debug: process.env.NODE_ENV === 'development',
  logger: {
 

    error
    (code:any,   // eslint-disable-line @typescript-eslint/no-explicit-any
         
        metadata:any // eslint-disable-line @typescript-eslint/no-explicit-any
    ) {
      console.error(code, metadata)
    },
  },
  


  pages: {
    signIn: '/auth/signin',  
    error: '/auth/error',   
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export async function getSession() {
    return await getServerSession(authOptions);
  }



