"use client";
import React, { PropsWithChildren } from "react";
import Markdown from "react-markdown";
import ShowMoreText from "react-show-more-text";

const IssueDescription = ({ children }: { children: string }) => {
  return (
    <ShowMoreText
      lines={4}
      anchorClass="font-bold text-[white]/30 "
      more="Show more"
      less="Show less"
      expanded={false}
    >
      <Markdown className={"porse"}>{children}</Markdown>
    </ShowMoreText>
  );
};

export default IssueDescription;
