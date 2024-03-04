import React from "react";
import { Issue } from "./Issues";
import { Flex } from "antd";
import IssueDescription from "./components/IssueDescription";

const IssueDetail = ({ issue }: { issue: Issue }) => {
  console.log(issue);
  return (
    <div className="w-[53ch]">
      <Flex justify="space-between">
        <div className="font-bold text-2xl mb-3">{issue.title}</div>
        <div className="text-xs text-[#aab]">
          {issue.createdAt.toLocaleDateString()}
        </div>
        <div className="text-xs text-[#aab]">
          {issue.updatedAt.toLocaleDateString()}
        </div>
      </Flex>
      {/* description */}
      <IssueDescription>{issue.description}</IssueDescription>
    </div>
  );
};

export default IssueDetail;
