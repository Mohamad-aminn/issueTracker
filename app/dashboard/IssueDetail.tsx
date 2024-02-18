import React from "react";
import { Issue } from "./Issues";
import { Flex } from "antd";

const IssueDetail = ({ issue }: { issue: Issue }) => {
  return (
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
  );
};

export default IssueDetail;
