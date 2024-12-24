import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from 'reselect';
import { v4 as uuid } from "uuid";
import { BsFillStarFill } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { addFavoriteHotel, deleteFavoriteHotel } from "../../../../redux/Hotels-reducer";
import { convertWordFormat } from "../../../../utilities/convertDate";
import s from "./Hotel.module.css";

const Hotel = React.memo(({
  hotelID,
  hotelName,
  stars,
  price,
  fullDate,
  countDays,
  inListFlag
}) => {
  const dispatch = useDispatch();
  const hotelsSelector = createSelector(
    state => state.hotels.favoritesHotels,
    favoritesHotels => favoritesHotels.filter(h => h.hotelId === hotelID),
  );
  const favoritesHotels = useSelector(hotelsSelector);

  const NAME_DAYS = ['день', 'дня', 'дней'];

  return (
    <div className={s.hotel}>
      {inListFlag ? (
        <div className={s.hotelIcon}>
          <img src={"img/hotel.png"} alt={"..."} />
        </div>
      ) : null}
      <div className={s.blockInfo}>
        <div className={s.blockInfo__nameLike}>
          <span className={s.blockInfo__name}>{hotelName}</span>
          {favoritesHotels[0]?.like ? (
            <HiOutlineHeart
              onClick={() => dispatch(deleteFavoriteHotel(hotelID))}
              style={{ cursor: "pointer", opacity: "1", minWidth: "21px" }}
              className={s.checked}
              fill={"transparent"}
              fontSize={23}
            />
          ) : (
            <HiOutlineHeart
              onClick={() => dispatch(addFavoriteHotel(hotelID, fullDate, countDays))}
              style={{ cursor: "pointer", opacity: ".3", minWidth: "21px" }}
              className={s.checkedHover}
              fill={"transparent"}
              fontSize={23}
            />
          )}
        </div>
        <div className={s.blockInfo__dates}>
          {fullDate}
          <span className={s.separator}><span ></span></span>
          {countDays} {convertWordFormat(countDays, NAME_DAYS)}
        </div>
        <div className={s.blockInfo__starsPrice}>
          <div className={s.blockInfo__stars}>
            {Array.from({ length: stars }, (i) => i + 1).map(() => (
              <BsFillStarFill
                key={uuid()}
                style={{ marginRight: ".25rem" }}
                fill={"#CDBC1E"}
                fontSize={17}
              />
            ))}
            {Array.from({ length: 5 - stars }, (i) => i + 1).map(() => (
              <BsFillStarFill
                key={uuid()}
                style={{ marginRight: ".25rem" }}
                fill={"#dedede"}
                fontSize={17}
              />
            ))}
          </div>
          <span>
            <span className={s.blockInfo__priceText}>Price:</span>
            <span className={s.blockInfo__price}>
              {Math.round(price).toLocaleString("ru-RU", { style: "decimal", })}{" "}₽
            </span>
          </span>
        </div>
      </div>
    </div>
  );
});

export default Hotel;
