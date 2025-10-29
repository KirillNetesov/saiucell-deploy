import "./Header.css";
import Nav from "../nav/Nav";
import { IoLogoXing } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <span className="logo">Кирилл Нетёсов</span>
          <Nav isMenuOpen={isMenuOpen} />
          <div className="nav-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <IoLogoXing /> : <FaBarsStaggered />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
