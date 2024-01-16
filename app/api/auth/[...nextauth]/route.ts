import connectMongoDB from "@/libs/mongodb";
import userModel from "@/models/usersModel";
import nextAuth, { Account, AuthOptions, User as AuthUser } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

export const authOption: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: AuthUser | AdapterUser;
      account: Account | null;
    }) {
      const { name, email, image } = user;
      await connectMongoDB();
      const existUser = await userModel.findOne({ userEmail: email });
      if (account?.provider === "google") {
        try {
          if (!existUser) {
            const res = await fetch(
              `${process.env.NEXTAUTH_URL}/api/wood_hub?category=users`,
              {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  userName: name,
                  userEmail: email,
                  userImage: image,
                }),
              }
            );
            if (res.ok) {
              return true;
            }
          }
        } catch (error) {
          console.log("AuthError*********************", error);
        }
      }
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = nextAuth(authOption);

export { handler as GET, handler as POST };
