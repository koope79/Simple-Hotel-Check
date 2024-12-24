import { useSelector } from "react-redux";
import { convertWordFormat } from "../../../../utilities/convertDate";

const AdditionInfo = () => {
  const favoritesHotels = useSelector(state => state.hotels.favoritesHotels);
  const NAME_HOTELS = ["отель", "отеля", "отелей"];

  return (
    <>
      <span>Добавлено в Избранное:
        {favoritesHotels.length > 0
          ? `${favoritesHotels.length} ${convertWordFormat(favoritesHotels.length, NAME_HOTELS)}`
          : null
        }
      </span>
    </>
  );
};

export default AdditionInfo;
