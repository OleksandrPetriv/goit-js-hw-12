"use strict";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMore = document.querySelector(".loadMore");
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
    const markup = images.map(
        image => `
        <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image"
        src="${image.webformatURL}" 
        alt="${image.tags}"
        />
        </a>
        <ul class="info">
        <li class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-number">${image.likes}</p>
        </li>
        <li class="info-item">
        <p class="info-title">Views</p>
        <p class="info-number">${image.views}</p>
        </li>
        <li class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-number">${image.comments}</p>
        </li>
        <li class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-number">${image.downloads}</p>
        </li>
        </ul>
        </li>
        `
    ).join("");
    loader.textContent = "Loading images, please wait";
    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}
export function clearGallery() {
    gallery.innerHTML = "";
}

export function hideLoader() {
    loader.classList.add("is-hidden")
}


export function showLoader() {
    loader.classList.remove("is-hidden");
}

export function showLoadMoreButton() {
    loadMore.classList.remove("is-hidden")
}

export function hideLoadMoreButton() {
     loadMore.classList.add("is-hidden")
}

