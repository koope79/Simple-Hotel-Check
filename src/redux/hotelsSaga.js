import * as axios from 'axios';
import { FETCH_HOTELS, setDataHotels, setIsFetching } from './Hotels-reducer';
import { put, takeLatest } from "redux-saga/effects";
import { countDateTo, currentDate } from '../utilities/convertDate';

function* fetchHotelsSaga({ payload: { cityName = "Москва", date = currentDate(), days = 1, limit = 15 } }) {
    yield put(setIsFetching());
    try {
        const dateTo = countDateTo(date, days);
        
        const response = yield axios.get(`http://engine.hotellook.com/api/v2/cache.json?location=${cityName}&currency=rub&checkIn=${date}&checkOut=${dateTo}&limit=${limit}`);
        response.data.length > 0
            ? yield put(setDataHotels(response.data, cityName, date, days))
            : yield null
    }
    catch (e) {
        console.log(e);
    }
}


export function* hotelsWatcher() {
    yield takeLatest(FETCH_HOTELS, fetchHotelsSaga);
}



