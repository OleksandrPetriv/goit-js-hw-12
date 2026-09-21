"use strict";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from './js/render-functions';

const PER_PAGE = 15;
const loadMore = document.querySelector(".loadMore");
const form = document.querySelector(".form");
let query = "";
let page = 1;
function updateLoadMore(totalHits) {
    const totalPages = Math.ceil(totalHits / PER_PAGE);
    if (page >= totalPages) {
    hideLoadMoreButton();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    showLoadMoreButton();
  }
}

function scrollGallery() {
  const card = document.querySelector(".gallery-item");
  if (!card) return;
 
  const { height } = card.getBoundingClientRect();
  window.scrollBy({
    left: 0,
    top: height * 2,
    behavior: "smooth",
  });
}

form.addEventListener("submit", async (event) => {
    hideLoadMoreButton();
    event.preventDefault();
    page = 1;
    query = event.target.elements["search-text"].value
    if (query.trim() === "") {
        iziToast.warning({ message: "Введіть дані для пошуку" })
        return
    }
    showLoader()
    clearGallery()
    try {
        const { hits, totalHits } = await getImagesByQuery(query, page);
     if (hits.length === 0) {
        iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            });
    }
     else {
         createGallery(hits)
         updateLoadMore(totalHits);
    }

    }
    catch (error) {
        iziToast.error({
        message: error.message,
    });
    }
    finally {
        hideLoader()

}
  
})
 
loadMore.addEventListener("click", async (event) => { 
    page += 1;
    showLoader();
    hideLoadMoreButton();
    try {
        const { hits, totalHits } = await getImagesByQuery(query, page);
        createGallery(hits);
        scrollGallery();
        updateLoadMore(totalHits);
    }
    catch (error) {
        page -= 1
        showLoadMoreButton();
        iziToast.error({ message: error.message });
    }
    finally {
        hideLoader()
    }
})


