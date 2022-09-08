const SET_DATA_HOTELS = "SET_DATA_HOTELS";
const ADD_FAVORITE_HOTEL = "ADD_FAVORITE_HOTEL";
const DELETE_FAVORITE_HOTEL = "DELETE_FAVORITE_HOTEL";
const SORT_BY_RATING = "SORT_BY_RATING";
const SORT_BY_PRICE = "SORT_BY_PRICE";
const IS_FETCHING = "IS_FETCHING";

export const FETCH_HOTELS = "FETCH_HOTELS";


let initialState = {
    dataHotels: [],
    favoritesHotels: [],
    isFetching: true
};

const hotelsRecuder = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_HOTELS:
            const hotels = action.payload.map(h => ({ ...h, cityname: action.cityName, dateFrom: action.dateFrom, countDays: action.countDays }))

            return {
                ...state,
                dataHotels: hotels,
                isFetching: false
            }
        case ADD_FAVORITE_HOTEL:
            const hotel = state.dataHotels.filter(h => h.hotelId === action.hotelID)
            hotel[0].fullDate = action.fullDate;
            hotel[0].countDays = action.countDays
            hotel[0].like = true;

            return {
                ...state,
                favoritesHotels: [...state.favoritesHotels, ...hotel],
            }
        case DELETE_FAVORITE_HOTEL:
            return {
                ...state,
                favoritesHotels: state.favoritesHotels.filter(h => h.hotelId !== action.hotelID),
            }
        case SORT_BY_RATING:
            if(action.switchRating == 1) return { ...state, favoritesHotels: [...state.favoritesHotels.sort((a, b) => b.stars - a.stars)] }
            else return { ...state, favoritesHotels: [...state.favoritesHotels.sort((a, b) => a.stars - b.stars)] }

        case SORT_BY_PRICE:
            if(action.switchPrice == 1) return {...state, favoritesHotels: [...state.favoritesHotels.sort((a, b) => b.priceFrom - a.priceFrom)] }
            else return {...state, favoritesHotels: [...state.favoritesHotels.sort((a, b) => a.priceFrom - b.priceFrom)] }

        case IS_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        default:
            return state;
    }
}

export const setDataHotels = (payload, cityName, dateFrom, countDays) => ({ type: SET_DATA_HOTELS, payload, cityName, dateFrom, countDays });
export const addFavoriteHotel = (hotelID, fullDate, countDays) => ({ type: ADD_FAVORITE_HOTEL, hotelID, fullDate, countDays });
export const deleteFavoriteHotel = (hotelID) => ({ type: DELETE_FAVORITE_HOTEL, hotelID });
export const sortByRating = (switchRating) => ({ type: SORT_BY_RATING, switchRating });
export const sortByPrice = (switchPrice) => ({ type: SORT_BY_PRICE, switchPrice });
export const setIsFetching = () => ({ type: IS_FETCHING });

export const fetchHotels = (cityName, date, days, limit) => ({ type: FETCH_HOTELS, payload: { cityName, date, days, limit } });

export default hotelsRecuder;


