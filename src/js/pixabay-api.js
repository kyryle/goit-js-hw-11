import axios, { isCancel, AxiosError } from "axios";


export async function getImagesByQuery(query) {
    const baseUrl = 'https://pixabay.com';
    const endPoint = '/api/';
    const params = new URLSearchParams({
        key: "56397687-63b06f309fb1b7ea5ddc55358",
        q: `${query}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    })
    const url = `${baseUrl}${endPoint}?${params}`;
    const response = await axios.get(url);
    
}