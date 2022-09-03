import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from "./Auth-reducer";
import hotelsRecuder from "./Hotels-reducer";
import carouselReducer from "./Carousel-reducer";
import { hotelsWatcher } from "./hotelsSaga";


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth']
   };


const reducersStuff = combineReducers({
    auth: authReducer,
    hotels: hotelsRecuder,
    carousel: carouselReducer
});


const pReducer = persistReducer(persistConfig, reducersStuff);
export const store = createStore(pReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(hotelsWatcher);
export const persistor = persistStore(store);



