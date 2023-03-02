'use client';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme-switcher";

export default function LoginButton() {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
      return (
        <>
        <div className="flex flex-row gap-2 my-auto mx-auto">
        <div className="mx-auto my-auto">
          <button className="text-black bg-white px-4 rounded-md mx-3 my-auto hover:scale-[1.01]" onClick={() => signOut()}>Sign out</button>
          </div>
          <Link href="/Profile">
          <div className="rounded-full max-w-[35px] relative overflow-hidden hover:scale-105">
          <Image src={session.user.image} 
          className="inline-block"
          alt="profile photo"
            width={500}
            height={500}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}>

                  </Image></div></Link><ThemeToggle/></div>
        </>
      )
    }
    return (
      <>
      <div className="mx-auto max-w-md">
        Not signed in <br />
        <button className="text-black bg-white px-4  rounded-md my-auto" onClick={() => signIn()}>Sign in</button>
        </div>
      </>
    )
  };
  