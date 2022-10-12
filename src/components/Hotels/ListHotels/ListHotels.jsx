import s from "./ListHotels.module.css";
import React from 'react';
import Hotel from "./Hotel/Hotel";
import { converDateFormat, convertWordFormat } from "../../../utilities/convertDate";
import { useSelector } from "react-redux";
import { Gallery } from "../../Carousel/Gallery";

const AdditionInfo = () => {
    const favoritesHotels = useSelector(state => state.hotels.favoritesHotels);
    const nameHotels = ['отель', 'отеля', 'отелей'];

    return (
        <>
            <span>Добавлено в Избранное:
                {favoritesHotels.length > 0 ? ` ${favoritesHotels.length} ${convertWordFormat(favoritesHotels.length, nameHotels)}`
                    : null
                }
            </span>
        </>
    );
}

const ListHotels = () => {
    const dataHotels = useSelector(state => state.hotels.dataHotels);

    const date = converDateFormat(dataHotels[0]?.dateFrom);
    const hotels = dataHotels.map((h) => (<Hotel key={h.hotelId} hotelID={h.hotelId} hotelName={h.hotelName} stars={h.stars} price={h.priceFrom} fullDate={date} countDays={h.countDays} inListFlag={true} />));
    
    return (
        <>
            <div className={s.topTitles}>
                <div className={s.topTitles__titles}>
                    <p className={s.topTitles__text}>Отели</p>
                    <span className={s.separator}>{">"}</span>
                    <p className={s.topTitles__text}>{dataHotels[0]?.cityname}</p>
                </div>

                <div className={s.topTitles__date}>
                    {date}
                </div>
            </div>

            <Gallery />

            <div className={s.additionInfo}>
                <AdditionInfo />
            </div>

            <div className={s.hotelsBlock}>
                {hotels}
            </div>
        </>
    );
};

export default ListHotels;
