!function(){"use strict";var e=function(e){var t,n,o,s,i=(e=e||{}).delay||50;function l(){t=null,s=0}return l(),function(){return n=window.scrollY,null!=t&&(s=n-t),t=n,clearTimeout(o),o=setTimeout(l,i),Number(s)}}(),t=function(e,t){const n=t&&"local"!==t.toLowerCase()?sessionStorage:localStorage,o=function(t){n.setItem(e,JSON.stringify(t))},s=function(){return null!=n.getItem(e)};return Object.freeze({set:o,get:function(){return!!s()&&JSON.parse(n.getItem(e))},exists:s,create:function(){s()||o(arguments[0]||{})},remove:function(){n.removeItem(e)}})};class n{constructor(e){this.element=e,this.happened=!1,this.storageKey="popper-dismiss",this.oldScroll=null;const{dismiss:t}=e.dataset;if(this.isItemDismissed()&&t)return!1;this.isMobile=window.matchMedia("only screen and (max-width: 760px)").matches,this.init()}init(){this.bindOpen(),this.bindClose()}openModal(){this.closeModals(),this.element.classList.add("wp-block-popper-is-open"),this.happened=!0}closeModals(){var e=document.querySelectorAll(".wp-block-popper-is-open");for(let t=0;t<e.length;t++)e[t].classList.toggle("wp-block-popper-is-open")}closeModal(){this.element.classList.remove("wp-block-popper-is-open");var e=document.getElementsByTagName("iframe");for(let t of e)t.setAttribute("src",t.src);this.dismissModal()}dismissModal(){const{dismiss:e,anchor:t,created:n}=this.element.dataset;if(!e||!n||t)return!1;const o=new Date,s=JSON.parse(localStorage.getItem(this.storageKey))||[];if(s.some((e=>e.modalID===n)))return!1;const i=864e5*e,l={expiry:o.getTime()+i,modalID:n};localStorage.setItem(this.storageKey,JSON.stringify([...s,l]))}isItemDismissed(){const{created:e}=this.element.dataset,t=JSON.parse(localStorage.getItem(this.storageKey))||[],n=t.filter((t=>t.modalID===e));if(0===n.length)return!1;const o=n[0],s=new Date;if(o.expiry>s.getTime())return!0;const i=t.filter((e=>e!==n[0]));return localStorage.setItem(this.storageKey,JSON.stringify(i)),!1}bindOpen(){const{open:e}=this.element.dataset;switch(e){case"anchor":this.bindAnchors();break;case"pageviews":this.bindPageViews();break;case"target":this.bindTarget();break;case"scroll":this.bindOpenAfterScroll();break;case"exit":this.bindExitIntent(),this.bindExitIntentMobile();break;default:this.bindOnLoad()}}bindAnchors(){const{anchor:e}=this.element.dataset;if(!e)return!1;document.querySelectorAll(`#${e}`).forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),this.openModal()}))}))}bindOpenAfterScroll(){document.addEventListener("scroll",(()=>{if(this.happened)return!1;const{offset:e}=this.element.dataset;if(Number(e)>=this.getScrolledPercent())return!1;this.openModal()}))}bindOnLoad(){const{time:e}=this.element.dataset;setTimeout((()=>{this.openModal()}),1e3*e)}bindExitIntent(){document.addEventListener("mouseout",(e=>{if(this.happened)return!1;e.clientY<0&&this.openModal()}))}bindExitIntentMobile(){return!!this.isMobile&&!this.happened&&void(window.onscroll=()=>{setTimeout((()=>{-1*e()>50&&this.isScrollingUp()&&this.openModal(),this.oldScroll=window.scrollY}),5e3)})}bindTarget(){const{target:e}=this.element.dataset;window.onscroll=()=>this.isScrolledIntoView(e)}bindPageViews(){const{target:e}=this.element.dataset;document.addEventListener("DOMContentLoaded",this.hitcounter())}bindClose(){this.bindCloseButtons(),this.bindAnchorClose(),this.bindOverlayClosing(),this.bindFormClosing(),this.bindEscClosing()}bindAnchorClose(){const{anchorclose:e}=this.element.dataset;if(!e)return!1;document.querySelectorAll(`#${e}`).forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),this.closeModal()}))}))}bindCloseButtons(){this.element.querySelectorAll(".wp-block-popper__close").forEach((e=>{e.addEventListener("click",(()=>{this.closeModal()}))}))}bindOverlayClosing(){const{outside:e}=this.element.dataset;if("false"===e)return!1;const t=this.element.querySelector(".wp-block-popper__overlay");if(!t)return!1;t.addEventListener("click",(e=>{e.target==t&&this.closeModal()}))}bindEscClosing(){window.addEventListener("keydown",(e=>{27==e.keyCode&&this.closeModal()}))}bindFormClosing(){window.addEventListener("formello-success",(e=>{setTimeout((()=>{this.closeModal()}),1e3)}))}isScrolledIntoView(e){var t=document.getElementById(e);if(!t)return!1;var n=t.getBoundingClientRect(),o=n.top,s=n.bottom;o>=0&&s<=window.innerHeight&&this.openModal()}getScrolledPercent(){const e=document.documentElement,t=document.body,n="scrollTop",o="scrollHeight";return(e[n]||t[n])/((e[o]||t[o])-e.clientHeight)*100}isScrollingUp(){return this.oldScroll>window.scrollY}hitcounter(){let e=new t("urls","sessionStorage");e.create();let n=e.get();n[location.href]=n.hasOwnProperty(location.href)?parseInt(n[location.href])+1:1,n.total=n.hasOwnProperty("total")?parseInt(n.total)+1:1;const{pagenum:o}=this.element.dataset;n.total>=o&&this.openModal(),e.set(n)}}document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".wp-block-formello-popper");e.length&&e.forEach((e=>{new n(e)}))}))}();