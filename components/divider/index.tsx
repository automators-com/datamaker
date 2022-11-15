import React from "react";

const Divider = () => {
  return (
    <div className="relative my-6 pb-10">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-base-200 border-opacity-50" />
      </div>
    </div>
  );
};

export default Divider;
