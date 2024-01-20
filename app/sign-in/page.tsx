import SignInPage from "@/components/SignInPage";

export default async function SignIn() {
  // const session = await getServerSession(authOption);
  // if (session) {
  //   redirect("/");
  // }

  return (
    <div>
      <SignInPage />
    </div>
  );
}
