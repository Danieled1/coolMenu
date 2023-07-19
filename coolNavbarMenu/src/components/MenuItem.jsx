import React from "react";
import "../styles/Menu.css"; // assuming that CSS for each item is saved in MenuItem.css

const MenuItem = ({ index, setActiveIndex, activeIndex, children }) => (
  // In your MenuItem component
  <div
    className="menu-item"
    onMouseOver={() => setActiveIndex(index)}
    style={{
      backgroundPosition: `${activeIndex === index ? index * -25 : 0}% 0`,
    }}
  >
    {children}
  </div>
);
export default MenuItem;
