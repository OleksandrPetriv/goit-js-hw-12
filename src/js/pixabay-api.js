"use strict";
import axios from "axios";

const url = "https://pixabay.com/api/";
const API_KEY = "57604076-2ca9fc931dc441a1039dbd39e";

export async function getImagesByQuery(query, page) {
    const response = await axios.get(url, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page: page,
            per_page: 15,
        }
    });
    return response.data;
}