(()=>{"use strict";const e=new XMLHttpRequest,t=document.getElementById("right"),s=document.getElementById("select"),n=document.getElementById("left"),a=document.getElementById("date-data");t.addEventListener("click",(()=>{s.style.display="none",n.style.display="block"})),n.addEventListener("click",(()=>{n.style.display="none",s.style.display="flex"}));let d=new Date;d.getFullYear(),d.getMonth(),d.getDate(),d.getDay(),new Promise((function(e,t){for(let e=0;e<15;e++){var s=moment().subtract(e,"days").format("YYYY[/]MM[/]D");let t=document.createElement("div");t.id="id"+e,t.dataset.send=moment().subtract(e,"days").format("YYYY[-]MM[-]D");let n=document.createTextNode(s);t.appendChild(n),a.appendChild(t)}e()})).then((()=>{const t=document.getElementById("id0"),s=document.getElementById("id1"),n=document.getElementById("id2"),a=document.getElementById("id3"),d=document.getElementById("id4"),o=document.getElementById("id5"),l=document.getElementById("id6"),c=document.getElementById("id7"),i=document.getElementById("id8"),r=document.getElementById("id9"),p=document.getElementById("id10"),h=document.getElementById("id11"),y=document.getElementById("id12"),u=document.getElementById("id13"),g=document.getElementById("id14"),m=document.getElementById("date"),E=document.getElementById("day"),T=document.getElementById("month"),v=document.getElementById("year");t.addEventListener("click",(()=>{e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){let e=JSON.parse(this.responseText);console.log(e),T.innerText=e[0].months,m.innerText=e[0].dates,E.innerText=e[0].dayss,1==e[0].dayss?e[0].dayss="(一)":2==e[0].dayss?e[0].dayss="(二)":3==e[0].dayss?e[0].dayss="(三)":4==e[0].dayss?e[0].dayss="(四)":5==e[0].dayss?e[0].dayss="(五)":6==e[0].dayss?e[0].dayss="(六)":7==e[0].dayss&&(e[0].dayss="(日)"),v.innerText=e[0].years}},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${t.dataset.send}`),e.send()})),s.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${s.dataset.send}`),e.send()})),n.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${n.dataset.send}`),e.send()})),a.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${a.dataset.send}`),e.send()})),d.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${d.dataset.send}`),e.send()})),o.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${o.dataset.send}`),e.send()})),l.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${l.dataset.send}`),e.send()})),c.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${c.dataset.send}`),e.send()})),i.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${i.dataset.send}`),e.send()})),r.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${r.dataset.send}`),e.send()})),p.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${p.dataset.send}`),e.send()})),h.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${h.dataset.send}`),e.send()})),y.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${y.dataset.send}`),e.send()})),u.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${u.dataset.send}`),e.send()})),g.addEventListener("click",(()=>{e.onreadystatechange=function(){4==this.readyState&&200==this.status&&console.log(this.responseText)},e.open("GET",`http://127.0.0.1/paula-class/server/log.php?date=${g.dataset.send}`),e.send()}))}))})();