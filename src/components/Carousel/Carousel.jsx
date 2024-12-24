import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import s from "./Carousel.module.css";

const Carousel = () => {
  const images = useSelector(state => state.carousel.images);
  const [imgPosition, setImgPosition] = useState(0);

  useEffect(() => {
    let el = document.getElementById("gallery");
    el.addEventListener("touchstart", handleTouchStart, false);
    el.addEventListener("touchmove", handleTouchMove, false);

    return function () {
      el.removeEventListener("touchstart", handleTouchStart, false);
      el.removeEventListener("touchmove", handleTouchMove, false);
    }
  }, []);

  let x1 = null;

  function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
  };

  function handleTouchMove(event) {
    if (!x1) return false;
    let x2 = event.touches[0].clientX;
    let xDiff = x2 - x1;

    if (xDiff > 0) {
      handleSwitchLeft();
    }
    else if (xDiff < 0) {
      handleSwitchRight();
    }

    x1 = null;
  };


  const handleSwitchLeft = () => {
    setImgPosition(imgPosition + 176)
    if (imgPosition === 0) {
      setImgPosition(0)
    }
  };
  const handleSwitchRight = () => {
    if (imgPosition != -352)
      setImgPosition(imgPosition - 176)
  };

  return (
    <div id={"gallery"} className={s.gallery}>
      <button
        className={classNames(s.button, s.left)}
        onClick={handleSwitchLeft}
      />
      <div
        className={s.container}
        style={{ transform: `translateX(${String(imgPosition)}px)` }}
      >
        {images.map(image => <img key={image.id} className={s.image} src={image.url} alt="" />)}
      </div>
      <button
        className={classNames(s.button, s.right)}
        onClick={handleSwitchRight}
      />
    </div>
  );
};

export default Carousel;
