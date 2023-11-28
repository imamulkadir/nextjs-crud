import React from "react";
import { IoMdTrash } from "react-icons/io";

const RemoveBtn = () => {
  return (
    <button className="text-red-400">
      <IoMdTrash size={28} />
    </button>
  );
};

export default RemoveBtn;
