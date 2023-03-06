'use client';
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme-switcher";

export default function LoginButton() {
      return (
        <>
        <div className="flex flex-row gap-2 my-auto mx-auto">
        <div className="mx-auto my-auto">
          <button className="text-black bg-white px-4 rounded-md mx-3 my-auto hover:scale-[1.01]">Sign out</button>
          </div>
          <Link href="/Profile">
          <div className="rounded-full max-w-[35px] relative overflow-hidden hover:scale-105">
</div></Link><ThemeToggle/></div>
        </>
      )
  };
  