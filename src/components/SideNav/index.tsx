import React, { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  Items1Icon,
  Items2Icon,
  Items3Icon,
  Items4Icon,
  Items5Icon,
  Items6Icon,
  Items7Icon,
  Items8Icon,
  LogOutIcon,
} from "../icons";
import "./SideNav.scss";

interface CloseInterface {
  closeSideNav(): void;
}
const SideNav: FC<CloseInterface> = ({ closeSideNav }) => {
  return (
    <div className="sideNav">
      <ul>
        <p className="cancelSideNav" onClick={closeSideNav}>
          x
        </p>
        <NavLink to="/dashboard">
          <DashboardIcon /> Dashboard
        </NavLink>
        <NavLink to="/item-one">
          <Items1Icon /> Item 1
        </NavLink>
        <NavLink to="/item-two">
          <Items2Icon /> Item 2
        </NavLink>
        <NavLink to="/item-three">
          <Items3Icon /> Item 3
        </NavLink>
        <h6>Others 1</h6>
        <NavLink to="/item-four">
          <Items4Icon /> Item 4
        </NavLink>
        <NavLink to="/item-five">
          <Items5Icon />
          Item 5
        </NavLink>
        <h6>Others 2</h6>
        <NavLink to="/item-six">
          <Items6Icon /> Item 6
        </NavLink>
        <NavLink to="/item-seven">
          <Items7Icon /> Item 7
        </NavLink>
        <NavLink to="/item-eight">
          <Items8Icon />
          Item 8
        </NavLink>
        <h5 className="switch logout">
          <LogOutIcon /> Logout
        </h5>
      </ul>
    </div>
  );
};

export default SideNav;
