import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulGallery = document.querySelector('ul.gallery')




export function createGallery(images) {

function imageTemplate({name, LargeImageURL, previewURL}) {
  return `<li>
            <a class="gallery-link" href="${LargeImageURL}">
              <img
              class="gallery-image"
              src="${previewURL}" 
              alt="${name}"
            </a>
          </li>`
}
function imagesTemplate(images) {
  return images.map(imageTemplate).join('')
}

ulGallery.innerHTML = imagesTemplate(images)

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {
	
});
    
}

export function clearGallery() {}

export function showLoader() {}

export function hideLoader() {}
