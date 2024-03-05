import React from "react";
import { Flex, Button } from "antd";
import IssueModal from "./IssueModal";
import IssueDetail from "./IssueDetail";
import prisma from "@/prisma/client";
import delay from "delay";
import { Issue } from "@prisma/client";

const Users = async () => {
  const issues: Issue[] = await prisma.issue.findMany();

  await delay(1000);

  return (
    <div className="w-full h-screen">
      <Flex vertical gap={"large"} className="p-8">
        {issues.map((issue: Issue, i: number) => (
          <Flex
            justify="space-between"
            gap={"large"}
            className="p-5 text-[#ccc] border border-[white]/50 rounded-md"
            key={i}
          >
            {/* issue detail */}
            <IssueDetail issue={issue} />

            {/* divider */}
            <div className=" w-[1px] bg-txt/10 "></div>

            {/* user info who submited issue */}
            <Flex className="w-80">
              <div></div>
            </Flex>

            {/* divider */}
            <div className=" w-[1px] bg-txt/10 "></div>

            {/* actions for issue */}
            <IssueModal issue={issue} />
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default Users;
