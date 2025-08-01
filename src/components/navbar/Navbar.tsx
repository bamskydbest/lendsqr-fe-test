// src/components/navbar/Navbar.tsx
import { FaRegBell, FaSearch } from "react-icons/fa";
import avatar from "../../assets/avatar.svg";
import logo from "../../assets/Group.svg";
import "./Navbar.scss";
import { IoMdArrowDropdown } from "react-icons/io";

// ✅ Define props
type NavbarProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

// ✅ Use props in the function
export const Navbar: React.FC<NavbarProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <header className="navbar">
      <div className="left">
        <img src={logo} alt="Lendsqr" className="logo" />
      </div>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search for anything"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>

      <div className="right">
        <a href="#">Docs</a>
        <FaRegBell />
        <img src={avatar} alt="Avatar" />
        <span>Adedeji</span>
        <IoMdArrowDropdown />
      </div>
    </header>
  );
};
