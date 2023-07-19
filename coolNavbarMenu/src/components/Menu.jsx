import React, { useState } from "react";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const menuItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div className="menu">
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            index={index}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          >
            {item}
          </MenuItem>
        ))}
      </div>
      <div
        className={`menu-background-pattern ${
          activeIndex !== null ? `active-${activeIndex}` : ""
        }`}
      ></div>
      <div
        className={`menu-background-image ${
          activeIndex !== null ? `active-${activeIndex}` : ""
        }`}
      ></div>
    </div>
  );
};
export default Menu;
