import { Flex } from "antd";
import React from "react";

const loading = () => {
  return (
    <div className="w-full ">
      <Flex vertical gap={"large"} className="p-8">
        {[1, 2, 3, 4].map((number) => (
          <Flex
            key={number}
            justify="space-between"
            gap={"large"}
            className="p-5 text-[#ccc] border border-[white]/50 rounded-md"
          >
            {/* section 1 */}
            <Flex vertical gap={"large"} className="w-[53ch]">
              <div className="skeleton w-44 h-8"></div>
              <div className="skeleton w-full h-4"></div>
              <div className="skeleton w-full h-4"></div>
              <div className="skeleton w-full h-4"></div>
              <div className="skeleton w-full h-4"></div>
            </Flex>
            {/* divider */}
            <div className=" w-[1px] bg-txt/10 "></div>
            {/* section 2 */}
            <Flex
              vertical
              gap={"large"}
              justify="center"
              align="center"
              className="w-80"
            >
              <div className="skeleton w-16 h-16 rounded-full"></div>
              <div className="skeleton w-full h-3"></div>
              <div className="skeleton w-full h-3"></div>
              <div className="skeleton w-full h-3"></div>
            </Flex>
            {/* divider */}
            <div className=" w-[1px] bg-txt/10 "></div>
            {/* section 3 */}
            <Flex
              className="mx-auto"
              vertical
              justify="center"
              align="center"
              gap={10}
            >
              <Flex justify="center" align="center" gap={"small"}>
                <div className="skeleton w-24 h-11 rounded-lg"></div>
                <div className="skeleton w-24 h-11 rounded-lg"></div>
              </Flex>
              <div className="skeleton w-48 h-12 rounded-lg"></div>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default loading;
