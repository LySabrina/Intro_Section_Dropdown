import { useState } from "react";

export default function NavItem({ items, title, className }) {
  const [open, setOpen] = useState(false);
  const handleClickArrow = () => {
    setOpen((prevVal) => !prevVal);
  };

  const handleOnMouseEnter = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  const handleOnMouseLeave = () => {
    setOpen(false);
  };

  return (
    <li
      className={`navbar__list__item  ${className ? className : ""}`}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <span onClick={handleClickArrow}>{title}</span>

      {items && (
        <span className="arrow">
          <button onClick={handleClickArrow}>
            <img
              src={
                open
                  ? "/Intro_Section_Dropdown/images/icon-arrow-up.svg"
                  : "/Intro_Section_Dropdown/images/icon-arrow-down.svg"
              }
              alt="arrow"
            />
          </button>
        </span>
      )}

      {items && open && (
        <ul className="navbar__sublist" onMouseEnter={handleOnMouseEnter}>
          {items.map((element) => (
            <li
              key={element.name}
              className="navbar__list__item navbar__sublist__item"
            >
              {element.img && (
                <img
                  src={element.img}
                  alt={element.name + "_img"}
                  className="navbar__sublist__icon"
                />
              )}
              <span>{element.name}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
