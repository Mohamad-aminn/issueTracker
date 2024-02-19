"use client";
import { Flex, Spin } from "antd";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";

const SIdebarProfile = () => {
  const { data, status } = useSession();
  return (
    <Flex vertical justify="center" align="center" gap={15}>
      {status === "loading" ? (
        <Spin size="large" spinning />
      ) : (
        <>
          {data?.user?.image && (
            <Image
              className="rounded-full"
              alt="user profile picture"
              width={100}
              height={100}
              src={data.user.image}
            />
          )}
          <ReactTyped
            showCursor={false}
            startWhenVisible
            className="text-txt font-semibold tracking-wide text-xl"
            strings={[data?.user?.name ?? "sorry did not found your name"]}
            typeSpeed={40}
          />
        </>
      )}
    </Flex>
  );
};

export default SIdebarProfile;
