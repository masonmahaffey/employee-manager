/**
 Home page
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Home.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


export default function Home({}) {
  useStyles(s);
  return (
    <div className={s.root}>
      <img className={s.rocketShip} src={"/rocket.gif"} />
      <div className={s.container}>
        <ParallaxProvider>
          <Parallax className={s.parallaxFade} y={[-100, 100]} tagOuter="figure">
            <div className={s.infoGraphic}>
              <h1 className={s.catchLine}>Whip employees into shape 75% more efficiently</h1>
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>

      <div className={"container", s.catchLineRow}>
        <div className={"row"}>
          <div className={"col"}>
            <img className={s.graphicRowImage} src={"/graphic1.svg"}/>
            <p className={s.graphicText}>We've got lots of graphs that are too cool for school</p>
          </div>
          <div className={"col"}>
            <img className={s.graphicRowImage} src={"/graphic2.svg"}/>
            <p className={s.graphicText}>Let us blow your mind with our squiggly line infographic</p>
          </div>
          <div className={"col"}>
            <img className={s.graphicRowImage} src={"/graphic3.svg"}/>
            <p className={s.graphicText}>This is how we help you whip your laggard employees into shape</p>
          </div>

        </div>
      </div>

      <div className={"container", s.catchLineRow}>
        <div className={"row"}>
          <div className={"col"}>
            <h1 className={s.catchLine2}>Management made effortless</h1>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col"}>
            <p style={{textAlign: 'center'}}><img className={s.infoGraphic2} src={"/infographic.png"}/></p>
          </div>
        </div>
      </div>

    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    }),
  ).isRequired,
};
