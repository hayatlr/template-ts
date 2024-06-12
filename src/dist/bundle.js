(()=>{"use strict";var n={208:(n,r,e)=>{e.d(r,{A:()=>s});var t=e(372),o=e.n(t),i=e(314),A=e.n(i)()(o());A.push([n.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    background-color: #fcfaf1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#add-clock-button {\r\n    padding: 10px 20px;\r\n    background-color: #0072c6;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n#add-clock-button:hover {\r\n    background-color: #005b99;\r\n}\r\n\r\n.controls {\r\n    display: flex;\r\n    gap: 10px;\r\n    margin-top: 20px;\r\n    align-items: center;\r\n}\r\n\r\n#timezone-selector {\r\n    padding: 5px;\r\n    font-size: 14px;\r\n    border: 1px solid #0072c6;\r\n    border-radius: 5px;\r\n    width: 150px;\r\n    height: 36px; /* Ajustez la hauteur pour qu'elle soit cohérente avec le bouton */\r\n}\r\n\r\n.clocks {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 20px;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.circle {\r\n    position: relative;\r\n    width: 180px;\r\n    height: 180px;\r\n    background-color: #0072c6;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.watch {\r\n    position: relative;\r\n    width: 180px;\r\n    height: 180px;\r\n    background-color: #0072c6;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.screen {\r\n    width: 100px;\r\n    height: 60px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 2px solid #00c68e;\r\n}\r\n\r\n.time {\r\n    font-size: 20px;\r\n    text-align: center;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.time .seconds {\r\n    font-size: 10px;\r\n    margin-left: 2px;\r\n    align-self: flex-end;\r\n}\r\n\r\n.button {\r\n    position: absolute;\r\n    width: 60px;\r\n    height: 20px;\r\n    background-color: #7ec0ee;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 14px;\r\n    color: #0072c6;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.button:hover {\r\n    background-color: #b0e0e6; /* Slightly lighter blue for hover effect */\r\n}\r\n\r\n.mode {\r\n    top: 5px;\r\n    right: 5px;\r\n    transform: rotate(40deg);\r\n}\r\n\r\n.increase {\r\n    bottom: 5px;\r\n    right: 5px;\r\n    transform: rotate(-35deg);\r\n}\r\n\r\n.light {\r\n    bottom: 5px;\r\n    left: 5px;\r\n    transform: rotate(35deg);\r\n    transform-origin: center;\r\n}\r\n\r\n.reset {\r\n    top: 5px;\r\n    left: 5px;\r\n    transform: rotate(-40deg);\r\n}\r\n\r\n.toggle-format {\r\n    top: px;\r\n    right: 15px;\r\n    transform: rotate(0deg);\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #7ec0ee;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.toggle-format:hover {\r\n    background-color: #b0e0e6;\r\n}\r\n\r\nbody.night-mode {\r\n    background-color: black;\r\n}\r\n\r\nbody.night-mode .screen {\r\n    background-color: black;\r\n    color: white;\r\n    border: 2px solid #00c68e;\r\n}\r\n\r\nbody.night-mode .time {\r\n    color: white;\r\n}\r\n\r\nbody.night-mode .seconds {\r\n    color: #00c68e;\r\n}\r\n\r\n.logo {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    width: 50px;\r\n    height: 50px;\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.logo:hover {\r\n    transform: scale(1.2);\r\n}\r\n.ampm {\r\n    font-size: 12px;\r\n    vertical-align: super;\r\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,YAAY,EAAE,kEAAkE;AACpF;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,cAAc;IACd,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,yBAAyB,EAAE,2CAA2C;AAC1E;;AAEA;IACI,QAAQ;IACR,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,SAAS;IACT,wBAAwB;IACxB,wBAAwB;AAC5B;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,OAAO;IACP,WAAW;IACX,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,qBAAqB;AACzB",sourcesContent:["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    background-color: #fcfaf1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#add-clock-button {\r\n    padding: 10px 20px;\r\n    background-color: #0072c6;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n#add-clock-button:hover {\r\n    background-color: #005b99;\r\n}\r\n\r\n.controls {\r\n    display: flex;\r\n    gap: 10px;\r\n    margin-top: 20px;\r\n    align-items: center;\r\n}\r\n\r\n#timezone-selector {\r\n    padding: 5px;\r\n    font-size: 14px;\r\n    border: 1px solid #0072c6;\r\n    border-radius: 5px;\r\n    width: 150px;\r\n    height: 36px; /* Ajustez la hauteur pour qu'elle soit cohérente avec le bouton */\r\n}\r\n\r\n.clocks {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 20px;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.circle {\r\n    position: relative;\r\n    width: 180px;\r\n    height: 180px;\r\n    background-color: #0072c6;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.watch {\r\n    position: relative;\r\n    width: 180px;\r\n    height: 180px;\r\n    background-color: #0072c6;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.screen {\r\n    width: 100px;\r\n    height: 60px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 2px solid #00c68e;\r\n}\r\n\r\n.time {\r\n    font-size: 20px;\r\n    text-align: center;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.time .seconds {\r\n    font-size: 10px;\r\n    margin-left: 2px;\r\n    align-self: flex-end;\r\n}\r\n\r\n.button {\r\n    position: absolute;\r\n    width: 60px;\r\n    height: 20px;\r\n    background-color: #7ec0ee;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 14px;\r\n    color: #0072c6;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.button:hover {\r\n    background-color: #b0e0e6; /* Slightly lighter blue for hover effect */\r\n}\r\n\r\n.mode {\r\n    top: 5px;\r\n    right: 5px;\r\n    transform: rotate(40deg);\r\n}\r\n\r\n.increase {\r\n    bottom: 5px;\r\n    right: 5px;\r\n    transform: rotate(-35deg);\r\n}\r\n\r\n.light {\r\n    bottom: 5px;\r\n    left: 5px;\r\n    transform: rotate(35deg);\r\n    transform-origin: center;\r\n}\r\n\r\n.reset {\r\n    top: 5px;\r\n    left: 5px;\r\n    transform: rotate(-40deg);\r\n}\r\n\r\n.toggle-format {\r\n    top: px;\r\n    right: 15px;\r\n    transform: rotate(0deg);\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #7ec0ee;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.toggle-format:hover {\r\n    background-color: #b0e0e6;\r\n}\r\n\r\nbody.night-mode {\r\n    background-color: black;\r\n}\r\n\r\nbody.night-mode .screen {\r\n    background-color: black;\r\n    color: white;\r\n    border: 2px solid #00c68e;\r\n}\r\n\r\nbody.night-mode .time {\r\n    color: white;\r\n}\r\n\r\nbody.night-mode .seconds {\r\n    color: #00c68e;\r\n}\r\n\r\n.logo {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    width: 50px;\r\n    height: 50px;\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.logo:hover {\r\n    transform: scale(1.2);\r\n}\r\n.ampm {\r\n    font-size: 12px;\r\n    vertical-align: super;\r\n}"],sourceRoot:""}]);const s=A},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var A=this[i][0];null!=A&&(o[A]=!0)}for(var s=0;s<n.length;s++){var a=[].concat(n[s]);t&&o[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),r.push(a))}},r}},372:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,o=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,o,i=[],A=!0,s=!1;try{for(e=e.call(n);!(A=(t=e.next()).done)&&(i.push(t.value),!r||i.length!==r);A=!0);}catch(n){s=!0,o=n}finally{try{A||null==e.return||e.return()}finally{if(s)throw o}}return i}}(e,t)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],A=o[3];if(!A)return i;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),c="/*# ".concat(a," */"),l=A.sources.map((function(n){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(n," */")}));return[i].concat(l).concat([c]).join("\n")}return[i].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},A=[],s=0;s<n.length;s++){var a=n[s],c=t.base?a[0]+t.base:a[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var u=e(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:d,updater:o(p,t),references:1}),A.push(d)}return A}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<i.length;A++){var s=e(i[A]);r[s].references--}for(var a=t(n,o),c=0;c<i.length;c++){var l=e(i[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=a}}},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(72),r=e.n(n),t=e(825),o=e.n(t),i=e(659),A=e.n(i),s=e(56),a=e.n(s),c=e(540),l=e.n(c),d=e(113),u=e.n(d),p=e(208),h={};h.styleTagTransform=u(),h.setAttributes=a(),h.insert=A().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),r()(p.A,h),p.A&&p.A.locals&&p.A.locals;var f=function(){function n(){this.time=new Date}return n.prototype.changeTimeZone=function(n){var r=this.time.getUTCHours();this.time.setHours(r+n)},n.prototype.addHour=function(){this.time.setHours(this.time.getHours()+1)},n.prototype.addMinute=function(){this.time.setMinutes(this.time.getMinutes()+1)},n.prototype.incrementSeconds=function(){this.time.setSeconds(this.time.getSeconds()+1)},n.prototype.getTime=function(){return this.time},n}(),m=function(){function n(n,r,e,t,o,i,A){this.timeElement=n,this.modeButton=r,this.increaseButton=e,this.lightButton=t,this.resetButton=o,this.toggleFormatButton=i,this.timeZoneOffset=A,this.editMode="none",this.isNightMode=!1,this.is24HourFormat=!0,this.time=new f,this.modeButton.addEventListener("click",this.switchEditMode.bind(this)),this.increaseButton.addEventListener("click",this.increaseTime.bind(this)),this.lightButton.addEventListener("click",this.switchToLightMode.bind(this)),this.resetButton.addEventListener("click",this.resetTime.bind(this)),this.toggleFormatButton.addEventListener("click",this.toggleTimeFormat.bind(this)),this.start()}return n.prototype.start=function(){var n=this;this.updateClockDisplay(),this.timer=window.setInterval((function(){n.time.incrementSeconds(),n.updateClockDisplay()}),1e3)},n.prototype.switchEditMode=function(){switch(this.editMode){case"none":this.editMode="hours";break;case"hours":this.editMode="minutes";break;case"minutes":this.editMode="none"}console.log("Edit mode:",this.editMode)},n.prototype.increaseTime=function(){"hours"===this.editMode?this.time.addHour():"minutes"===this.editMode&&this.time.addMinute(),this.updateClockDisplay()},n.prototype.switchToLightMode=function(){this.isNightMode=!this.isNightMode,document.body.classList.toggle("night-mode",this.isNightMode)},n.prototype.resetTime=function(){this.time=new f,this.updateClockDisplay()},n.prototype.toggleTimeFormat=function(){this.is24HourFormat=!this.is24HourFormat,this.updateClockDisplay()},n.prototype.updateClockDisplay=function(){var n=this.time.getTime(),r=n.getHours(),e=n.getMinutes().toString().padStart(2,"0"),t=n.getSeconds().toString().padStart(2,"0"),o="";this.is24HourFormat||(o=r>=12?"PM":"AM",r=(r%=12)||12);var i=r.toString().padStart(2,"0");this.timeElement.innerHTML="".concat(i,":").concat(e,'<span class="seconds">').concat(t,'</span> <span class="ampm">').concat(o,"</span>")},n}(),g=function(){function n(n){this.rootElement=n,this.watches=[],this.initializeClocks()}return n.prototype.initializeClocks=function(){var n=this;this.rootElement.querySelectorAll(".circle").forEach((function(r){n.createWatch(r,0)}))},n.prototype.createWatch=function(n,r){var e=n.querySelector(".time"),t=n.querySelector(".mode"),o=n.querySelector(".increase"),i=n.querySelector(".light"),A=n.querySelector(".reset"),s=n.querySelector(".toggle-format");if(e&&t&&o&&i&&A&&s){var a=new m(e,t,o,i,A,s,r);this.watches.push(a)}else console.error("One or more required elements were not found in a clock.")},n.prototype.addClock=function(n){var r=document.createElement("div");r.classList.add("circle"),r.innerHTML='\n            <div class="watch">\n                <div class="screen">\n                    <div class="time">00:00<span class="seconds">00</span></div>\n                    <div class="button mode">mode</div>\n                    <div class="button increase">increase</div>\n                    <div class="button light">light</div>\n                    <div class="button reset">reset</div>\n                    <div class="button toggle-format"></div>\n                </div>\n            </div>\n        ',this.rootElement.appendChild(r),this.createWatch(r,n)},n}();document.addEventListener("DOMContentLoaded",(function(){console.log("DOM fully loaded and parsed");var n=document.querySelector(".clocks"),r=document.getElementById("add-clock-button"),e=document.getElementById("timezone-selector");if(n&&r&&e)if(window.clocksManagerInitialized)console.log("ClocksManager already initialized");else{var t=new g(n);r.addEventListener("click",(function(){console.log("Add Clock button clicked");var n=parseInt(e.value);t.addClock(n)})),window.clocksManagerInitialized=!0}else console.error("Clocks container, add clock button or timezone selector element was not found.")}))})()})();
//# sourceMappingURL=bundle.js.map