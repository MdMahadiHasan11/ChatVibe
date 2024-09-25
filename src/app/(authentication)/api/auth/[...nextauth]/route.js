import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // check email or password ture
        if (!email || !password) {
          return null;
        }

        // database collaction
        const db = await connectDB();
        // check already user have
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          throw new Error("No user found with the email");
        }

        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );

        if (!passwordMatched) {
          console.log(passwordMatched);
          throw new Error("Invalid password");
        }
        console.log(passwordMatched);
        return { currentUser };
      },
    }),
  ],
  callbacks: {},
  pages: "/login",
});

export { handler as GET, handler as POST };
