import Button, { Style } from "../Button/Button";
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

const BoardPortal = () => {
  return (
    <div className="flex w-[500px] flex-col gap-6">
      <span className="text-head-lg">Add New Board</span>

      <Input placeholder="e.g Web Design" label="Name" />

      <GroupedInput label="Columns" items={items} />
      <Button text="+ Add New Column" expand btnStyle={Style.SECONDARY} />

      <Button text="Create New Board" expand />
    </div>
  );
};

export default BoardPortal;
