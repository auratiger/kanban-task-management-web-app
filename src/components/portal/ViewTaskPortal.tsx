import Dropdown from "../Dropdown";

const dropdownItems = [
  {
    name: "TODO",
  },
  {
    name: "DOING",
  },
  {
    name: "DONE",
  },
];

const ViewTaskPortal = () => {
  return (
    <div className="flex w-[500px] flex-col gap-6">
      <span className="text-head-lg">
        Research pricing points of various competitors and trial different
        business models
      </span>

      <p>
        {
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition."
        }
      </p>

      {/* TODO:  */}
      <div>Subtasks component</div>

      <Dropdown
        items={dropdownItems}
        label="Current Status"
        filter
        placeholder="place this"
      />
    </div>
  );
};

export default ViewTaskPortal;
