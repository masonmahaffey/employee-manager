/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import cx from 'classnames';
import s from './DashboardMenu.css';
import Link from '../Link';

export default function DashboardMenu() {
  useStyles(s);
  return (
    <div>
      <div id="mySidenav" className={s.sidenav}>
        <a href="" className={s.closebtn}>×</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Clients</a>
        <a href="">Contact</a>
      </div>
      {/* Use any element to open the sidenav */}
      <span>open</span>
      {/* Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page */}
      <div id="main">

      </div>
    </div>

  );
}
