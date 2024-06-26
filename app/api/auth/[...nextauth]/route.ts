import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "johnsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const user = { id: "1", user: "John", email: "John@example.com" };
        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
