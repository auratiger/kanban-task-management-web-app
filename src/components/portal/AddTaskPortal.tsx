import Button, { Style } from "../Button/Button";
import Dropdown from "../Dropdown";
import Input, { GroupedInput, InputProps } from "../Input/Input";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const items: Array<InputProps> = [
  {
    placeholder: "e.g Take coffee break",
    onRemove: () => {},
  },
  {
    placeholder: "e.g Take coffee break",
    onRemove: () => {},
  },
];

const dropdownItems = [
  {
    name: "hehellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellollohellohellohellohellohellohellohellohellohellohello",
  },
  {
    name: "hello1",
  },
  {
    name: "hello2",
  },
  {
    name: "hello3",
  },
  {
    name: "hello",
  },
  {
    name: "hello1",
  },
  {
    name: "hello2",
  },
  {
    name: "hello3",
  },
  {
    name: "hello",
  },
  {
    name: "hello1",
  },
  {
    name: "hello2",
  },
  {
    name: "hello3",
  },
];

const AddTaskPortal = () => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    shouldUseNativeValidation: true,
  });

  const onSubmit = (data) => {
    console.log("Submitted form data:", data);
  };

  const { ref: titleRef, ...titleControl } = register("title", {
    required: false,
    maxLength: 30,
  });

  const { ref: descriptionRef, ...descriptionControl } =
    register("description");

  const { ref: statusRef } = register("status");

  return (
    <form
      className="flex w-[500px] flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-head-lg">Add New Task</span>

      <Input
        innerRef={titleRef}
        placeholder="e.g Take coffee break"
        label="Title"
        {...titleControl}
      />
      <Input
        innerRef={descriptionRef}
        placeholder="e.g It's always good to take a break. This 15 minute break will recharge the batteries a little."
        type="textarea"
        label="Description"
        rows={5}
        {...descriptionControl}
      />

      <GroupedInput label="Subtasks" items={items} />
      <Button text="+ Add New Subtask" expand btnStyle={Style.SECONDARY} />

      <Dropdown
        innerRef={statusRef}
        items={dropdownItems}
        label="Current Status"
        placeholder="place this"
        onSelection={(state) => setValue("status", state)}
      />

      <Button type="submit" text="Save Changes" expand />
    </form>
  );
};

export default AddTaskPortal;
