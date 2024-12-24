import React from 'react';
import s from "./Preloader.module.css";

const Preloader = () => {
  return <div className={s.preloader}>
    <img src={"img/preloader.gif"} alt={"..."} />
  </div>
};

export default Preloader;
