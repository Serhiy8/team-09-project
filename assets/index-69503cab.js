(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const s=document.querySelectorAll(".catalog__item");s.forEach(r=>{const c=r.querySelector(".catalog__like-icon");let t=!1;r.addEventListener("dblclick",l=>{t?(c.classList.remove("like-active"),t=!1):(c.classList.add("like-active"),t=!0)})});(function(r){typeof r.matches!="function"&&(r.matches=r.msMatchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||function(c){for(var t=this,l=(t.document||t.ownerDocument).querySelectorAll(c),e=0;l[e]&&l[e]!==t;)++e;return Boolean(l[e])}),typeof r.closest!="function"&&(r.closest=function(c){for(var t=this;t&&t.nodeType===1;){if(t.matches(c))return t;t=t.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".js-open-modal"),c=document.querySelector(".js-overlay-modal"),t=document.querySelectorAll(".js-modal-close");r.forEach(function(l){l.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal"),n=document.querySelector('.modal[data-modal="'+o+'"]');n.classList.add("active"),c.classList.add("active")})}),t.forEach(function(l){l.addEventListener("click",function(e){var o=this.closest(".modal");o.classList.remove("active"),c.classList.remove("active")})}),document.body.addEventListener("keyup",function(l){var e=l.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),c.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
