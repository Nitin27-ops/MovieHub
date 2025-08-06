import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"41ee65d3c2f3548562a9c4ca2c326bd9",
    }
})