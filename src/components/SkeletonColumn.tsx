import React from "react";

const SkeletonColumn = () => {
  return (
    <section className="flex h-full w-[300px] flex-col gap-8">
      <span
        className="text-head-md uppercase text-grey-medium text-transparent"
        aria-hidden={true}
      >
        template
      </span>

      <div className="column-gradiant hover:column-gradiant-hover grid flex-1 place-content-center rounded-lg">
        <span className="text-head-xl text-grey-medium">+ New Column</span>
      </div>
    </section>
  );
};

export default SkeletonColumn;
