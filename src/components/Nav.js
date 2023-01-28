import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <FaHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}
