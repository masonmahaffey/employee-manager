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
import PropTypes from 'prop-types';
import s from './Login.css';
import Link from "../../components/Link";

export default function Login({ title }) {
  useStyles(s);

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.formGroup}>
          <a className={s.facebook} href="/login/facebook">
            <svg
              className={s.icon}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z" />
            </svg>
            <span>Log in with Facebook</span>
          </a>
        </div>
        <strong className={s.lineThrough}>OR</strong>
        <form method="post">
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="usernameOrEmail">
              Username or email address:
              <input
                className={s.input}
                id="usernameOrEmail"
                type="text"
                name="usernameOrEmail"
                value={"alanturing@test.com"}
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              />
            </label>
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="password">
              Password:
              <input
                className={s.input}
                id="password"
                type="password"
                name="password"
                value={"password123"}
              />
            </label>
          </div>
          <div className={s.formGroup}>
            <Link to={"/employees"}>
              <button className={s.button} type="submit">
                Go to App
              </button>
            </Link>

          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  title: PropTypes.string.isRequired,
};
