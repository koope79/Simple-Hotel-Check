

let initialState = {
    images:[
        {id: 1, url: "img/image1.jpg"},
        {id: 2, url: "img/image2.jpg"},
        {id: 3, url: 'img/image3.jpg'},
        {id: 4, url: 'img/image1.jpg'},
        {id: 5, url: 'img/image2.jpg'},
        {id: 6, url: 'img/image3.jpg'},
    ]
};


const carouselReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default carouselReducer;