!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=74)}({70:function(e,t,n){"use strict";var o,r=(o={tolerance:0,duration:800,easing:"easeOutQuart",container:window,callback:function(){}},i.prototype.registerTrigger=function(e,t){var n=this;if(e){var o,r,a=e.getAttribute("href")||e.getAttribute("data-target"),i=a&&"#"!==a?document.getElementById(a.substring(1)):document.body,s=c(this.options,(o=e,a=this.options,r={},Object.keys(a).forEach(function(e){var t=o.getAttribute("data-mt-".concat(e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})));t&&(r[e]=isNaN(t)?t:parseInt(t,10))}),r));"function"==typeof t&&(s.callback=t);var l=function(e){e.preventDefault(),n.move(i,s)};return e.addEventListener("click",l,!1),function(){return e.removeEventListener("click",l,!1)}}},i.prototype.move=function(o){var r,a,i,s,e,l=this,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};0!==o&&!o||(d=c(this.options,d),r="number"==typeof o?o:o.getBoundingClientRect().top,a=u(d.container),i=null,r-=d.tolerance,e=function e(t){var n=u(l.options.container),t=t-(i=i||t-1);if(s&&(0<r&&n<s||r<0&&s<n))return d.callback(o);s=n;n=l.easeFunctions[d.easing](t,a,r,d.duration);d.container.scroll(0,n),t<d.duration?window.requestAnimationFrame(e):(d.container.scroll(0,r+a),d.callback(o))},window.requestAnimationFrame(e))},i.prototype.addEaseFunction=function(e,t){this.easeFunctions[e]=t},i);function a(e,t,n,o){return e/=o,-n*(--e*e*e*e-1)+t}function c(t,n){var o={};return Object.keys(t).forEach(function(e){o[e]=t[e]}),Object.keys(n).forEach(function(e){o[e]=n[e]}),o}function u(e){return e instanceof HTMLElement?e.scrollTop:e.pageYOffset}function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.options=c(o,e),this.easeFunctions=c({easeOutQuart:a},t)}e.exports=r},71:function(e,t,n){e.exports=function(){"use strict";function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var o="undefined"!=typeof window,a=o&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=o&&"IntersectionObserver"in window,n=o&&"classList"in document.createElement("p"),s=o&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:a||o?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},l=function(e){return t({},r,e)},d=function(e,t){var n,o="LazyLoad::Initialized",r=new e(t);try{n=new CustomEvent(o,{detail:{instance:r}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,{instance:r})}window.dispatchEvent(n)},c="loading",u="loaded",f="applied",p="error",g="native",h="data-",v="ll-status",m=function(e,t){return e.getAttribute(h+t)},w=function(e){return m(e,v)},b=function(e,t){return function(e,t,n){var o="data-ll-status";null!==n?e.setAttribute(o,n):e.removeAttribute(o)}(e,0,t)},_=function(e){return b(e,null)},x=function(e){return null===w(e)},y=function(e){return w(e)===g},E=[c,u,f,p],k=function(e,t,n,o){e&&(void 0===o?void 0===n?e(t):e(t,n):e(t,n,o))},C=function(e,t){n?e.classList.add(t):e.className+=(e.className?" ":"")+t},L=function(e,t){n?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},N=function(e){return e.llTempImage},O=function(e,t){if(t){var n=t._observer;n&&n.unobserve(e)}},T=function(e,t){e&&(e.loadingCount+=t)},A=function(e,t){e&&(e.toLoadCount=t)},D=function(e){for(var t,n=[],o=0;t=e.children[o];o+=1)"SOURCE"===t.tagName&&n.push(t);return n},I=function(e,t,n){n&&e.setAttribute(t,n)},R=function(e,t){e.removeAttribute(t)},S=function(e){return!!e.llOriginalAttrs},M=function(e){if(!S(e)){var t={};t.src=e.getAttribute("src"),t.srcset=e.getAttribute("srcset"),t.sizes=e.getAttribute("sizes"),e.llOriginalAttrs=t}},P=function(e){if(S(e)){var t=e.llOriginalAttrs;I(e,"src",t.src),I(e,"srcset",t.srcset),I(e,"sizes",t.sizes)}},j=function(e,t){I(e,"sizes",m(e,t.data_sizes)),I(e,"srcset",m(e,t.data_srcset)),I(e,"src",m(e,t.data_src))},z=function(e){R(e,"src"),R(e,"srcset"),R(e,"sizes")},B=function(e,t){var n=e.parentNode;n&&"PICTURE"===n.tagName&&D(n).forEach(t)},F={IMG:function(e,t){B(e,function(e){M(e),j(e,t)}),M(e),j(e,t)},IFRAME:function(e,t){I(e,"src",m(e,t.data_src))},VIDEO:function(e,n){!function(e,t){D(e).forEach(function(e){I(e,"src",m(e,n.data_src))})}(e),I(e,"poster",m(e,n.data_poster)),I(e,"src",m(e,n.data_src)),e.load()}},K=function(e,t){var n=F[e.tagName];n&&n(e,t)},Q=function(e,t,n){T(n,1),C(e,t.class_loading),b(e,c),k(t.callback_loading,e,n)},q=["IMG","IFRAME","VIDEO"],G=function(e,t){!t||function(e){return e.loadingCount>0}(t)||function(e){return e.toLoadCount>0}(t)||k(e.callback_finish,t)},V=function(e,t,n){e.addEventListener(t,n),e.llEvLisnrs[t]=n},W=function(e,t,n){e.removeEventListener(t,n)},H=function(e){return!!e.llEvLisnrs},Y=function(e){if(H(e)){var t=e.llEvLisnrs;for(var n in t){var o=t[n];W(e,n,o)}delete e.llEvLisnrs}},U=function(e,t,n){!function(e){delete e.llTempImage}(e),T(n,-1),function(e){e&&(e.toLoadCount-=1)}(n),L(e,t.class_loading),t.unobserve_completed&&O(e,n)},X=function(t,n,o){var r=N(t)||t;H(r)||function(e,t,n){H(e)||(e.llEvLisnrs={});var o="VIDEO"===e.tagName?"loadeddata":"load";V(e,o,t),V(e,"error",n)}(r,function(e){!function(e,t,n,o){var r=y(t);U(t,n,o),C(t,n.class_loaded),b(t,u),k(n.callback_loaded,t,o),r||G(n,o)}(0,t,n,o),Y(r)},function(e){!function(e,t,n,o){var r=y(t);U(t,n,o),C(t,n.class_error),b(t,p),k(n.callback_error,t,o),r||G(n,o)}(0,t,n,o),Y(r)})},$=function(e,t,n){!function(e){e.llTempImage=document.createElement("IMG")}(e),X(e,t,n),function(e,t,n){var o=m(e,t.data_bg),r=m(e,t.data_bg_hidpi),a=s&&r?r:o;a&&(e.style.backgroundImage='url("'.concat(a,'")'),N(e).setAttribute("src",a),Q(e,t,n))}(e,t,n),function(e,t,n){var o=m(e,t.data_bg_multi),r=m(e,t.data_bg_multi_hidpi),a=s&&r?r:o;a&&(e.style.backgroundImage=a,function(e,t,n){C(e,t.class_applied),b(e,f),t.unobserve_completed&&O(e,t),k(t.callback_applied,e,n)}(e,t,n))}(e,t,n)},Z=function(e,t,n){!function(e){return q.indexOf(e.tagName)>-1}(e)?$(e,t,n):function(e,t,n){X(e,t,n),K(e,t),Q(e,t,n)}(e,t,n)},J=["IMG","IFRAME"],ee=function(e){return e.use_native&&"loading"in HTMLImageElement.prototype},te=function(e,t,n){e.forEach(function(e){return function(e){return e.isIntersecting||e.intersectionRatio>0}(e)?function(e,t,n,o){b(e,"entered"),C(e,n.class_entered),L(e,n.class_exited),function(e,t,n){t.unobserve_entered&&O(e,n)}(e,n,o),k(n.callback_enter,e,t,o),function(e){return E.indexOf(w(e))>=0}(e)||Z(e,n,o)}(e.target,e,t,n):function(e,t,n,o){x(e)||(C(e,n.class_exited),function(e,t,n,o){n.cancel_on_exit&&function(e){return w(e)===c}(e)&&"IMG"===e.tagName&&(Y(e),function(e){B(e,function(e){z(e)}),z(e)}(e),function(e){B(e,function(e){P(e)}),P(e)}(e),L(e,n.class_loading),T(o,-1),_(e),k(n.callback_cancel,e,t,o))}(e,t,n,o),k(n.callback_exit,e,t,o))}(e.target,e,t,n)})},ne=function(e){return Array.prototype.slice.call(e)},oe=function(e){return e.container.querySelectorAll(e.elements_selector)},re=function(e){return function(e){return w(e)===p}(e)},ae=function(e,t){return function(e){return ne(e).filter(x)}(e||oe(t))},e=function(e,t){var n=l(e);this._settings=n,this.loadingCount=0,function(t,n){i&&!ee(t)&&(n._observer=new IntersectionObserver(function(e){te(e,t,n)},function(e){return{root:e.container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}}(t)))}(n,this),function(e,t){o&&window.addEventListener("online",function(){!function(t,e){var n;(n=oe(t),ne(n).filter(re)).forEach(function(e){L(e,t.class_error),_(e)}),e.update()}(e,t)})}(n,this),this.update(t)};return e.prototype={update:function(e){var t,n,o=this._settings,r=ae(e,o);A(this,r.length),!a&&i?ee(o)?function(e,t,n){e.forEach(function(e){-1!==J.indexOf(e.tagName)&&(e.setAttribute("loading","lazy"),function(e,t,n){X(e,t,n),K(e,t),b(e,g)}(e,t,n))}),A(n,0)}(r,o,this):(n=r,function(e){e.disconnect()}(t=this._observer),function(t,e){e.forEach(function(e){t.observe(e)})}(t,n)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),oe(this._settings).forEach(function(e){delete e.llOriginalAttrs}),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){var t=this,n=this._settings;ae(e,n).forEach(function(e){O(e,t),Z(e,n,t)})}},e.load=function(e,t){var n=l(t);Z(e,n)},e.resetStatus=function(e){_(e)},o&&function(e,t){if(t)if(t.length)for(var n,o=0;n=t[o];o+=1)d(e,n);else d(e,t)}(e,window.lazyLoadOptions),e}()},74:function(e,t,n){e.exports=n(75)},75:function(e,t,n){"use strict";n.r(t);var o=n(70),r=n.n(o),t=n(71),o=n.n(t),t=n(76),t=n(77);document.body.classList.remove("no-js"),document.body.classList.add("js"),(new o.a).update(),function(r){var n=r(".back-to-top").offset(),e=r(".block");r(document).scroll(function(){e.each(function(e){var t=r(this).offset().top-r(window).scrollTop();if(t<n.top&&0<t+r(this).height())return r(".back-to-top").removeClass("has-light-bg has-dark-bg").addClass(r(this).hasClass("has-light-bg")?"has-light-bg":"has-dark-bg"),!1})}),r.fn.isInViewport=function(){var e=r(this).offset().top,t=e+r(this).outerHeight(),n=r(window).scrollTop(),o=n+r(window).height();return n<t&&e<o},r(window).on("resize scroll",function(){r(".block").each(function(){r(this).isInViewport()&&r(".back-to-top").removeClass("has-light-bg has-dark-bg").addClass(r(this).hasClass("has-light-bg")?"has-light-bg":"has-dark-bg")})});var o=new RegExp(location.host);r("a").each(function(){var e,t=r(this).attr("aria-label");o.test(r(this).attr("href"))||t||"#content"!==r(this).attr("href")&&(e=r(this).text(),r(this).addClass("is-external-link"),r(this).attr("aria-label",air_light_screenReaderText.external_link+" "+e)),o.test(r(this).attr("href"))||t||"_blank"!==r(this).attr("target")||r(this).attr("aria-label",air_light_screenReaderText.external_link+", "+air_light_screenReaderText.target_blank+" "+e)}),r(window).scroll(function(){var e=".back-to-top";300<r(this).scrollTop()?r(e).addClass("is-visible"):r(e).removeClass("is-visible"),1200<r(this).scrollTop()?r(e).addClass("fade-out"):r(e).removeClass("fade-out")}),r(function(){})}(jQuery),document.addEventListener("DOMContentLoaded",function(){for(var e=new r.a({ease:"easeInQuad"},{easeInQuad:function(e,t,n,o){return n*(e/=o)*e+t},easeOutQuad:function(e,t,n,o){return-n*(e/=o)*(e-2)+t}}),t=document.getElementsByClassName("js-trigger"),n=0;n<t.length;n++)e.registerTrigger(t[n])})},76:function(e,t,n){var o;o=function(){return r={},n.m=o=[function(e,t){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var t=document.documentElement,n=null,r="initial",a=r,o=Date.now(),i="false",s=["button","input","select","textarea"],l=[],d=[16,17,18,91,93],c=[],u={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch",touchend:"touch"},f=!1,p={x:null,y:null},g={2:"touch",3:"touch",4:"mouse"},h=!1;try{var e=Object.defineProperty({},"passive",{get:function(){h=!0}});window.addEventListener("test",null,e)}catch(e){}var v=function(){var e=!!h&&{passive:!0};document.addEventListener("DOMContentLoaded",m),window.PointerEvent?(window.addEventListener("pointerdown",w),window.addEventListener("pointermove",_)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",w),window.addEventListener("MSPointerMove",_)):(window.addEventListener("mousedown",w),window.addEventListener("mousemove",_),"ontouchstart"in window&&(window.addEventListener("touchstart",w,e),window.addEventListener("touchend",w))),window.addEventListener(L(),_,e),window.addEventListener("keydown",w),window.addEventListener("keyup",w),window.addEventListener("focusin",x),window.addEventListener("focusout",y)},m=function(){if(i=!(t.getAttribute("data-whatpersist")||"false"===document.body.getAttribute("data-whatpersist")))try{window.sessionStorage.getItem("what-input")&&(r=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(a=window.sessionStorage.getItem("what-intent"))}catch(e){}b("input"),b("intent")},w=function(e){var t=e.which,n=u[e.type];"pointer"===n&&(n=k(e));var o=!c.length&&-1===d.indexOf(t),e=c.length&&-1!==c.indexOf(t),e="keyboard"===n&&t&&(o||e)||"mouse"===n||"touch"===n;C(n)&&(e=!1),e&&r!==n&&(E("input",r=n),b("input")),!e||a===n||(e=document.activeElement)&&e.nodeName&&(-1===s.indexOf(e.nodeName.toLowerCase())||"button"===e.nodeName.toLowerCase()&&!T(e,"form"))&&(E("intent",a=n),b("intent"))},b=function(e){t.setAttribute("data-what"+e,"input"===e?r:a),N(e)},_=function(e){var t=u[e.type];"pointer"===t&&(t=k(e)),O(e),(!f&&!C(t)||f&&"wheel"===e.type||"mousewheel"===e.type||"DOMMouseScroll"===e.type)&&a!==t&&(E("intent",a=t),b("intent"))},x=function(e){e.target.nodeName?(n=e.target.nodeName.toLowerCase(),t.setAttribute("data-whatelement",n),e.target.classList&&e.target.classList.length&&t.setAttribute("data-whatclasses",e.target.classList.toString().replace(" ",","))):y()},y=function(){n=null,t.removeAttribute("data-whatelement"),t.removeAttribute("data-whatclasses")},E=function(e,t){if(i)try{window.sessionStorage.setItem("what-"+e,t)}catch(e){}},k=function(e){return"number"==typeof e.pointerType?g[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},C=function(e){var t=Date.now(),e="mouse"===e&&"touch"===r&&t-o<200;return o=t,e},L=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},N=function(e){for(var t=0,n=l.length;t<n;t++)l[t].type===e&&l[t].fn.call(void 0,"input"===e?r:a)},O=function(e){p.x!==e.screenX||p.y!==e.screenY?(f=!1,p.x=e.screenX,p.y=e.screenY):f=!0},T=function(e,t){var n=window.Element.prototype;if(n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest)return e.closest(t);do{if(e.matches(t))return e}while(null!==(e=e.parentElement||e.parentNode)&&1===e.nodeType);return null};return"addEventListener"in window&&Array.prototype.indexOf&&(u[L()]="mouse",v()),{ask:function(e){return"intent"===e?a:r},element:function(){return n},ignoreKeys:function(e){d=e},specificKeys:function(e){c=e},registerOnChange:function(e,t){l.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){e=function(e){for(var t=0,n=l.length;t<n;t++)if(l[t].fn===e)return t}(e);!e&&0!==e||l.splice(e,1)},clearStorage:function(){window.sessionStorage.clear()}}}()}],n.c=r,n.p="",n(0);function n(e){if(r[e])return r[e].exports;var t=r[e]={exports:{},id:e,loaded:!1};return o[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var o,r},e.exports=o()},77:function(e,t){!function(n){var o=!1;n(window).keydown(function(e){13===e.which&&(o=!0)}).keyup(function(e){13===e.which&&(o=!1)}),n(".menu-item-has-children").hover(function(){n(this).addClass("hover-intent")},function(){var e=this;setTimeout(function(){n(e).removeClass("hover-intent")},100)});var e,t,r,a,i,s,l,d,c,u=n(".nav-container"),f=u.find("#nav-toggle"),p=u.find("#main-navigation-wrapper"),g=u.find("#nav");if(f.length&&(window.innerWidth<960&&f.add(g).attr("aria-expanded","false"),f.on("click",function(){n(this).add(p).toggleClass("toggled-on"),n(this).attr("aria-expanded","false"===n(this).attr("aria-expanded")?"true":"false"),n("#nav-toggle-label").text(n("#nav-toggle-label").text()===air_light_screenReaderText.expand_toggle?air_light_screenReaderText.collapse_toggle:air_light_screenReaderText.expand_toggle),n(this).attr("aria-label",n(this).attr("aria-label")===air_light_screenReaderText.expand_toggle?air_light_screenReaderText.collapse_toggle:air_light_screenReaderText.expand_toggle),n(this).add(g).attr("aria-expanded","false"===n(this).add(g).attr("aria-expanded")?"true":"false")})),n(".menu-item a, .dropdown button").on("keyup",function(){0!==n(".dropdown").find(":focus").length&&27===event.keyCode&&(thisDropdown=n(this).parent().parent().parent(),screenReaderSpan=thisDropdown.find(".screen-reader-text"),dropdownToggle=thisDropdown.find(".dropdown-toggle"),thisDropdown.find(".sub-menu").removeClass("toggled-on"),thisDropdown.find(".dropdown-toggle").removeClass("toggled-on"),thisDropdown.find(".dropdown").removeClass("toggled-on"),dropdownToggle.attr("aria-expanded","false"),screenReaderSpan.text(air_light_screenReaderText.expand),thisDropdown.find(".dropdown-toggle:first").focus()),960<window.innerWidth&&(prevDropdown=n(this).parent().prev(),screenReaderSpanPrev=prevDropdown.find(".screen-reader-text"),dropdownTogglePrev=prevDropdown.find(".dropdown-toggle"),prevDropdown.find(".sub-menu").removeClass("toggled-on"),prevDropdown.find(".dropdown-toggle").removeClass("toggled-on"),prevDropdown.find(".dropdown").removeClass("toggled-on"),dropdownTogglePrev.attr("aria-expanded","false"),screenReaderSpanPrev.text(air_light_screenReaderText.expand),nextDropdown=n(this).parent().next(),screenReaderSpanNext=nextDropdown.find(".screen-reader-text"),dropdownToggleNext=nextDropdown.find(".dropdown-toggle"),nextDropdown.find(".sub-menu").removeClass("toggled-on"),nextDropdown.find(".dropdown-toggle").removeClass("toggled-on"),nextDropdown.find(".dropdown").removeClass("toggled-on"),dropdownToggleNext.attr("aria-expanded","false"),screenReaderSpanNext.text(air_light_screenReaderText.expand))}),p.find(".menu-item-has-children").attr("aria-haspopup","true"),n(".dropdown-toggle").each(function(){n(this).attr("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(n(this).prev().text()))}),p.find(".dropdown-toggle").click(function(e){var t;(o||window.innerWidth<960)&&(t=n(this).nextAll(".sub-menu"),e.preventDefault(),n(this).toggleClass("toggled-on"),t.toggleClass("toggled-on"),n(this).attr("aria-expanded","false"===n(this).attr("aria-expanded")?"true":"false"),n(this).attr("aria-label",(n(this).attr("aria-label")==="".concat(air_light_screenReaderText.collapse_for," ").concat(n(this).prev().text())?"".concat(air_light_screenReaderText.expand_for," "):"".concat(air_light_screenReaderText.collapse_for," ")).concat(n(this).prev().text())))}),n(".sub-menu .menu-item-has-children").parent(".sub-menu").addClass("has-sub-menu"),n(".menu-item a, button.dropdown-toggle").on("keydown",function(e){if(-1!=[37,38,39,40].indexOf(e.keyCode))switch(e.keyCode){case 37:e.preventDefault(),e.stopPropagation(),(n(this).hasClass("dropdown-toggle")?n(this).prev("a"):n(this).parent().prev().children("button.dropdown-toggle").length?n(this).parent().prev().children("button.dropdown-toggle"):n(this).parent().prev().children("a")).focus(),n(this).is("ul ul ul.sub-menu.toggled-on li:first-child a")&&n(this).parents("ul.sub-menu.toggled-on li").children("button.dropdown-toggle").focus();break;case 39:e.preventDefault(),e.stopPropagation(),(n(this).next("button.dropdown-toggle").length?n(this).next("button.dropdown-toggle"):n(this).parent().next().find("input").length?n(this).parent().next().find("input"):n(this).parent().next().children("a")).focus(),n(this).is("ul.sub-menu .dropdown-toggle.toggled-on")&&n(this).parent().find("ul.sub-menu li:first-child a").focus();break;case 40:e.preventDefault(),e.stopPropagation(),(n(this).next().length?n(this).next().find("li:first-child a").first():n(this).parent().next().find("input").length?n(this).parent().next().find("input"):n(this).parent().next().children("a")).focus(),n(this).is("ul.sub-menu a")&&n(this).next("button.dropdown-toggle").length&&n(this).parent().next().children("a").focus(),n(this).is("ul.sub-menu .dropdown-toggle")&&n(this).parent().next().children(".dropdown-toggle").length&&n(this).parent().next().children(".dropdown-toggle").focus();break;case 38:e.preventDefault(),e.stopPropagation(),(n(this).parent().prev().length?n(this).parent().prev().children("a"):n(this).parents("ul").first().prev(".dropdown-toggle.toggled-on")).focus(),n(this).is("ul.sub-menu .dropdown-toggle")&&n(this).parent().prev().children(".dropdown-toggle").length&&n(this).parent().prev().children(".dropdown-toggle").focus()}}),r=document.getElementById("nav"),r&&void 0!==(a=document.getElementById("nav-toggle")))if(e=document.getElementsByTagName("html")[0],t=document.getElementsByTagName("body")[0],i=r.getElementsByTagName("ul")[0],s=document.getElementById("main-navigation-wrapper"),void 0!==i){if(window.innerWidth<960&&i.setAttribute("aria-expanded","false"),-1===i.className.indexOf("nav-menu")&&(i.className+=" nav-menu"),window.innerWidth<960){var h=null,v=null;navElements=r.querySelectorAll([".nav-primary a[href]",".nav-primary button"]);for(var m=0;m<navElements.length;m++)navElements[m].addEventListener("keydown",_)}for(a.onclick=function(){-1!==r.className.indexOf("is-active")?w():(e.className+=" disable-scroll",t.className+=" js-nav-active",r.className+=" is-active",a.className+=" is-active",a.setAttribute("aria-expanded","true"),i.setAttribute("aria-expanded","true"),a.addEventListener("keydown",_,!1))},document.addEventListener("keyup",function(e){27==e.keyCode&&-1!==r.className.indexOf("is-active")&&w()}),s.onclick=function(e){e.target==s&&-1!==r.className.indexOf("is-active")&&w()},l=i.getElementsByTagName("a"),i.getElementsByTagName("ul"),m=0,d=l.length;m<d;m++)l[m].addEventListener("focus",b,!0),l[m].addEventListener("blur",b,!0)}else a.style.display="none";function w(){a.removeEventListener("keydown",_,!1),e.className=e.className.replace(" disable-scroll",""),t.className=t.className.replace(" js-nav-active",""),r.className=r.className.replace(" is-active",""),a.className=a.className.replace(" is-active",""),a.setAttribute("aria-expanded","false"),i.setAttribute("aria-expanded","false"),a.focus()}function b(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}function _(e){c=r.querySelectorAll([".sub-menu.toggled-on > li a[href]",'ul[aria-expanded="true"] > li > a[href]',"area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",".sub-menu.toggled-on > li > button:not([disabled]):not(.toggled-on)",'ul[aria-expanded="true"] > li > button:not([disabled]):not(.toggled-on)',"iframe","object","embed","[contenteditable]",NaN]),h=c[0],(v=c[c.length-1])!==e.target||9!==e.keyCode||e.shiftKey||(e.preventDefault(),a.focus()),h===e.target&&9===e.keyCode&&e.shiftKey&&(e.preventDefault(),a.focus()),a===e.target&&9===e.keyCode&&e.shiftKey&&(e.preventDefault(),v.focus())}}(jQuery)}});