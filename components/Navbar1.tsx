"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FaHouseUser } from "react-icons/fa";

const Navbar1 = () => {
  const routor = useRouter();
  const { status, data: Session } = useSession();
  const user = Session?.user?.name;
  const userName = user?.slice(0, 5);
  const userEmail = Session?.user?.email;
  const userImage = Session?.user?.image;

  // useEffect(() => {
  //   if (user) {
  //     console.log("if", user);
  //     const res = fetch("/api/wood_hub?category=users", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         user,
  //         userEmail,
  //         userImage,
  //       }),
  //     }).catch((err) => alert());
  //   }

  //   console.log("not if", user);
  // }, [user]);

  return (
    <nav className="flex items-center fixed w-full top-0 left-1/2 transform -translate-x-1/2 justify-between p-10 h-10 bg-themeCol z-40 text-white">
      <Link href="/">
        {/* <Image src={""} alt="logo" /> */}
        <div className="font-bold text-3xl">AyuboCeylon</div>
      </Link>
      <div className="flex gap-5 items-center">
        <Link href="">About us</Link>
        <div className="flex gap-1 items-center">
          <div>
            {status === "authenticated" ? (
              <button onClick={() => signOut()}>{userName}..</button>
            ) : (
              <Link href={"/sign-in"}>Sign in</Link>
            )}
          </div>
          <div className="size-8 rounded-full">
            {userImage ? (
              <Image
                src={userImage}
                alt="user_img"
                width={36}
                height={36}
                className="rounded-full border-2 border-white"
              />
            ) : (
              <span className="text-2xl">
                <FaHouseUser />
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
