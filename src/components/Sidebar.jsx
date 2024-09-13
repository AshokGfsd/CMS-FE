import { NavLink } from "react-router-dom";
import {
  RxDashboard,
  RxAvatar,
  RxTarget,
  RxIdCard
} from "react-icons/rx";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="navbar">
      <div>
        <NavLink className="links" to="/">
          <RxDashboard className="link__icons" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink className="links" to="/contacts">
          <RxIdCard className="link__icons" />
          <span>Contacts</span>
        </NavLink>
        <NavLink className="links" to="/user">
          <RxAvatar className="link__icons" />
          <span>User</span>
        </NavLink>
      </div>
      {/* <div class="navigation">
      <ul>
        <li class="list active">
          <a href="#">
            <span class="icon">A</span>
            <span class="text">Home</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon">A</span>
            <span class="text">Profile</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon">A</span>
            <span class="text">Mesaage</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon">A</span>
            <span class="text">Profile</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon">A</span>
            <span class="text">Mesaage</span>
          </a>
        </li>
        <div class="indicator"></div>
      </ul>
    </div> */}
    </nav>
  );
};
export default Sidebar;
