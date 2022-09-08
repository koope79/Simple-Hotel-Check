import s from "./ListHotels.module.css";
import React from 'react';
import Carousel from "../../Carousel/Carousel";
import Hotel from "./Hotel/Hotel";
import { converDateFormat, convertWordFormat } from "../../../utilities/convertDate";
import { useSelector } from "react-redux";



const ListHotels = () => {
    const dataHotels = useSelector(state => state.hotels.dataHotels);
    const favoritesHotels = useSelector(state => state.hotels.favoritesHotels);

    const date = converDateFormat(dataHotels[0]?.dateFrom);
    const hotels = dataHotels.map((h) => (<Hotel key={h.hotelId} hotelID={h.hotelId} hotelName={h.hotelName} stars={h.stars} price={h.priceFrom} fullDate={date} countDays={h.countDays} inListFlag={true} />));

    const nameHotels = ['отель', 'отеля', 'отелей'];

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

            <Carousel />

            <div className={s.additionInfo}>

                <span>Добавлено в Избранное:
                    {favoritesHotels.length > 0 ? ` ${favoritesHotels.length} ${convertWordFormat(favoritesHotels.length, nameHotels)}`
                        : null
                    }
                </span>
            </div>

            <div className={s.hotelsBlock}>
                {hotels}
            </div>
        </>
    );
};

export default ListHotels;
