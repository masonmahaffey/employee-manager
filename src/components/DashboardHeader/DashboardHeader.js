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
import s from './DashboardHeader.css';
import Link from '../Link';
import DashboardNavigation from '../DashboardNavigation/DashboardNavigation';
import cx from "classnames";

export default function DashboardHeader({children}) {
  useStyles(s);
  return (
    <>
      {/*<div className={s.topBar}>*/}
      {/*  /!*<p className={s.topBarText}>An MCM 2020 project</p>*!/*/}
      {/*</div>*/}
      <div className={s.root}>
        <div className={s.container}>
          <DashboardNavigation />
          {children}
          <Link className={s.brand} to="/">
          <span className={s.brandTxt}>employee
            <span className={s.brandTxtAlt}>manager
              <span className={s.beta}>beta</span>
            </span>
          </span>
          </Link>
        </div>
      </div>
    </>
  );
}
