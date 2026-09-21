import{a as w,S as v,i}from"./assets/vendor-C1DvvBV_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const M="https://pixabay.com/api/",q="57604076-2ca9fc931dc441a1039dbd39e";async function f(r,e){return(await w.get(M,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const m=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=document.querySelector(".loadMore"),S=new v(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const e=r.map(o=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
        <img class="gallery-image"
        src="${o.webformatURL}" 
        alt="${o.tags}"
        />
        </a>
        <ul class="info">
        <li class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-number">${o.likes}</p>
        </li>
        <li class="info-item">
        <p class="info-title">Views</p>
        <p class="info-number">${o.views}</p>
        </li>
        <li class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-number">${o.comments}</p>
        </li>
        <li class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-number">${o.downloads}</p>
        </li>
        </ul>
        </li>
        `).join("");c.textContent="Loading images, please wait",m.insertAdjacentHTML("beforeend",e),S.refresh()}function P(){m.innerHTML=""}function g(){c.classList.add("is-hidden")}function h(){c.classList.remove("is-hidden")}function L(){p.classList.remove("is-hidden")}function d(){p.classList.add("is-hidden")}const $=15,x=document.querySelector(".loadMore"),E=document.querySelector(".form");let n="",a=1;function b(r){const e=Math.ceil(r/$);a>=e?(d(),i.info({message:"We're sorry, but you've reached the end of search results."})):L()}function O(){const r=document.querySelector(".gallery-item");if(!r)return;const{height:e}=r.getBoundingClientRect();window.scrollBy({left:0,top:e*2,behavior:"smooth"})}E.addEventListener("submit",async r=>{if(d(),r.preventDefault(),a=1,n=r.target.elements["search-text"].value,n.trim()===""){i.warning({message:"Введіть дані для пошуку"});return}h(),P();try{const{hits:e,totalHits:o}=await f(n,a);e.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(y(e),b(o))}catch(e){i.error({message:e.message})}finally{g()}});x.addEventListener("click",async r=>{a+=1,h(),d();try{const{hits:e,totalHits:o}=await f(n,a);y(e),O(),b(o)}catch(e){a-=1,L(),i.error({message:e.message})}finally{g()}});
//# sourceMappingURL=index.js.map
