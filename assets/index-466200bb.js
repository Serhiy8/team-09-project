(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:10,loop:!0,keyboard:{enabled:!0},navigation:{nextEl:".next-button",prevEl:".previous-button"},pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(s,o){return'0<span class="'+s+'"></span><div class="swiper-dash"></div>0<span class="'+o+'"></span>'}}});(function(s){typeof s.matches!="function"&&(s.matches=s.msMatchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||function(o){for(var t=this,i=(t.document||t.ownerDocument).querySelectorAll(o),e=0;i[e]&&i[e]!==t;)++e;return Boolean(i[e])}),typeof s.closest!="function"&&(s.closest=function(o){for(var t=this;t&&t.nodeType===1;){if(t.matches(o))return t;t=t.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var s=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),t=document.querySelectorAll(".js-modal-close");s.forEach(function(i){i.addEventListener("click",function(e){e.preventDefault();var n=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+n+'"]');c.classList.add("active"),o.classList.add("active")})}),t.forEach(function(i){i.addEventListener("click",function(e){var n=this.closest(".modal");n.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(i){var e=i.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});const l=document.querySelectorAll(".catalog__item");l.forEach(s=>{const o=s.querySelector(".catalog__like-icon");let t=!1;s.addEventListener("dblclick",()=>{t?(o.classList.remove("like-active"),t=!1):(o.classList.add("like-active"),t=!0)}),s.addEventListener("touchend",i=>{i.detail===2&&(t?(o.classList.remove("like-active"),t=!1):(o.classList.add("like-active"),t=!0))})});const a=document.querySelectorAll(".catalog__item");a.forEach(s=>{const o=s.querySelector(".catalog__item-info"),t=s.querySelector(".catalog__info-icon");let i=!1;t.addEventListener("click",e=>{e.stopPropagation(),e.detail===1&&(i?(o.classList.remove("visible"),i=!1,t.classList.remove("info-active")):(o.classList.add("visible"),i=!0,t.classList.add("info-active")))}),s.addEventListener("click",e=>{e.target===o&&i&&(o.classList.remove("visible"),i=!1,t.classList.remove("info-active"))}),t.addEventListener("touchend",e=>{e.detail===1&&(i?(o.classList.remove("visible"),i=!1,t.classList.remove("info-active")):(o.classList.add("visible"),i=!0,t.classList.add("info-active")))}),s.addEventListener("touchend",e=>{e.target===o&&i&&(o.classList.remove("visible"),i=!1,t.classList.remove("info-active"))})});(()=>{const s={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".mobile-menu-item")};s.openMenuBtn.addEventListener("click",o),s.closeMenuBtn.addEventListener("click",o),s.links.forEach(t=>{t.addEventListener("click",()=>{s.menu.classList.remove("is-open"),document.body.classList.remove("is-open")}),t.addEventListener("touchend",()=>{s.menu.classList.remove("is-open"),document.body.classList.remove("is-open")})});function o(){s.menu.classList.toggle("is-open"),document.body.classList.toggle("is-open")}})();