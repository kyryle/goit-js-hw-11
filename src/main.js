import { getImagesByQuery } from './js/pixabay-api';
import {createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form.form')
const input = document.querySelector('input[name="search-text"]')

input.addEventListener('input', e => {
    e.preventDefault();
})

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form)
    let inputText = data.get('search-text')
    console.log(inputText);
    if (inputText.trim() === "") {
        iziToast.show({
    title: 'hey',
    message: 'fill in empty field'
});
    } else {
        clearGallery()
        showLoader()
        const result = getImagesByQuery(inputText).catch(err => {
            console.log(err);
        }) 
            console.log(result);
        const gallery = createGallery(result)
            console.log(gallery);
        if (Object.values(gallery).length === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!"
            })
        }
        hideLoader()
    }
})