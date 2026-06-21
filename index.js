import{a as g,S as c,i as n}from"./assets/vendor-DuKcLXOA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function h(r){const o="https://pixabay.com",a="/api/",s=new URLSearchParams({key:"56397687-63b06f309fb1b7ea5ddc55358",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}${a}?${s}`;return await g.get(e)}const y=document.querySelector("ul.gallery"),u=document.querySelector("span");function L(r){function o({webformatURL:e,largeImageURL:t,tags:l,likes:p,views:d,comments:f,downloads:m}){return`
          <li>
          <a class="gallery-link" href="${LargeImageURL}">
            <img
            class="gallery-image"
            src="${e}" 
            alt="${l}"
          </a>
          <div class="wrapper">
          <h3 class="h3">Likes</h3>
          <p>${p}</p>
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
        </li>`}function a(e){return e=Object.values(e),e.map(o).join("")}y.innerHTML=a(r),new c(".gallery a",{captionsData:"alt",captionDelay:250}).on("show.simplelightbox",function(){})}function v(){new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function w(){u.classList.toggle("loader")}function b(){u.classList.toggle("loader")}const i=document.querySelector("form.form"),$=document.querySelector('input[name="search-text"]');$.addEventListener("input",r=>{r.preventDefault()});i.addEventListener("submit",r=>{r.preventDefault();let a=new FormData(i).get("search-text");if(console.log(a),a.trim()==="")n.show({title:"hey",message:"fill in empty field"});else{v(),w();const s=h(a).catch(t=>{console.log(t)});console.log(s);const e=L(s);console.log(e),Object.values(e).length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!"}),b()}});
//# sourceMappingURL=index.js.map
