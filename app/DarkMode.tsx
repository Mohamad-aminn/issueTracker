"use client";
import { ConfigProvider, theme } from "antd";
import React, { ReactNode } from "react";

const DarkMode = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: { Modal: { contentBg: "#1F2544", headerBg: "#1F2544" } },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default DarkMode;
