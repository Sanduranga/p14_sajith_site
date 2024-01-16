import SignInPage from "@/components/SignInPage";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerSession(authOption);
  if (session) {
    redirect("/");
  }

  return (
    <div>
      <SignInPage />
    </div>
  );
}
