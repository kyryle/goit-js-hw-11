import{a as h,S as y,i}from"./assets/vendor-DuKcLXOA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function g(s){const o="https://pixabay.com",r="/api/",a=new URLSearchParams({key:"56397687-63b06f309fb1b7ea5ddc55358",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}${r}?${a}`;return(await h.get(e)).data}const c=document.querySelector("ul.gallery"),u=document.querySelector("span");function v(s){function o({webformatURL:e,largeImageURL:t,tags:n,likes:p,views:d,comments:f,downloads:m}){return`
          <li>
          <a class="gallery-link" href="${t}">
            <img
            class="gallery-image"
            src="${e}" 
            alt="${n}"
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
        </li>`}function r(e){return e=Object.values(e),e.map(o).join("")}c.innerHTML=r(s),new y(".gallery a",{captionsData:"alt",captionDelay:250}).on("show.simplelightbox",function(){})}function w(){c.innerHTML.refresh()}function L(){u.classList.add("is-visible")}function b(){u.classList.remove("is-visible")}const l=document.querySelector("form.form"),$=document.querySelector('input[name="search-text"]');$.addEventListener("input",s=>{s.preventDefault()});l.addEventListener("submit",s=>{s.preventDefault();let r=new FormData(l).get("search-text");if(console.log(r),r.trim()==="")i.show({title:"hey",message:"fill in empty field"});else{w(),L();const a=g(r).then(t=>t).catch(t=>{i.show({title:"error",message:t})});console.log(a);const e=v(a);console.log(e),Object.values(e).length===0&&i.show({message:"Sorry, there are no images matching your search query. Please try again!"})}b()});
//# sourceMappingURL=index.js.map
