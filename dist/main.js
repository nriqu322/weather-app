!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=n[s]||0,d="".concat(s," ").concat(u);n[s]=u+1;var l=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:d,updater:h(f,t),references:1}),r.push(d)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,y=0;function h(e,t){var n,r,o;if(t.singleton){var i=y++;n=m||(m=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),u=0;u<n.length;u++){var d=c(n[u]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(e,t,n){var r=n(3),o=n(5),i=n(6);t=r(!1);var a=o(i);t.push([e.i,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-image: url("+a+");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100vh;\n  color: #fff;\n}\n\n.first-message {\n  font-size: 58px;\n  font-weight: bold;\n  max-width: 700px;\n  text-align: center;\n  margin: auto;\n}\n\n.selected {\n  color: #fff;\n  font-weight: bolder;\n}\n\n.units {\n  font-size: 36px;\n  margin: auto;\n  cursor: pointer;\n  color: lightgray;\n}\n\n.main-content {\n  display: none;\n}\n\nheader {\n  text-align: center;\n}\n\n.search-bar {\n  max-width: 320px;\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 25px;\n}\n\n.main-card {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 250px;\n}\n\n.city-name {\n  font-size: 32px;\n}\n\n.description {\n  font-size: 28px;\n  font-weight: 700;\n}\n\n.temperature {\n  font-size: 72px;\n}\n\n.bottom-container {\n  width: 100%;\n  font-size: 16px;\n}\n\n.error-message {\n  visibility: hidden;\n}\n\n.forecast-card {\n  text-align: center;\n  border-radius: 25px;\n  box-shadow: 2px 1px 5px 2px rgba(241, 229, 52, 0.801);\n}\n\n.temp-forecast {\n  font-size: 26px;\n}\n\n.icon-forecast {\n  height: 85px;\n}\n\n.forecast-day {\n  text-transform: uppercase;\n  font-size: 26px;\n}\n\n.gift-container {\n  height: 250px;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var r=()=>{const e="175ed9516bf5a7c853e693c92bba596b",t="https://api.openweathermap.org/data/2.5/",n=document.querySelector(".search-bar"),r=document.querySelector(".error-message");let o="C";const i=document.querySelector(".celcius"),a=document.querySelector(".farenheit");i.addEventListener("click",()=>{i.classList.add("selected"),a.classList.remove("selected"),o="C"}),a.addEventListener("click",()=>{a.classList.add("selected"),i.classList.remove("selected"),o="F"}),n.addEventListener("keypress",(function(i){13===i.keyCode&&(""!==n.value?(!async function(n,o){try{const r=await fetch(`${t}weather?q=${n}&units=${"C"===o?"metric":"imperial"}&APPID=${e}`,{mode:"cors"}),i=await r.json();document.querySelector(".main-content").classList.add("d-flex","justify-content-around"),((e,t)=>{document.querySelector(".first-message").style.display="none";document.querySelector(".city-name").textContent=`${e.name}, ${e.sys.country}`;document.querySelector(".city-date").textContent=c().weatherDate;document.querySelector(".temperature").textContent=`${e.main.temp.toFixed(0)}°${t}`;document.querySelector(".description").textContent=""+e.weather[0].description;document.querySelector(".wind").textContent=e.wind.speed+" km/h";document.querySelector(".humidity").textContent=e.main.humidity+"%";document.querySelector(".feel-like").textContent=`${e.main.feels_like.toFixed(0)}°${t}`;document.querySelector(".min-max").textContent=`${e.main.temp_min.toFixed(0)}°${t} / ${e.main.temp_max.toFixed(0)}°${t}`})(i,o)}catch(e){r.style.visibility="visible",r.textContent="City not found";document.querySelector(".main-content").classList.remove("d-flex","justify-content-around")}}(n.value,o),async function(n,o){try{const r=await fetch(`${t}forecast?q=${n}&units=${"C"===o?"metric":"imperial"}&appid=${e}`,{mode:"cors"}),i=await r.json();(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(document.querySelector(".forecast")),((e,t)=>{for(let n=0;n<e.list.length;n+=1)e.list[n].dt_txt===c().forecastDate&&(s(e,n,c().dayDescrip(1),t),s(e,n+8,c().dayDescrip(2),t),s(e,n+16,c().dayDescrip(3),t),s(e,n+24,c().dayDescrip(4),t),s(e,n+32,c().dayDescrip(5),t))})(i,o)}catch(e){r.style.visibility="visible",r.textContent="City not found"}}(n.value,o),async function(){try{const e=await fetch("https://api.giphy.com/v1/gifs/translate?api_key=JbHdX4EguTWZ7yIGmJ4qJDtoBI2LuUg7&s=weather",{mode:"cors"});(e=>{document.querySelector(".gift-container").src=e.data.images.original.url})(await e.json())}catch(e){r.style.visibility="visible",r.textContent="Gift not found"}}(),n.value="",r.style.visibility="hidden"):(r.style.visibility="visible",r.textContent="Please enter a city name"))}));const c=()=>{const e=new Date,t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=n=>t[e.getDay()+n],r=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],o=e.getFullYear();let i="",a="";i=e.getMonth()<10?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate()<10?"0"+e.getDate():e.getDate()+1;return{weatherDate:`${n(0)} ${a}, ${r} ${o}`,forecastDate:`${o}-${i}-${a} 09:00:00`,dayDescrip:n,monthDescrip:r}},s=(e,t,n,r)=>{const o=document.querySelector(".forecast"),i=document.createElement("div");i.classList.add("forecast-card","my-5","p-3","mx-2"),o.appendChild(i);const a=document.createElement("div");a.classList.add("forecast-day"),a.textContent=n,i.appendChild(a);const c=document.createElement("img");c.classList.add("icon-forecast"),c.src=`http://openweathermap.org/img/w/${e.list[t].weather[0].icon}.png`,i.appendChild(c);const s=document.createElement("div");s.classList.add("temp-forecast"),s.textContent=`${e.list[t].main.temp.toFixed(0)}°${r}`,i.appendChild(s);const u=document.createElement("div");u.classList.add(".min-max-forecast"),u.textContent=`${e.list[t].main.temp_min.toFixed(0)}°${r} / ${e.list[t].main.temp_max.toFixed(0)}°${r}`}},o=n(7);r(),Object(o.switchToFarenheit)(),Object(o.switchToCelcius)()},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"9e27da8ff28b7242ad09ac24617bf1f5.jpg"},function(e,t){}]);