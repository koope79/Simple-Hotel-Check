import FavoritesHotels from "../Hotels/Favorites/FavoritesHotels";
import SearchBar from "../Hotels/SearchBar/SearchBar";
import ListHotelsContainer from "../Hotels/ListHotels/ListHotelsContainer";
import Header from "./Header/Header";
import s from "./Home.module.css";

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
};

export default Home;
