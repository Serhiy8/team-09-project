(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:10,loop:!0,keyboard:{enabled:!0},navigation:{nextEl:".next-button",prevEl:".previous-button"},pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(i,t){return'0<span class="'+i+'"></span><div class="swiper-dash"></div>0<span class="'+t+'"></span>'}}});const c=document.querySelectorAll(".catalog__item");c.forEach(i=>{const t=i.querySelector(".catalog__like-icon");let s=!1;i.addEventListener("dblclick",()=>{s?(t.classList.remove("like-active"),s=!1):(t.classList.add("like-active"),s=!0)}),i.addEventListener("touchend",o=>{o.detail===2&&(s?(t.classList.remove("like-active"),s=!1):(t.classList.add("like-active"),s=!0))})});const r=document.querySelectorAll(".catalog__item");r.forEach(i=>{const t=i.querySelector(".catalog__item-info"),s=i.querySelector(".catalog__info-icon");let o=!1;s.addEventListener("click",e=>{e.stopPropagation(),e.detail===1&&(o?(t.classList.remove("visible"),o=!1,s.classList.remove("info-active")):(t.classList.add("visible"),o=!0,s.classList.add("info-active")))}),i.addEventListener("click",e=>{e.target===t&&o&&(t.classList.remove("visible"),o=!1,s.classList.remove("info-active"))}),s.addEventListener("touchend",e=>{e.detail===1&&(o?(t.classList.remove("visible"),o=!1,s.classList.remove("info-active")):(t.classList.add("visible"),o=!0,s.classList.add("info-active")))}),i.addEventListener("touchend",e=>{e.target===t&&o&&(t.classList.remove("visible"),o=!1,s.classList.remove("info-active"))})});(()=>{const i={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".mobile-menu-item")};i.openMenuBtn.addEventListener("click",t),i.closeMenuBtn.addEventListener("click",t),i.links.forEach(s=>{s.addEventListener("click",()=>{i.menu.classList.remove("is-open"),document.body.classList.remove("is-open")}),s.addEventListener("touchend",()=>{i.menu.classList.remove("is-open"),document.body.classList.remove("is-open")})});function t(){i.menu.classList.toggle("is-open"),document.body.classList.toggle("is-open")}})();