(()=>{var e={973:()=>{console.log("%c WARNING! ","background: yellow; color: red; font-size: 45px"),console.log("%c This is a browser feature intended for developers.Do NOT copy and paste something here if you do not understand it.You can learn more at:https://en.wikipedia.org/wiki/Self-XSS","font-size: 20px")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(973);const e="http://192.168.43.161/class-room/server/password.php";var t=new XMLHttpRequest;const n=document.getElementById("login"),r=document.getElementById("change"),a=document.getElementById("submit"),s=document.getElementById("sign-out");let i=localStorage,l=null;a.addEventListener("click",(()=>{var o=n.value,a=r.value;o&&a?alert("wrong! You cannot enter two input box together!"):a?i.auth?function(o){let n=Math.floor(1e7*Math.random());t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){let e=t.responseText;console.log(e),"ok"==e?(i.auth=n,location.href="../"):alert("Something wrong!")}},t.open("GET",`${e}?password=${o}&auth=${n}`),t.send()}(a):alert("Something Wrong! (You have to login first)"):o?(function(e){t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){let e=t.responseText;"error"!=e?""==e?l=!0:"password error"==e?l=!1:(i.auth=e,l=!0):l=!1}},t.open("GET",`http://192.168.43.161/class-room/server/seepassword.php?password=${e}&auth=${i.auth}`),t.send()}(o),setTimeout((()=>{1==l?location.href="../":alert("Something Wrong! (Time out) or (password wrong)")}),3e3)):alert("You cannot type without words!")})),s.addEventListener("click",(()=>{i.auth?(t.onreadystatechange=function(){4==this.readyState&&200==this.status&&("ok"==t.responseText?(alert("sign out!"),location.href="../"):alert("Something wrong!"))},t.open("GET",`${e}?password=null&auth=signout`),t.send(),i.removeItem("auth")):alert("You haven't login!")}))})()})();