import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../../redux/Hotels-reducer";
import Preloader from "../../Preloader/Preloader";
import ListHotels from "./ListHotels";

const ListHotelsContainer = () => {
  const dispatch = useDispatch();
  const isfetch = useSelector(state => state.hotels.isFetching);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  return (
    <>
      {isfetch ? <Preloader /> : <ListHotels />}
    </>
  );
};

export default ListHotelsContainer;
