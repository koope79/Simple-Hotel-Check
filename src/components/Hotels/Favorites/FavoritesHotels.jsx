import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Hotel from "../ListHotels/Hotel/Hotel";
import s from "./FavoritesHotels.module.css";
import {TbArrowsDownUp} from 'react-icons/tb'
import classNames from "classnames";
import { useState } from 'react';
import { sortByPrice, sortByRating } from '../../../redux/Hotels-reducer';
import { useRef } from 'react';


const FavoritesHotels = () => {
    const dispatch = useDispatch();
    const ref_rate = useRef();
    const ref_price = useRef();
    const [switchFieldRating, setSwitchFieldRating] = useState(false);
    const [switchFieldPrice, setSwitchFieldPrice] = useState(false);

    const handleSortRating = () => {
        if(!switchFieldRating) {
            setSwitchFieldRating(true);
            dispatch(sortByRating(1));
        } 
        else {
            setSwitchFieldRating(false);
            dispatch(sortByRating(0));
        }
    }

    const handleSortPrice = () => {
        if(!switchFieldPrice) {
            setSwitchFieldPrice(true);
            dispatch(sortByPrice(1));
        }
        else {
            setSwitchFieldPrice(false);
            dispatch(sortByPrice(0));
        }
    }

    const favoritesHotels = useSelector(state => state.hotels.favoritesHotels);
    const hotels = favoritesHotels.map((h) => (<Hotel key={h.hotelId} hotelID={h.hotelId} hotelName={h.hotelName} stars={h.stars} price={h.priceFrom} fullDate={h.fullDate} countDays={h.countDays} inListFlag={false} />));

    useEffect(() => {
        if (ref_rate.current.checked && switchFieldRating) dispatch(sortByRating(1));
        else if (ref_rate.current.checked && !switchFieldRating) dispatch(sortByRating(0));
        else if (ref_price.current.checked && switchFieldPrice) dispatch(sortByPrice(1));
        else if (ref_price.current.checked && !switchFieldPrice) dispatch(sortByPrice(0));
    }, [favoritesHotels.length])

    return (
        <div className={s.favorites}>
            <div className={s.title}>Избранное</div>

            <div className={s.selects}>
                <input ref={ref_rate} onClick={() => handleSortRating() } type="radio" name="select" id={s.option_1} defaultChecked />
                <input ref={ref_price} onClick={() => handleSortPrice() } type="radio" name="select" id={s.option_2} />
                <label htmlFor={s.option_1} className={classNames(s.option, s.option_1)}>
                    <span>Рейтинг <TbArrowsDownUp /></span>
                </label>
                <label htmlFor={s.option_2} className={classNames(s.option, s.option_2)}>
                    <span>Цена <TbArrowsDownUp /></span>
                </label>
            </div>

            <div className={s.favoritesHotels}>
                {hotels}
            </div>

        </div>
    );
}

export default FavoritesHotels;