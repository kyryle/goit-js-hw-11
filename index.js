import{a as y,S as g,i as l}from"./assets/vendor-DuKcLXOA.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function c(o){const s="https://pixabay.com",a="/api/",r=new URLSearchParams({key:"56397687-63b06f309fb1b7ea5ddc55358",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${s}${a}?${r}`;return(await y.get(e)).data}const p=document.querySelector("ul.gallery");let n=!1;const f=document.querySelector("span");function w(o){function s({webformatURL:r,largeImageURL:e,tags:t,likes:i,views:d,comments:m,downloads:h}){return`
          <li>
          <a class="gallery-link" href="${e}">
            <img
            class="gallery-image"
            src="${r}" 
            alt="${t}">
          </a>
          <div class="wrapper">
          <h3 class="h3">Likes</h3>
          <p>${i}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Views</h3>
          <p>${d}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Comments</h3>
          <p>${m}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">downloads</h3>
          <p>${h}</p>
          </div>
        </li>`}function a(r){return r.map(s).join("")}p.innerHTML=a(o),n===!1?n=new g(".gallery a",{captionsData:"alt",captionDelay:250}):n.refresh(),n.on("show.simplelightbox",function(){})}function v(){p.innerHTML=""}function L(){f.classList.add("is-visible")}function b(){f.classList.remove("is-visible")}const u=document.querySelector("form.form");u.addEventListener("submit",o=>{o.preventDefault();let a=new FormData(u).get("search-text");a.trim()===""?l.show({title:"hey",message:"fill in empty field"}):(v(),L(),c(a).then(r=>{const e=r;console.log(e),c.hits.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!"}),w(e)}).catch(r=>{console.log(r),l.show({title:"error"})}).finally(()=>{b()}))});
//# sourceMappingURL=index.js.map
