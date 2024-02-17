import React from "react";
import { Flex, Button } from "antd";

interface Issue {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const Users = async () => {
  const res = await fetch("http://localhost:3000/api/issue", {
    cache: "reload",
  });
  const issues = await res.json();

  return (
    <Flex vertical gap={"large"} className="p-8">
      {issues.map((issue: Issue, i: number) => (
        <Flex
          justify="space-between"
          gap={"large"}
          className="p-5 text-[#ccc] border border-[white]/50 rounded-md"
          key={i}
        >
          {/* issue detail */}
          <div className="w-[53ch]">
            <Flex justify="space-between">
              <div className="font-bold text-2xl mb-3">{issue.title}</div>
              <div className="text-xs text-[#aab]">
                {issue.createdAt.substring(0, 19)}
              </div>
              <div className="text-xs text-[#aab]">
                {issue.updatedAt.substring(0, 19)}
              </div>
            </Flex>
            {/* description */}
            <div>{issue.description}</div>
          </div>

          {/* divider */}
          <div className=" w-[1px] bg-txt/10 "></div>

          {/* user info who submited issue */}
          <Flex className="w-80">
            <div></div>
          </Flex>

          {/* divider */}
          <div className=" w-[1px] bg-txt/10 "></div>

          {/* actions for issue */}
          <Flex
            className="mx-auto"
            vertical
            justify="center"
            align="center"
            gap={10}
          >
            <Flex justify="center" align="center" gap={"small"}>
              <button type="button" className="btn btn-info">
                more info
              </button>
              <button type="button" className="btn btn-error">
                report
              </button>
            </Flex>

            <button type="button" className="w-full btn btn-success">
              ACCEPT
            </button>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default Users;
