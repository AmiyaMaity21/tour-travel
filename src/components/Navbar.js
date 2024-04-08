import { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import RegisterForm from "../components/RegisterForm";
function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClicked = () => {
    setIsToggle(!isToggle);
  };

  const openRegisterForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trip4U</h1>
      <div className="menu-icons">
        <div onClick={handleClicked}>
          {isToggle ? <FaRegWindowClose /> : <FaBars />}
        </div>
      </div>
      <ul className={isToggle ? "navbar-menu active" : "navbar-menu"}>
        {MenuItems.map((item, i) => {
          return (
            <li key={i}>
              <Link className={item.cName} to={item.url}>
                <i>{item.icon}</i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button onClick={openRegisterForm}>Sign Up</button>
        {isOpen && <RegisterForm />}
      </ul>
    </nav>
  );
}

export default Navbar;
