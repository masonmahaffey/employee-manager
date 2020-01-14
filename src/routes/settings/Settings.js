/**
 Home page
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Settings.css';


export default function Settings({ params }) {
  useStyles(s);
  return (
    <div className={s.root}>

        <p>settings</p>
    </div>
  );
}

Settings.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    }),
  ).isRequired,
};
