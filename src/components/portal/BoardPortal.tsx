import Button, { Style } from "../Button/Button";
import GroupedInput from "../Input/GroupedInput";
import Input from "../Input/Input";

const BoardPortal = () => {
  return (
    <div className="flex w-[500px] flex-col gap-6">
      <span className="text-head-lg">Add New Board</span>

      <Input placeholder="e.g Web Design" label="Name" />

      <GroupedInput
        form={{} as any}
        label="Columns"
        buttonLabel="+ Add New Column"
      />

      <Button text="Create New Board" expand />
    </div>
  );
};

export default BoardPortal;
