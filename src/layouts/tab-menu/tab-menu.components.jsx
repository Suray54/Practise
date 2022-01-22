import React from "react";
import { Link } from "react-router-dom";

import "./tab-menu.scss";
import { getIconFor, getRouteFor } from "../../utils/common-helper";

const TabMenu = (props) => {
  const { menus, activeTab } = props;

  return (
    <div className="tab-menu d-block d-sm-none">
      <ul className="tab-menu-items">
        {Object.values(menus).map((menu, key) => {
          return <TabMenuItem key={key} menu={menu} activeTab={activeTab} />;
        })}
      </ul>
    </div>
  );
};

const isTabActive = (currentTab, activeTab) => {
  if (currentTab === activeTab) {
    return "active";
  }

  return "";
};

const TabMenuItem = (props) => {
  const { menu, activeTab } = props;

  return (
    <li className="tab-menu-text border-top">
      <Link
        to={`${getRouteFor(menu)}`}
        className={` ${isTabActive(menu, activeTab)}`}
      >
        <i className={`fa fa-${getIconFor(menu)}`}></i>
        <span className="mt-2"> {menu}</span>
      </Link>
    </li>
  );
};

export default TabMenu;
