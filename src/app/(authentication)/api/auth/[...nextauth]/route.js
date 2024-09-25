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
        const { email, password } = credentials.data;
        // check email or password ture
        if (!email || !password) {
          return Response.json(
            { message: "email or password not match" },
            { status: 401 }
          );
        }

        // database collaction
        const db = await connectDB();
        // check already user have
        const currentUser = db.collection("users").findOne({ email });

        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );

        if (!passwordMatched) {
          return Response.json(
            { message: "email or password not match" },
            { status: 401 }
          );
        }

        return currentUser;
      },
    }),
  ],
  callbacks: {},
  pages: "/login",
});

export { handler as GET, handler as POST };
