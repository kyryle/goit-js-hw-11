import{a as g,S as v,i as n}from"./assets/vendor-DuKcLXOA.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function l(o){const a="https://pixabay.com",r="/api/",s=new URLSearchParams({key:"56397687-63b06f309fb1b7ea5ddc55358",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${a}${r}?${s}`;return(await g.get(e)).data}const p=document.querySelector("ul.gallery"),d=document.querySelector("span");function w(o){function a({webformatURL:e,largeImageURL:t,tags:i,likes:f,views:m,comments:h,downloads:y}){return`
          <li>
          <a class="gallery-link" href="${t}">
            <img
            class="gallery-image"
            src="${e}" 
            alt="${i}">
          </a>
          <div class="wrapper">
          <h3 class="h3">Likes</h3>
          <p>${f}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Views</h3>
          <p>${m}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Comments</h3>
          <p>${h}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">downloads</h3>
          <p>${y}</p>
          </div>
        </li>`}function r(e){return e.map(a).join("")}p.innerHTML=r(o);let s=new v(".gallery a",{captionsData:"alt",captionDelay:250});s.refresh(),s.on("show.simplelightbox",function(){})}function L(){p.innerHTML=""}function b(){d.classList.add("is-visible")}function c(){d.classList.remove("is-visible")}const u=document.querySelector("form.form");u.addEventListener("submit",o=>{o.preventDefault();let r=new FormData(u).get("search-text");if(console.log(r),r.trim()==="")n.show({title:"hey",message:"fill in empty field"});else{L(),b();const s=l(r).then(e=>{const t=s.data;Object.values(l(r)).length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!"}),w(t)}).catch(e=>{console.log(e),c(),n.show({title:"error"})}).finally(()=>{c()})}});
//# sourceMappingURL=index.js.map
