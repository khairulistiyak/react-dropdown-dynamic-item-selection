import React, { useState } from "react";

const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState("Items");
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown dropdown-bottom">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-slate-700 text-white uppercase mt-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? selectedItem : "Items"}
      </div>
      {isOpen ? (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={() => handleItemClick("Item 1")}>Item 1</a>
          </li>
          <li>
            <a onClick={() => handleItemClick("Item 2")}>Item 2</a>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
