import MenuList from "./MenuList";
import "./style.css";

const NavMenu = ({ menus = [] }) => {
  return (
    <div className="nav-menu-container">
      <MenuList list={menus} />
    </div>
  );
};

export default NavMenu;
