(()=>{var e={973:()=>{console.log("%c WARNING! ","background: yellow; color: red; font-size: 45px"),console.log("%c This is a browser feature intended for developers.Do NOT copy and paste something here if you do not understand it.You can learn more at:https://en.wikipedia.org/wiki/Self-XSS","font-size: 20px")}},o={};function t(r){var l=o[r];if(void 0!==l)return l.exports;var d=o[r]={exports:{}};return e[r](d,d.exports,t),d.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";t(973);let e=[],o=null,r=null;const l=[document.getElementById("chinese"),document.getElementById("math"),document.getElementById("english"),document.getElementById("chemical"),document.getElementById("geography"),document.getElementById("citizen"),document.getElementById("history"),document.getElementById("dance"),document.getElementById("scouts"),document.getElementById("house"),document.getElementById("psychology"),document.getElementById("artisan"),document.getElementById("computer"),document.getElementById("pe"),document.getElementById("healthy"),document.getElementById("orchestra"),document.getElementById("cn-orchestra"),document.getElementById("listen"),document.getElementById("theory")];l[0].addEventListener("click",(()=>{"red"==l[0].style.backgroundColor?(l[0].style.backgroundColor="black",e=e.filter((e=>"國文"!==e))):(l[0].style.backgroundColor="red",e.push("國文"))})),l[1].addEventListener("click",(()=>{"red"==l[1].style.backgroundColor?(l[1].style.backgroundColor="black",e=e.filter((e=>"數學"!==e))):(l[1].style.backgroundColor="red",e.push("數學"))})),l[2].addEventListener("click",(()=>{"red"==l[2].style.backgroundColor?(l[2].style.backgroundColor="black",e=e.filter((e=>"英文"!==e))):(l[2].style.backgroundColor="red",e.push("英文"))})),l[3].addEventListener("click",(()=>{"red"==l[3].style.backgroundColor?(l[3].style.backgroundColor="black",e=e.filter((e=>"理化"!==e))):(l[3].style.backgroundColor="red",e.push("理化"))})),l[4].addEventListener("click",(()=>{"red"==l[4].style.backgroundColor?(l[4].style.backgroundColor="black",e=e.filter((e=>"地理"!==e))):(l[4].style.backgroundColor="red",e.push("地理"))})),l[5].addEventListener("click",(()=>{"red"==l[5].style.backgroundColor?(l[5].style.backgroundColor="black",e=e.filter((e=>"公民"!==e))):(l[5].style.backgroundColor="red",e.push("公民"))})),l[6].addEventListener("click",(()=>{"red"==l[6].style.backgroundColor?(l[6].style.backgroundColor="black",e=e.filter((e=>"歷史"!==e))):(l[6].style.backgroundColor="red",e.push("歷史"))})),l[7].addEventListener("click",(()=>{"red"==l[7].style.backgroundColor?(l[7].style.backgroundColor="black",e=e.filter((e=>"表藝"!==e))):(l[7].style.backgroundColor="red",e.push("表藝"))})),l[8].addEventListener("click",(()=>{"red"==l[8].style.backgroundColor?(l[8].style.backgroundColor="black",e=e.filter((e=>"童軍"!==e))):(l[8].style.backgroundColor="red",e.push("童軍"))})),l[9].addEventListener("click",(()=>{"red"==l[9].style.backgroundColor?(l[9].style.backgroundColor="black",e=e.filter((e=>"家政"!==e))):(l[9].style.backgroundColor="red",e.push("家政"))})),l[10].addEventListener("click",(()=>{"red"==l[10].style.backgroundColor?(l[10].style.backgroundColor="black",e=e.filter((e=>"輔導"!==e))):(l[10].style.backgroundColor="red",e.push("輔導"))})),l[11].addEventListener("click",(()=>{"red"==l[11].style.backgroundColor?(l[11].style.backgroundColor="black",e=e.filter((e=>"生科"!==e))):(l[11].style.backgroundColor="red",e.push("生科"))})),l[12].addEventListener("click",(()=>{"red"==l[12].style.backgroundColor?(l[12].style.backgroundColor="black",e=e.filter((e=>"資訊"!==e))):(l[12].style.backgroundColor="red",e.push("資訊"))})),l[13].addEventListener("click",(()=>{"red"==l[13].style.backgroundColor?(l[13].style.backgroundColor="black",e=e.filter((e=>"體育"!==e))):(l[13].style.backgroundColor="red",e.push("體育"))})),l[14].addEventListener("click",(()=>{"red"==l[14].style.backgroundColor?(l[14].style.backgroundColor="black",e=e.filter((e=>"健教"!==e))):(l[14].style.backgroundColor="red",e.push("健教"))})),l[15].addEventListener("click",(()=>{"red"==l[15].style.backgroundColor?(l[15].style.backgroundColor="black",e=e.filter((e=>"西樂"!==e))):(l[15].style.backgroundColor="red",e.push("西樂"))})),l[16].addEventListener("click",(()=>{"red"==l[16].style.backgroundColor?(l[16].style.backgroundColor="black",e=e.filter((e=>"國樂"!==e))):(l[16].style.backgroundColor="red",e.push("國樂"))})),l[17].addEventListener("click",(()=>{"red"==l[17].style.backgroundColor?(l[17].style.backgroundColor="black",e=e.filter((e=>"聽寫"!==e))):(l[17].style.backgroundColor="red",e.push("聽寫"))})),l[18].addEventListener("click",(()=>{"red"==l[18].style.backgroundColor?(l[18].style.backgroundColor="black",e=e.filter((e=>"樂理"!==e))):(l[18].style.backgroundColor="red",e.push("樂理"))}));const d=[document.getElementById("test"),document.getElementById("hand"),document.getElementById("bring"),document.getElementById("wear"),document.getElementById("preview"),document.getElementById("review")];function n(){d[0].style.backgroundColor="white",d[1].style.backgroundColor="white",d[2].style.backgroundColor="white",d[3].style.backgroundColor="white",d[4].style.backgroundColor="white",d[5].style.backgroundColor="white"}d[0].addEventListener("click",(()=>{n(),d[0].style.backgroundColor="red",o="考"})),d[1].addEventListener("click",(()=>{n(),d[1].style.backgroundColor="red",o="交"})),d[2].addEventListener("click",(()=>{n(),d[2].style.backgroundColor="red",o="帶"})),d[3].addEventListener("click",(()=>{n(),d[3].style.backgroundColor="red",o="穿"})),d[4].addEventListener("click",(()=>{n(),d[4].style.backgroundColor="red",o="預習"})),d[5].addEventListener("click",(()=>{n(),d[5].style.backgroundColor="red",o="複習"}));const c=[document.getElementById("student-book"),document.getElementById("work-book"),document.getElementById("handout"),document.getElementById("handout-one"),document.getElementById("handout-two"),document.getElementById("learning-paper")];function s(){c[0].style.backgroundColor="grey",c[1].style.backgroundColor="grey",c[2].style.backgroundColor="grey",c[3].style.backgroundColor="grey",c[4].style.backgroundColor="grey",c[5].style.backgroundColor="grey"}c[0].addEventListener("click",(()=>{s(),c[0].style.backgroundColor="red",r="課本"})),c[1].addEventListener("click",(()=>{s(),c[1].style.backgroundColor="red",r="習作"})),c[2].addEventListener("click",(()=>{s(),c[2].style.backgroundColor="red",r="講義"})),c[3].addEventListener("click",(()=>{s(),c[3].style.backgroundColor="red",r="大講"})),c[4].addEventListener("click",(()=>{s(),c[4].style.backgroundColor="red",r="小講"})),c[5].addEventListener("click",(()=>{s(),c[5].style.backgroundColor="red",r="學單"}));const a=document.getElementById("jobDate"),u=document.getElementById("page"),k=document.getElementById("des");document.getElementById("button").addEventListener("click",(()=>{let t=a.value,l=u.value,d=k.value,n={sendList:e,sendJob:o,sendBook:r,jobDate:t,page:l,des:d};console.log(n),location.href=`../send?sendlist=${e}&sendjob=${o}&sendbook=${r}&jobdate=${t}&page=${l}&des=${d}`}))})()})();