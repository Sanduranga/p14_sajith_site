"use client";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export default function SignInPage() {
  return (
    <div className="wrapper max-w-[800px] mx-auto flex justify-center">
      <div className="flex flex-col items-center gap-3 p-5 shadow-lg rounded-md bg-slate-100 w-[300px] h-[400px] mt-28 mb-5 ">
        <h1 className="font-semibold text-black text-2xl">Sign in</h1>
        <button
          onClick={() => signIn("google")}
          className="flex gap-4 px-3 py-2 font-[500] rounded-full bg-gray-300 cursor-pointer"
        >
          <span className="text-2xl">
            <FcGoogle />
          </span>
          <h2>Sign in With Google</h2>
        </button>
      </div>
    </div>
  );
}
