import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import s from "./Carousel.module.css";

const Carousel = () => {
    const images = useSelector(state => state.carousel.images);
    const [imgPosition, setImgPosition] = useState(0)

    const handleSwitchLeft = () => {
        setImgPosition(imgPosition + 176)
        if (imgPosition === 0) {
            setImgPosition(0)
        }
    }
    const handleSwitchRight = () => {
        if(imgPosition != -352)
        setImgPosition(imgPosition - 176)
    }

    return (
        <div className={s.gallery}>
            <button className={classNames(s.button, s.left)} onClick={handleSwitchLeft}></button>
            <div className={s.container} style={{transform:`translateX(${String(imgPosition)}px)`}}>
                {images.map(image => <img key={image.id} className={s.image} src={image.url} alt=""/>)}
            </div>
            <button className={classNames(s.button, s.right)} onClick={handleSwitchRight}></button>
        </div>
    );
}

export default Carousel;
