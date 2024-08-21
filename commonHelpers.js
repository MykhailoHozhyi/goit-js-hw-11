import{S as u,i as m}from"./assets/vendor-f33cd494.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const f=t=>`
    <li class="gallery-card">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
  </a>

  <div class="info-box">
    <ul class="info-list">
      <li class="info-item">
        <h3 class="info-item-title">Likes</h3>
        <p class="info-item-value">${t.likes}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Views</h3>
        <p class="info-item-value">${t.views}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Comments</h3>
        <p class="info-item-value">${t.comments}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Downloads</h3>
        <p class="info-item-value">${t.downloads}</p>
      </li>
    </ul>
  </div>
</li>
  `,d="https://pixabay.com/api/";function h(t){const r=new URLSearchParams({key:"45541049-685ffcd160f6cd622b440ebf7",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${r}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const l=document.querySelector(".search-picture-form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),p=new u(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionsDelay:250});l.addEventListener("submit",y);function y(t){t.preventDefault(),n.classList.remove("is-hidden");const r=l.elements.user_query.value.trim();h(r).then(s=>{if(n.classList.add("is-hidden"),s.hits.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",l.reset(),n.classList.add("is-hidden");return}const o=s.hits.map(e=>f(e)).join("");c.innerHTML=o,p.refresh(),l.reset()}).catch(s=>{console.log(s)})}
//# sourceMappingURL=commonHelpers.js.map
