import { getImagesByQuery } from './js/pixabay-api';
import {createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form.form')


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
        const result = getImagesByQuery(inputText).then(res => {
            const data = result.data
            if (Object.values(getImagesByQuery(inputText)).length === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!"
            })
        }
                        const gallery = createGallery(data)

        }).catch(err => {
            console.log(err);
            
            hideLoader()
            iziToast.show({
                title: 'error'
            })
            return
        }).finally(() => {
            hideLoader()
        }) 
        // if (Object.values(getImagesByQuery(inputText)).length === 0) {
        //     iziToast.show({
        //         message: "Sorry, there are no images matching your search query. Please try again!"
        //     })
        // }
    }
})