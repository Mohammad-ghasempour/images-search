import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID nNn3SSDzJIsEOs7qkDt9hi_bVZeoeVAEZxMkI7qOAUI"
    }
});