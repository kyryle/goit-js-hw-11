import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulGallery = document.querySelector('ul.gallery')
const span = document.querySelector("span")



export function createGallery(images) {
function imageTemplate({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
  return `
          <li>
          <a class="gallery-link" href="${LargeImageURL}">
            <img
            class="gallery-image"
            src="${webformatURL}" 
            alt="${tags}"
          </a>
          <div class="wrapper">
          <h3 class="h3">Likes</h3>
          <p>${likes}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Views</h3>
          <p>${views}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Comments</h3>
          <p>${comments}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">downloads</h3>
          <p>${downloads}</p>
          </div>
        </li>`
}
  function imagesTemplate(images) {
  images = Object.values(images)
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

export function clearGallery() {
  let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
  gallery.refresh()
}

export function showLoader() {
  span.classList.toggle("is-visible")
}

export function hideLoader() {
  span.classList.toggle("is-visible")
}
