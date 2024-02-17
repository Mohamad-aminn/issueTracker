"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Spin, Flex, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Navbar = () => {
  const path = usePathname();
  const { data, status } = useSession();

  return (
    <div className="p-6 px-20 bg-[#414558] flex justify-between items-center gap-4 ">
      {status === "loading" ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      ) : (
        <>
          <div className="flex gap-6 items-center">
            {/* link for homepage */}
            <Link href={"/"} className="mx-2">
              <Image
                width={70}
                height={70}
                className="rounded-full"
                src={"/navbar/bug.jpg"}
              />
            </Link>

            {status === "authenticated" ? (
              <Link href={"/dashboard"}>
                <Flex gap={10} justify="center" align="center">
                  <Image
                    className="rounded-full"
                    width={40}
                    height={40}
                    src={data.user.image}
                  />
                  <div>{data.user.name}</div>
                </Flex>
              </Link>
            ) : (
              <Link
                className={classNames("transition-all", {
                  "text-info hover:text-info/70": path === "/register",
                  "text-txt": path !== "/register",
                })}
                href={"/register"}
              >
                Sign up
              </Link>
            )}
          </div>
          <Link
            className={`${
              status === "authenticated" && "hidden"
            } transition-all text-txt`}
            href={"/api/auth/signin"}
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
