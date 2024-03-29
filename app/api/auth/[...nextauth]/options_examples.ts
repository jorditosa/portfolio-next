import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


export const options = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  providers: [
    GitHubProvider({
      profile(profile: any) {
        console.log("Profile Github: ", profile)

        const userRole = profile?.email === "jordisato88@gmail.com" ? "admin" : "Github User";

        return {
          ...profile,
          role: userRole
        }
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        const userRole = "Google User";

        return {
          ...profile,
          id: profile.sub,
          role: userRole
        }
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role
      return session
    }
  }
}

