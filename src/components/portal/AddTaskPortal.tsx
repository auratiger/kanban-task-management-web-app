import Button, { Style } from "../Button/Button";
import Dropdown from "../Dropdown";
import Input, { GroupedInput, InputProps } from "../Input/Input";

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
  return (
    <div className="flex w-[500px] flex-col gap-6">
      <span className="text-head-lg">Add New Task</span>

      <Input placeholder="e.g Take coffee break" label="Title" />
      <Input
        placeholder="e.g It's always good to take a break. This 15 minute break will recharge the batteries a little."
        type="textarea"
        label="Description"
        rows={5}
      />

      <GroupedInput label="Subtasks" items={items} />
      <Button text="+ Add New Subtask" expand btnStyle={Style.SECONDARY} />

      <Dropdown
        items={dropdownItems}
        label="Current Status"
        filter
        placeholder="place this"
      />

      <Button text="Save Changes" expand />
    </div>
  );
};

export default AddTaskPortal;
