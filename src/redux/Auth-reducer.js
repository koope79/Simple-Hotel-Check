const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';


let initialState = {
    login: null,
    pass: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case LOGOUT:
            return {
                ...state,
                login: null,
                pass: null,
                isAuth: false,
            }
        default:
            return state;
    }
}

export const setUserData = (login, pass, isAuth) => ({type: SET_USER_DATA, data: {login, pass, isAuth}});
export const logOut = () => ({type: LOGOUT});


export default authReducer;


