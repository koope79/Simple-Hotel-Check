import s from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHotels } from "../../redux/Hotels-reducer";
import FavoritesHotels from "../Hotels/Favorites/FavoritesHotels";
import SearchBar from "../Hotels/SearchBar/SearchBar";
import ListHotels from "../Hotels/ListHotels/ListHotels";
import Header from "./Header/Header";
import { useSelector } from "react-redux";
import Preloader from "../Preloader/Preloader";


const Home = () => {
    const dispatch = useDispatch();
    const isfetch = useSelector(state => state.hotels.isFetching); 

    useEffect(() => {
        dispatch(fetchHotels());
    }, []);


    return (
        <main className={s.home}>
            <Header />
            <section className={s.generalContainer}>
                <div className={s.navigation}>
                    <SearchBar />
                    <FavoritesHotels />
                </div>
                <div className={s.listHotels}>
                    {isfetch ? <Preloader /> : <ListHotels />}
                </div>
                
                
            </section>
        </main>
    );
}

export default Home;