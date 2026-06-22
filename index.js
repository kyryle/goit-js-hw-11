import{a as h,S as y,i as l}from"./assets/vendor-DuKcLXOA.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function g(i){const s="https://pixabay.com",a="/api/",r=new URLSearchParams({key:"56397687-63b06f309fb1b7ea5ddc55358",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${s}${a}?${r}`;return(await h.get(e)).data}const u=document.querySelector("ul.gallery");let n=!1;const p=document.querySelector("span");function v(i){function s({webformatURL:r,largeImageURL:e,tags:t,likes:o,views:d,comments:f,downloads:m}){return`
          <li class="li">
          <a class="gallery-link" href="${e}">
            <img
            class="gallery-image"
            src="${r}" 
            alt="${t}">
          </a>
          <div class="firstWrapper">
          <div class="wrapper">
          <h3 class="h3">Likes</h3>
          <p>${o}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Views</h3>
          <p>${d}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Comments</h3>
          <p>${f}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">downloads</h3>
          <p>${m}</p>
          </div>
          </div>
        </li>`}function a(r){return r.map(s).join("")}u.innerHTML=a(i),n===!1?n=new y(".gallery a",{captionsData:"alt",captionDelay:250}):n.refresh(),n.on("show.simplelightbox",function(){})}function w(){u.innerHTML=""}function L(){p.classList.remove("is-invisible")}function b(){p.classList.add("is-invisible")}const c=document.querySelector("form.form");c.addEventListener("submit",i=>{i.preventDefault();let a=new FormData(c).get("search-text");a.trim()===""?l.show({title:"hey",message:"fill in empty field"}):(w(),L(),g(a).then(r=>{const e=r;if(r.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}v(e.hits)}).catch(r=>{console.log(r),l.show({title:"error",message:"an error accured while trying to get images"})}).finally(()=>{b()}))});
//# sourceMappingURL=index.js.map
