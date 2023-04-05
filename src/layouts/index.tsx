import React, { useState } from "react";
import Header from "../components/Header";
import { MenuIcon } from "../components/icons";
import SideNav from "../components/SideNav";

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = (props: LayoutProps) => {
  const [issSideBar, setissSideBar] = useState(false);
  return (
    <div>
      <Header />
      <button
        type="button"
        className="openSideNavBtn"
        onClick={() => setissSideBar(!issSideBar)}
      >
        <MenuIcon />
      </button>
      <div className="layout">
        <div className={`sideNavWrap ${issSideBar && "openSideNav"}`}>
          <SideNav closeSideNav={() => setissSideBar(false)} />
        </div>

        <div className="contentsSection">{props.children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
