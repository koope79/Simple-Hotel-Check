import { useDispatch, useSelector } from "react-redux";
import Hotel from "../ListHotels/Hotel/Hotel";
import s from "./FavoritesHotels.module.css";
import {TbArrowsDownUp} from 'react-icons/tb'
import classNames from "classnames";
import { sortByPrice, sortByRating } from "../../../redux/Hotels-reducer";


const FavoritesHotels = () => {

    const dispatch = useDispatch();

    const favoritesHotels = useSelector(state => state.hotels.favoritesHotels);
    const hotels = favoritesHotels.map((h) => (<Hotel key={h.hotelId} hotelID={h.hotelId} hotelName={h.hotelName} stars={h.stars} price={h.priceFrom} fullDate={h.fullDate} countDays={h.countDays} inListFlag={false} />));

    return (
        <div className={s.favorites}>
            <div className={s.title}>Избранное</div>

            <div className={s.selects}>
                <input onClick={() => dispatch(sortByRating())} type="radio" name="select" id={s.option_1} defaultChecked />
                <input onClick={() => dispatch(sortByPrice())} type="radio" name="select" id={s.option_2} />
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