"use client";
import { Button, Flex, Input } from "antd";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import { zodResolver } from "@hookform/resolvers/zod";
import { addIssueSchema } from "@/app/validation/addIssueSchema";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import ErrorMessage from "@/app/ErrorMessage";
import { useRouter } from "next/navigation";
import { z } from "zod";

type Issue = z.infer<typeof addIssueSchema>;

const page = () => {
  const router = useRouter();
  // react-hook-form to handel the data
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<Issue>({ resolver: zodResolver(addIssueSchema) });

  // states
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // function to POST to data
  const submitHandler = async (issue: Issue) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/issue/add",
        issue
      );
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      // setError(error);
    }
  };

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      className="mt-[23vh] overflow-auto"
    >
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex gap-5 flex-col w-[500px]"
      >
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input {...field} placeholder="Title" size="large" />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Controller
          rules={{ required: true }}
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Enter the Description" {...field} />
          )}
        />
        <Button loading={loading} htmlType="submit">
          ADD ISSUE
        </Button>
      </form>
    </Flex>
  );
};

export default page;
