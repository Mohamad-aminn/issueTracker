"use client";
import { Button, Flex, Modal } from "antd";
import React, { useState } from "react";
import { Issue } from "./Issues";
import { useSession } from "next-auth/react";

const IssueModal = ({ issue }: { issue: Issue }) => {
  const { data } = useSession();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const showModal = () => {
    0;
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
  };
  const submitHanlder = () => {
    console.log("submited!");
  };

  return (
    <Flex className="mx-auto" vertical justify="center" align="center" gap={10}>
      <Flex justify="center" align="center" gap={"small"}>
        <button type="button" className="btn btn-info">
          more info
        </button>
        <button type="button" className="btn btn-error">
          report
        </button>
      </Flex>

      <button
        onClick={showModal}
        type="button"
        className="w-full btn btn-success"
      >
        ACCEPT
      </button>

      {/* modal */}
      <Modal
        open={modal}
        title={issue.title}
        onOk={submitHanlder}
        onCancel={handleCancel}
        footer={[
          <Button type="text" key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            className="bg-[#474F7A] "
            key="submit"
            type="default"
            loading={loading}
            onClick={submitHanlder}
          >
            Let's do this
          </Button>,
        ]}
      >
        <div>
          <p className="capitalize">
            are you sure you are capable to fix this issue developer?
          </p>
        </div>
      </Modal>
    </Flex>
  );
};

export default IssueModal;
