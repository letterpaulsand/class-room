(()=>{"use strict";const e=new XMLHttpRequest,t=document.getElementById("right"),s=document.getElementById("select"),n=document.getElementById("left"),a=document.getElementById("date-data");t.addEventListener("click",(()=>{s.style.display="none",n.style.display="block"})),n.addEventListener("click",(()=>{n.style.display="none",s.style.display="flex"}));let d=new Date;function o(e){for(var t="",s=0,n=e.length;s<n;s++){var a=e[s].charCodeAt(0);a>=65280&&a<=65519&&(a=255&a+32),t+=String.fromCharCode(a)}return t}d.getFullYear(),d.getMonth(),d.getDate(),d.getDay(),new Promise((function(e,t){for(let e=0;e<15;e++){var s=moment().subtract(e,"days").format("YYYY[/]MM[/]D");let t=document.createElement("div");t.id="id"+e,t.dataset.send=moment().subtract(e,"days").format("YYYY[-]MM[-]D");let n=document.createTextNode(s);t.appendChild(n),a.appendChild(t)}e()})).then((()=>{const t=document.getElementById("id0"),s=document.getElementById("id1"),n=document.getElementById("id2"),a=document.getElementById("id3"),d=document.getElementById("id4"),l=document.getElementById("id5"),c=document.getElementById("id6"),i=document.getElementById("id7"),r=document.getElementById("id8"),h=document.getElementById("id9"),p=document.getElementById("id10"),y=document.getElementById("id11"),u=document.getElementById("id12"),g=document.getElementById("id13"),m=document.getElementById("id14"),E=document.getElementById("date"),v=document.getElementById("day"),T=document.getElementById("month"),f=document.getElementById("year"),B=document.getElementById("homework");t.addEventListener("click",(()=>{e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){let n=JSON.parse(this.responseText);console.log(n),T.innerText=n[0].months,E.innerText=n[0].dates,f.innerText=n[0].years,1==n[0].dayss?n[0].dayss="(一)":2==n[0].dayss?n[0].dayss="(二)":3==n[0].dayss?n[0].dayss="(三)":4==n[0].dayss?n[0].dayss="(四)":5==n[0].dayss?n[0].dayss="(五)":6==n[0].dayss?n[0].dayss="(六)":7==n[0].dayss&&(n[0].dayss="(日)"),v.innerText=n[0].dayss;let a=`${n[0].years}-${n[0].months}-${n[0].dates}`,d=moment(a),l=null;for(let a=0;a<n.length;a++){var e=d.to(n[a].jobdate);"a few seconds ago"==e?l="今天":"in a day"==e?l="明天":"in 2 days"==e?l="後天":"in 7 days"==e&&(l="下禮拜");var t=document.createElement("div"),s=document.createTextNode(`${o(a+1)}. ${l}${n[a].sendjob}${n[a].sendlist}${n[a].pages}${n[a].dess}`);t.appendChild(s),B.appendChild(t)}}},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${t.dataset.send}`),e.send()})),s.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${s.dataset.send}`),e.send()})),n.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${n.dataset.send}`),e.send()})),a.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${a.dataset.send}`),e.send()})),d.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${d.dataset.send}`),e.send()})),l.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${l.dataset.send}`),e.send()})),c.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${c.dataset.send}`),e.send()})),i.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${i.dataset.send}`),e.send()})),r.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${r.dataset.send}`),e.send()})),h.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${h.dataset.send}`),e.send()})),p.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${p.dataset.send}`),e.send()})),y.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${y.dataset.send}`),e.send()})),u.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${u.dataset.send}`),e.send()})),g.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${g.dataset.send}`),e.send()})),m.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${m.dataset.send}`),e.send()}))}))})();