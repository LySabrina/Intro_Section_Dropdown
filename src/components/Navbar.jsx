import { useState } from "react";
import "./Navbar.scss";
import NavItem from "./NavItem";

export default function Navbar() {
  
  const features = [
    {
      name: "Todo List",
      img: "/images/icon-todo.svg",
    },
    {
      name: "Calendar",
      img: "/images/icon-calendar.svg",
    },
    {
      name: "Reminders",
      img: "/images/icon-reminders.svg",
    },
    {
      name: "Planning",
      img: "/images/icon-planning.svg",
    },
  ];

  const company = [
    {
      name: "History",
      img: null,
    },
    {
      name: "Our Team",
      img: null,
    },
    {
      name: "Blog",
      img: null,
    },
  ];

  const [open, setOpen] = useState(false);
  const handleClickBurger = () => {
    setOpen((prevVal) => !prevVal);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="/images/logo.svg" alt="SNAP" />
      </a>

      {open && <div className="overlay" onClick={handleClickBurger}></div>}

      <div className={`nav__container ${open && "open"} `}>
        <nav className="navbar navbar--main">
          <ul className="navbar__list">
            <NavItem
              title="Features"
              items={features}
              className="list-item-mobile"
            />
            <NavItem
              title="Company"
              items={company}
              className="list-item-mobile"
            />
            <NavItem title="Careers" className="list-item-mobile" />
            <NavItem title="About" className="list-item-mobile" />
          </ul>
        </nav>

        <nav className="navbar navbar--credentials">
          <ul className="navbar__list">
            <NavItem title="Login" className="login list-item-mobile" />
            <NavItem title="Register" className="register list-item-mobile" />
          </ul>
        </nav>
      </div>

      <button className={`hamburger`} onClick={handleClickBurger}>
        <img
          src={open ? `/images/icon-close-menu.svg` : `/images/icon-menu.svg`}
          alt="menu"
        />
      </button>
    </header>
  );
}
