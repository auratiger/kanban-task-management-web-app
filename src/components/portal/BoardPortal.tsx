"use client";

import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import GroupedInput from "../Input/GroupedInput";
import Input from "../Input/Input";

const BoardPortal = (props: any) => {
  const form = useForm({
    shouldUseNativeValidation: true,
  });

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = form;

  const onSubmit = (data: any) => {
    console.log("Submitted form data:", data, isValid);
  };

  const { ref: nameRef, ...nameControl } = register("name", {
    required: true,
    maxLength: 30,
  });

  return (
    <form
      className="flex w-[500px] flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-head-lg">Add New Board</span>

      <Input
        innerRef={nameRef}
        placeholder="e.g Web Design"
        label="Name"
        {...nameControl}
      />

      <GroupedInput
        form={form}
        label="Columns"
        buttonLabel="+ Add New Column"
      />

      <Button type="submit" text="Create New Board" expand />
    </form>
  );
};

export default BoardPortal;
