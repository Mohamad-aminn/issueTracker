"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="p-6 bg-[#414558] flex justify-start items-center gap-4 ">
      {/* link for homepage */}
      <Link href={"/"} className="mx-2">
        <Image
          width={70}
          height={70}
          className="rounded-full"
          src={"/navbar/bug.jpg"}
        />
      </Link>

      <Link
        className={classNames("transition-all", {
          "text-info hover:text-info/70": path === "/register",
          "text-txt": path !== "/register",
        })}
        acti
        href={"/register"}
      >
        Sign up
      </Link>

      <Link
        className="hover:scale-105 transition-all text-txt"
        href={"/api/auth/signin"}
      >
        Login
      </Link>
    </div>
  );
};

export default Navbar;
