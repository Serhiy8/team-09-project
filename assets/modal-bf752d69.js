(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(a){for(var e=this,o=(e.document||e.ownerDocument).querySelectorAll(a),c=0;o[c]&&o[c]!==e;)++c;return Boolean(o[c])}),typeof t.closest!="function"&&(t.closest=function(a){for(var e=this;e&&e.nodeType===1;){if(e.matches(a))return e;e=e.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),a=document.querySelector(".js-overlay-modal"),e=document.querySelectorAll(".js-modal-close");t.forEach(function(o){o.addEventListener("click",function(c){c.preventDefault();var n=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+n+'"]');l.classList.add("active"),a.classList.add("active")})}),e.forEach(function(o){o.addEventListener("click",function(c){var n=this.closest(".modal");n.classList.remove("active"),a.classList.remove("active")})}),document.body.addEventListener("keyup",function(o){var c=o.keyCode;c==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),a.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
