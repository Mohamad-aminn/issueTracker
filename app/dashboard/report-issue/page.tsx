"use client";
import { Button, Flex, Input } from "antd";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import { zodResolver } from "@hookform/resolvers/zod";
import { addIssueSchema } from "@/app/validation/addIssueSchema";
import "easymde/dist/easymde.min.css";

interface Issue {
  id: string;
  title: string;
  description: string;
}

const page = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<Issue>({ resolver: zodResolver(addIssueSchema) });

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      className="mt-[23vh] overflow-auto"
    >
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="flex gap-5 flex-col w-[500px]"
      >
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input {...field} placeholder="Title" size="large" />
          )}
        />
        {errors.title && <p>{errors.title.message}</p>}
        <Controller
          rules={{ required: true }}
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Enter the Description" {...field} />
          )}
        />
        <Button htmlType="submit">ADD ISSUE</Button>
      </form>
    </Flex>
  );
};

export default page;
