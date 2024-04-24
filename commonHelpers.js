import{i as f,a as S,A as L,S as m}from"./assets/vendor-7c6b7944.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();function k(){const e=document.querySelectorAll(".header-select");e.forEach(o=>{o.addEventListener("change",r)});function t(o){localStorage.setItem("theme",o),document.documentElement.className=o}function r(o){const n=o.currentTarget.value;t(`${n}-theme`)}document.addEventListener("DOMContentLoaded",i);function i(){const o=localStorage.getItem("theme");e.forEach(n=>{o!==null&&(n.value=`${o.replace(new RegExp("-theme"),"")}`),t(o||"green-theme")})}}k();const q=(e,t)=>{e.style.setProperty("--x",`${t.x}px`),e.style.setProperty("--y",`${t.y}px`),e.style.setProperty("--width",`${t.width}px`),e.style.setProperty("--height",`${t.height}px`),e.style.setProperty("--radius",t.radius),e.style.setProperty("--scale",t.scale)};document.querySelectorAll(".cursor").forEach(e=>{let t;const r=i=>{const o={x:i.clientX,y:i.clientY,width:42,height:42,radius:"100px"},n={};if(t!=null){const{top:a,left:w,width:p,height:h}=t.getBoundingClientRect(),E=window.getComputedStyle(t).borderTopLeftRadius;n.x=w+p/2,n.y=a+h/2,n.width=p,n.height=h,n.radius=E}return{...o,...n}};document.addEventListener("mousemove",i=>{const o=r(i);q(e,o)}),document.querySelectorAll("a, button, select").forEach(i=>{i.addEventListener("mouseenter",()=>t=i),i.addEventListener("mouseleave",()=>t=void 0)})});function B(){const e=document.querySelector(".menu-box"),t=document.querySelector(".button-menu"),r=document.querySelector(".button-mob-menu"),i=document.querySelector("body");t.addEventListener("click",function(){e.classList.toggle("visually-hidden"),e.classList.add("is-open"),o()}),r.addEventListener("click",function(){e.classList.remove("is-open"),setTimeout(()=>{e.classList.toggle("visually-hidden")},500),o()}),document.addEventListener("click",function(n){(n.target.classList.contains("menu-link")||n.target.classList.contains("modal-order-btn"))&&(e.classList.add("visually-hidden"),o())});function o(){i.classList.toggle("modal-open")}}function x(){const e=document.querySelector(".covers"),t=document.querySelectorAll(".covers-picture"),r=()=>{t.forEach(n=>{n.classList.add("js-animation")})},i=()=>{t.forEach(n=>{n.classList.remove("js-animation")})};new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting?r():i()})}).observe(e)}function C(){const e=document.querySelector(".btn-drop-down"),t=document.querySelector(".list-menu-anchors");e.addEventListener("click",function(){if(!t.classList.contains("visually-hidden")){t.classList.remove("is-open"),setTimeout(()=>{t.classList.toggle("visually-hidden")},500);return}t.classList.add("is-open"),t.classList.toggle("visually-hidden")}),document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(i){i.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})}const s={form:document.querySelector(".footer-form"),email:document.querySelector(".footer-email-input"),successLabel:document.querySelector(".success-label"),errorLabel:document.querySelector(".error-label"),comments:document.querySelector(".footer-comments-input"),btn:document.querySelector(".footer-send-button"),modalBackdrop:document.querySelector(".footer-modal-backdrop"),modalOverlay:document.querySelector(".footer-modal-overlay")},l={addError(){s.successLabel.classList.add("visually-hidden"),s.errorLabel.classList.remove("visually-hidden"),s.email.classList.add("input-error"),s.email.classList.remove("input-success"),s.errorLabel.classList.add("is-open"),s.successLabel.classList.remove("is-open")},addSuccess(){s.errorLabel.classList.add("visually-hidden"),s.successLabel.classList.remove("visually-hidden"),s.email.classList.remove("input-error"),s.email.classList.add("input-success"),s.successLabel.classList.add("is-open"),s.errorLabel.classList.remove("is-open")},removeBoth(){s.email.classList.remove("input-success"),s.email.classList.remove("input-error"),s.successLabel.classList.remove("is-open"),s.errorLabel.classList.remove("is-open"),setTimeout(()=>{s.successLabel.classList.add("visually-hidden"),s.errorLabel.classList.add("visually-hidden")},250)}},c={close(){s.modalOverlay.classList.remove("is-open"),s.modalBackdrop.classList.remove("is-open"),setTimeout(()=>{s.modalBackdrop.classList.add("visually-hidden"),s.modalOverlay.classList.add("visually-hidden")},500),s.modalOverlay.children.close_button.removeEventListener("click",c.close),s.modalBackdrop.removeEventListener("click",v),document.body.removeEventListener("keydown",y)},open(){s.modalBackdrop.classList.remove("visually-hidden"),s.modalOverlay.classList.remove("visually-hidden"),s.modalBackdrop.classList.add("is-open"),s.modalOverlay.classList.add("is-open"),s.modalOverlay.children.close_button.addEventListener("click",c.close),s.modalBackdrop.addEventListener("click",v),document.body.addEventListener("keydown",y)}},g={showError(){f.error({message:"Please fill out both fields before sending!",messageColor:"#fafafa",backgroundColor:"#e74a3b",theme:"dark",closeOnClick:!0,timeout:3e3})},showBadRequest(){f.error({message:"Something went wrong. Please try again!",messageColor:"#fafafa",backgroundColor:"#e74a3b",theme:"dark",closeOnClick:!0,timeout:3e3})}},d={email:null,comments:null};if(localStorage.hasOwnProperty("userSubmitData")){const e=JSON.parse(localStorage.getItem("userSubmitData"));s.form.elements.email.value=e.email,s.form.elements.comments.value=e.comments,d.email=e.email,d.comments=e.comments}const b=()=>{localStorage.setItem("userSubmitData",JSON.stringify(d))},T=()=>{localStorage.removeItem("userSubmitData")},u=e=>/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.trim()),P=e=>{const t="https://portfolio-js.b.goit.study/api",r="/requests",i=e;return S.post(`${t}${r}`,i)},O=()=>{u(s.form.elements.email.value)||l.addError()},v=e=>{e.target===e.currentTarget&&c.close()},y=e=>{e.key==="Escape"&&c.close()},A=async e=>{try{e.preventDefault();const t=e.currentTarget;if(t.elements.email.value.trim()===""||t.elements.comments.value.trim()===""){g.showError();return}const r={email:t.elements.email.value.trim(),comment:t.elements.comments.value.trim()},i=await P(r);s.modalOverlay.children.title.textContent=i.data.title,s.modalOverlay.children.message.textContent=i.data.message,c.open(),l.removeBoth(),t.reset(),T()}catch(t){console.log(t),g.showBadRequest()}},D=e=>{d.email=e.target.value,b(),e.target.value.length>27&&innerWidth<=375&&(e.target.value=e.target.value.slice(0,25)+"..."),e.target.value.length>19&&innerWidth>375&&innerWidth<1440&&(e.target.value=e.target.value.slice(0,17)+"..."),e.target.value.length>31&&innerWidth>=1440&&(e.target.value=e.target.value.slice(0,29)+"..."),(!s.errorLabel.classList.contains("visually-hidden")||!s.successLabel.classList.contains("visually-hidden"))&&(u(e.target.value)&&l.addSuccess(),u(e.target.value)||l.addError(),e.target.value===""&&l.removeBoth())},I=e=>{d.comments=e.target.value,b(),e.target.value.length>27&&innerWidth<=375&&(e.target.value=e.target.value.slice(0,25)+"..."),e.target.value.length>19&&innerWidth>375&&innerWidth<1440&&(e.target.value=e.target.value.slice(0,17)+"..."),e.target.value.length>31&&innerWidth>=1440&&(e.target.value=e.target.value.slice(0,29)+"...")};s.btn.addEventListener("click",O);s.form.addEventListener("submit",A);s.email.addEventListener("input",D);s.comments.addEventListener("input",I);function $(){const t=document.querySelector(".back-to-top"),r=()=>document.documentElement||document.body;document.addEventListener("scroll",()=>{r().scrollTop>100?t.classList.remove("hidden"):t.classList.add("hidden")});const i=()=>{document.body.scrollIntoView({behavior:"smooth"})};t.addEventListener("click",i);const o=document.querySelector(".progress-bar");document.addEventListener("scroll",()=>{const n=r().scrollTop/(r().scrollHeight-r().clientHeight)*100;o.style.width=`${n}%`,r().scrollTop>100?t.classList.remove("hidden"):t.classList.add("hidden")})}function z(){new L(".about-me-secondlist",{openOnInit:[0],showMultiple:!0}),new m(".about-me-swiper-container",{centeredSlides:!1,grabCursor:!0,loop:!0,keyboard:{enabled:!0},mousewheel:!0,touch:!0,navigation:{nextEl:".swiper-button-next"},spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});const e=document.querySelectorAll(".about-me-btn-aboutme");document.querySelectorAll(".about-me-secondlist-item").forEach(t=>{t.classList.contains("is-active")?(t.firstElementChild.style.marginBottom="0px",t.firstElementChild.style.transition="margin 0.5s ease-in-out"):(t.firstElementChild.style.marginBottom="35px",t.firstElementChild.style.transition="margin 0.5s ease-in-out")}),e.forEach(t=>t.addEventListener("click",()=>{document.querySelectorAll(".about-me-secondlist-item").forEach(r=>{r.classList.contains("is-active")?(r.firstElementChild.style.marginBottom="0px",r.firstElementChild.style.transition="margin 0.5s ease-in-out"):(r.firstElementChild.style.marginBottom="35px",r.firstElementChild.style.transition="margin 0.5s ease-in-out")})}))}const j=({_id:e,avatar_url:t,author:r,review:i})=>`<li class="reviews-list-item swiper-slide" id="${e}">
            <img class="thumbnail" src="${t}" alt="${r}" width="48" height="48" loading="lazy">
            <div class="opinion">
              <h3 class="author">${r}</h3>
              <p class="review">${i.trim()}</p>
            </div>
          </li>`;function R(e){return e.map(j).join("")}const M="https://portfolio-js.b.goit.study/api/reviews",V=document.querySelector("#review-swiper-list"),N=async()=>{try{const e=await fetch(M);if(!e.ok)throw new Error("Network response was not ok.");const t=await e.json(),r=R(t);r||iziToast.error({title:"Error",message:"Sorry, reviews not found.",position:"bottomLeft"}),V.insertAdjacentHTML("beforeend",r);const i=new m("#swiper3",{direction:"horizontal",breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{nextEl:".btn-next-review",prevEl:".btn-prev-review"}})}catch{iziToast.error({title:"Error",message:"Error while fetching reviews from server",position:"bottomLeft"})}};function W(){async function e(){await N()}e()}const F=()=>{new m(".projects-swiper",{direction:"horizontal",navigation:{nextEl:".projects-next-button",prevEl:".projects-previous-button"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0,tabKeys:!0},grabCursor:!0,spaceBetween:50})};function U(){new L(".faq-list",{showMultiple:!0})}B();x();C();$();z();W();F();U();
//# sourceMappingURL=commonHelpers.js.map