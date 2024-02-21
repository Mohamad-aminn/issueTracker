import { Button, Flex, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import Particle from "../particle/Particle";

const page = () => {
  return (
    <Flex vertical justify="center" align="center" className="h-screen">
      <form className="flex gap-5 flex-col w-96">
        <Input placeholder="title" size="large" />
        <TextArea rows={4} placeholder="description" />
        <Button>Add Issue</Button>
      </form>
    </Flex>
  );
};

export default page;
