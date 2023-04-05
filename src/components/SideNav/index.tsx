import React, { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  DecisionIcon,
  GuarantorsIcon,
  KarmaIcon,
  LoansIcon,
  LoansRequestIcon,
  LogOutIcon,
  UsersIcon,
  WhitelistIcon,
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
          <UsersIcon /> Item 1
        </NavLink>
        <NavLink to="/item-two">
          <GuarantorsIcon /> Item 2
        </NavLink>
        <NavLink to="/item-three">
          <LoansIcon /> Item 3
        </NavLink>
        <h6>Others 1</h6>
        <NavLink to="/item-four">
          <DecisionIcon /> Item 4
        </NavLink>
        <NavLink to="/item-five">
          <LoansRequestIcon />
          Item 5
        </NavLink>
        <h6>Others 2</h6>
        <NavLink to="/item-six">
          <WhitelistIcon /> Item 6
        </NavLink>
        <NavLink to="/item-seven">
          <KarmaIcon /> Item 7
        </NavLink>
        <NavLink to="/item-eight">
          <LogOutIcon />
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
