import s from "./Home.module.css";
import FavoritesHotels from "../Hotels/Favorites/FavoritesHotels";
import SearchBar from "../Hotels/SearchBar/SearchBar";
import Header from "./Header/Header";
import ListHotelsContainer from "../Hotels/ListHotels/ListHotelsContainer";


const Home = () => {
    return (
        <main className={s.home}>
            <Header />
            <section className={s.generalContainer}>
                <div className={s.navigation}>
                    <SearchBar />
                    <FavoritesHotels />
                </div>
                <div className={s.listHotels}>
                    <ListHotelsContainer />
                </div>
            </section>
        </main>
    );
}

export default Home;