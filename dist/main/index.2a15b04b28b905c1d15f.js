(()=>{var e={973:()=>{console.log("%c WARNING! ","background: yellow; color: red; font-size: 45px"),console.log("%c This is a browser feature intended for developers.Do NOT copy and paste something here if you do not understand it.You can learn more at:https://en.wikipedia.org/wiki/Self-XSS","font-size: 20px")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var d=t[n]={exports:{}};return e[n](d,d.exports,o),d.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(973);let e=[],t=null,n=null;localStorage.auth?function(){function o(t,o){document.getElementById(t).addEventListener("click",(()=>{"red"==document.getElementById(t).style.backgroundColor?(document.getElementById(t).style.backgroundColor="black",e=e.filter((e=>e!==o))):(document.getElementById(t).style.backgroundColor="red",e.push(o))}))}function r(e,o){document.getElementById(e).addEventListener("click",(()=>{document.getElementById("test").style.backgroundColor="white",document.getElementById("hand").style.backgroundColor="white",document.getElementById("bring").style.backgroundColor="white",document.getElementById("wear").style.backgroundColor="white",document.getElementById("preview").style.backgroundColor="white",document.getElementById("review").style.backgroundColor="white",document.getElementById("register").style.backgroundColor="white",document.getElementById(e).style.backgroundColor="red",t=o}))}function d(e,t){document.getElementById(e).addEventListener("click",(()=>{document.getElementById("student-book").style.backgroundColor="grey",document.getElementById("work-book").style.backgroundColor="grey",document.getElementById("handout").style.backgroundColor="grey",document.getElementById("handout-one").style.backgroundColor="grey",document.getElementById("handout-two").style.backgroundColor="grey",document.getElementById("learning-paper").style.backgroundColor="grey",document.getElementById("diary").style.backgroundColor="grey",document.getElementById(e).style.backgroundColor="red",n=t}))}o("chinese","國文"),o("math","數學"),o("english","英文"),o("chemical","理化"),o("geography","地理"),o("citizen","公民"),o("history","歷史"),o("dance","表藝"),o("scouts","童軍"),o("house","家政"),o("psychology","輔導"),o("artisan","生科"),o("computer","資訊"),o("pe","體育"),o("healthy","健教"),o("orchestra","西樂"),o("cn-orchestra","國樂"),o("listen","聽寫"),o("theory","樂理"),r("test","考"),r("hand","交"),r("bring","帶"),r("wear","穿"),r("preview","預習"),r("review","複習"),r("register","登記"),d("student-book","課本"),d("work-book","習作"),d("handout","講義"),d("handout-one","大講"),d("handout-two","小講"),d("learning-paper","學單"),d("diary","札記");const l=document.getElementById("jobDate"),c=document.getElementById("page"),a=document.getElementById("des");document.getElementById("button").addEventListener("click",(()=>{let o=l.value,r=c.value,d=a.value;location.href=`../send?sendlist=${e}&sendjob=${t}&sendbook=${n}&jobdate=${o}&page=${r}&des=${d}`}))}():(alert("You have to login!"),location.href="../index")})()})();