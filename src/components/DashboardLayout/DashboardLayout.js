/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './DashboardLayout.css';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardFooter from '../DashboardFooter/DashboardFooter';
import Link from "../Link";
import cx from "classnames";

export default function DashboardLayout({ children, path }) {
  const [menu, setMenu] = useState(path);
  const [sideNavWidth, setSideNavWidth] = useState("200px");

  const toggleMenu = () => {
    if(sideNavWidth === "0px") {
      setSideNavWidth("200px");
    } else {
      setSideNavWidth("0px");
    }
  }

  useStyles(s, normalizeCss);
  return (
    <>

      <div id="mySidenav" className={`sidenav ${s.sidenav}`} style={{width: sideNavWidth}}>
        <p onClick={() => setSideNavWidth("0px")}  className={s.closebtn}>&times;</p>
        <Link onClick={() => setMenu("/employees")} className={menu === '/employees'? s.menuActive: s.menuSilent} to={"/employees"}>Employees</Link>
        <Link onClick={() => setMenu("/settings")} className={menu === '/settings'? s.menuActive: s.menuSilent} to={"/settings"}>Settings</Link>
      </div>

      <i onClick={() => setSideNavWidth("200px")} className={`fa fa-caret-right ${s.menuExpand}`}></i>

      <div  className={s.main} style={{marginLeft: sideNavWidth}}>

        <DashboardHeader></DashboardHeader>
        {children}
      </div>
      <DashboardFooter />
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
